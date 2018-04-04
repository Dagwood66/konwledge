'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');
var useref = require('gulp-useref');
var imagemin = require('gulp-imagemin');
var del = require('del');
var ngAnnotate = require('gulp-ng-annotate');
var autoprefixer = require('gulp-autoprefixer');
var htmlmin = require('gulp-htmlmin');
var minifyCSS = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var rev = require('gulp-rev');
var revCollector = require('gulp-rev-collector');
var domSrc = require('gulp-dom-src');
var cheerio = require('gulp-cheerio');
var spritesmith = require('gulp.spritesmith');
var ftp = require('gulp-ftp');
//同步任务执行插件
var gulpSequence = require('gulp-sequence')
var config = require('./config.json');
var changed = require('gulp-changed');
var vinylPaths = require('vinyl-paths');

//lib异步编译
gulp.task("lib", ["clear"], function () {
    return gulp.src("app/lib/**/*.*")
        .pipe(gulp.dest("dist/lib"));
});
//资源文件编译
gulp.task("res", ["clear"], function () {
    return gulp.src(['app/**/*.*', '!app/lib/**/*.*', '!app/**/*.css', '!app/**/*.js'])
        .pipe(gulp.dest("dist"));
});
//压缩合并
gulp.task("optimize", ["lib", "res"], function () {
    return gulp.src(['app/index.html'])
        .pipe(useref())
        .pipe(gulpIf('*.css', minifyCSS()))
        .pipe(gulpIf('*.js', ngAnnotate({
                remove: true,
                add: true,
                single_quotes: true
            })
        ))
        .pipe(gulp.dest("dist"));
});
//额外文件编译
gulp.task("exception", ["optimize"], function () {
    return gulp.src(["app/module/position/**/*.*"])
        .pipe(gulp.dest("dist/module/position"));
});
//html压缩
gulp.task("htmlmin", ["exception"], function () {
    var options = {
        removeComments: true,//清除HTML注释
        collapseWhitespace: true,//压缩HTML
        collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
        removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
        removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
        removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
        minifyJS: true,//压缩页面JS
        minifyCSS: true//压缩页面CSS
    };
    return gulp.src(['dist/**/*.html', '!dist/lib/**/*.*'])
        .pipe(htmlmin(options))
        .pipe(gulp.dest("dist"));
});
//css添加后缀
gulp.task('revCss', ["htmlmin"], function () {
    return gulp.src("dist/css/*.css")
        .pipe(rev())
        .pipe(gulp.dest('dist/css'))
        .pipe(rev.manifest())
        .pipe(gulp.dest('dist/css'));
});
//js添加后缀
gulp.task('revJs', ["optimize"], function () {
    return gulp.src("dist/js/*.js")
        .pipe(uglify())
        .pipe(rev())
        .pipe(gulp.dest('dist/js'))
        .pipe(rev.manifest())
        .pipe(gulp.dest('dist/js'));
});
//后缀文件引用保持同步
gulp.task("revCon", ["revCss", "revJs"], function () {
    return gulp.src(['dist/**/rev-manifest.json', 'dist/**/*.html'])
        .pipe(revCollector())
        .pipe(gulp.dest('dist'));
});
//CDN替换
gulp.task('cdnReplace', ["revCon"], function () {
    return gulp.src(['dist/index.html'])
        .pipe(cheerio(function ($, file) {

            var cdnMap = config.cdnMap;
            var links = $('link');
            for (var i = 0; i < links.length && links != null; i++) {
                var link = links[i];
                var href = link["attribs"]["href"];
                var s = href.substring(href.lastIndexOf("/") + 1, href.length);
                for (var j = 0; j < cdnMap.length; j++) {
                    var data = cdnMap[j];
                    if (s === data.name) {
                        link["attribs"]["href"] = data.map;
                        break;
                    }
                }
            }
            var scripts = $('script');
            for (var m = 0; m < links.length && links != null; m++) {
                var script = scripts[m];
                var src = script["attribs"]["src"];
                var s = src.substring(src.lastIndexOf("/") + 1, src.length);
                for (var n = 0; n < cdnMap.length; n++) {
                    var data = cdnMap[n];
                    if (s === data.name) {
                        script["attribs"]["src"] = data.map;
                        break;
                    }
                }
            }
        }))
        .pipe(gulp.dest('dist/'));
});
//编译
gulp.task("build", ["cdnReplace"], function () {
    // return "";
});
gulp.task("ftp", ["images"], function () {
    return gulp.src(['dist/**/*.*', '!dist/lib/**/*.*'])
        .pipe(ftp({
            host: config.ftp.host,
            port: config.ftp.port,
            user: config.ftp.user,
            pass: config.ftp.pass,
            remotePath: config.ftp.remotePath
        }));
    // .pipe(gutil.noop());
});
gulp.task('relBrowserSync', function () {
    browserSync({
        browser: ["chrome"],
        port: 3002,
        server: {
            baseDir: 'dist'
        }
    })
});
gulp.task("release", ["relBrowserSync"], function () {

});
gulp.task("images", ["build"], function () {
    return gulp.src('app/**/*.+(png|jpg|gif|svg)')
        .pipe(imagemin())
        .pipe(gulp.dest("dist"))
});

/*-----------------------常用工具 start---------------------*/
//精灵图
gulp.task("sprite", function () {
    //精灵图生成
    var inputPath = ["asset/images/*.png"];
    var outputPngName = "icons.png";
    var outputCssName = "icons_no_edit.css";
    var outputPngPath = "app/images";
    var outputCssPath = "app/css";
    //图片相对于文件的位置
    var outputRelativeFilePath = "../images/";
    return gulp.src(inputPath).pipe(spritesmith({
        imgName: outputPngName,
        cssName: outputCssName,
        cssTemplate: function (data) {
            var arr = [],
                width = data.spritesheet.px.width,
                height = data.spritesheet.px.height,
                url = data.spritesheet.image;
            data.sprites.forEach(function (sprite) {
                arr.push(
                    "." + sprite.name +
                    "{" +
                    "display: inline-block;" +
                    "vertical-align: top;" +
                    "background: url('" + outputRelativeFilePath + url + "') " +
                    "no-repeat " +
                    sprite.px.offset_x + " " + sprite.px.offset_y + ";" +
                    "width: " + sprite.px.width + ";" +
                    "height: " + sprite.px.height + ";" +
                    "}"
                )
            });
            return arr.join("");
        }
    })).pipe(gulpIf(outputPngName, gulp.dest(outputPngPath)))
        .pipe(gulpIf(outputCssName, gulp.dest(outputCssPath)));
});
/*-----------------------常用工具 end---------------------*/



/*-----------------------开发环境 start---------------------*/
//浏览器实时刷新配置
gulp.task('devBrowserSync', function () {
    browserSync({
        browser: ["chrome"],
        port: 3002,
        server: {
            baseDir: 'app'
        }
    })
});
//Sass编译-前缀添加
gulp.task("sass", function () {
    return gulp.src(["app/sass/*.sass", "app/sass/*.scss"])
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('app/css'));
});

//开发入口
gulp.task("default", ["devBrowserSync", "sass"], function () {
    //浏览器实时刷新
    gulp.watch(["app/**/*.*", "!app/lib/**/*.*"], browserSync.reload);
    //Sass实时编译
    gulp.watch(["app/sass/*.sass", "app/sass/*.scss"], ["sass"]);
});
/*-----------------------开发环境 end---------------------*/



/*-----------------------发布环境 start---------------------*/

//lib编译
gulp.task("lib", function () {
    return gulp.src(["app/lib/**/*.*"])
        .pipe(gulp.dest("dist/lib"));
});

//编译压缩图片
gulp.task("minifyImages", function () {
    return gulp.src(['app/**/*.+(png|jpg|gif|svg|ico)', "!app/lib/**/*.*"])
        .pipe(imagemin())
        .pipe(gulp.dest("dist"));
});
//
gulp.task("a", gulpSequence("clear", "lib", ["minifyHtml", "minifyCss", "minifyJavascript", "minifyImages"]));
/*-----------------------发布环境 end---------------------*/


gulp.task("sprite_2x", function () {
    //精灵图生成
    var inputPath = ["asset/images/*@2x.png"];
    var outputPngName = "icons@2x.png";
    var outputCssName = "icons@2x_no_edit.scss";
    var outputPngPath = "app/images";
    var outputCssPath = "app/sass";
    //图片相对于文件的位置
    var outputRelativeFilePath = "../images/";
    return gulp.src(inputPath).pipe(spritesmith({
        imgName: outputPngName,
        cssName: outputCssName,
        cssTemplate: function (data) {
            return "";
        }
    })).pipe(gulpIf(outputPngName, gulp.dest(outputPngPath)));
});

gulp.task("sprite_test", ["sprite_2x"], function () {
    //精灵图生成
    var inputPath = ["asset/images/*.png", "!asset/images/*@2x.png"];
    var outputPngName = "icons.png";
    var outputCssName = "icons_no_edit.scss";
    var outputPngPath = "app/images";
    var outputCssPath = "app/sass";
    //图片相对于文件的位置
    var outputRelativeFilePath = "../images/";
    return gulp.src(inputPath).pipe(spritesmith({
        imgName: outputPngName,
        cssName: outputCssName,
        cssTemplate: function (data) {
            var arr = [],
                width = data.spritesheet.px.width,
                height = data.spritesheet.px.height,
                url = data.spritesheet.image;

            if (data.sprites && data.sprites.length > 0) {
                arr.push(
                    '.gzh_icon {' +
                    '   display: inline-block;' +
                    '   vertical-align: top;' +
                    '   background: url("' + outputRelativeFilePath + outputPngName + '") no-repeat;' +
                    '}'
                );
                //2x
                arr.push(
                    '@media only screen and (-webkit-min-device-pixel-ratio: 2),' +
                    'only screen and (min--moz-device-pixel-ratio: 2),' +
                    'only screen and (-o-min-device-pixel-ratio: 2/1),' +
                    'only screen and (min-device-pixel-ratio: 2) {' +
                    '   .gzh_icon {' +
                    '      background: url("' + outputRelativeFilePath + 'icons@2x.png") no-repeat;' +
                    '      background-size: 50%;' +
                    '   }' +
                    '}'
                );
            }

            data.sprites.forEach(function (sprite) {
                arr.push(
                    '.' + sprite.name + ' {' +
                    '   background-position: ' + sprite.px.offset_x + ' ' + sprite.px.offset_y + ';' +
                    '   width: ' + sprite.width + 'px;' +
                    '   height: ' + sprite.height + 'px;' +
                    '}'
                );
            });

            return arr.join("");
        }
    })).pipe(gulpIf(outputPngName, gulp.dest(outputPngPath)))
        .pipe(gulpIf(outputCssName, gulp.dest(outputCssPath)));
});


gulp.task("clear", function () {
    return del(["dist/**/*", "!dist/lib", "!dist/lib/**/*"]);
});

gulp.task("lib", function () {
    return gulp.src("app/lib/**/*.*")
        .pipe(changed("dist/lib"))
        .pipe(gulp.dest("dist/lib"));
});

gulp.task("copyAppToDist", function () {
    return gulp.src([
        "app/**/*.*",
        "!app/sass",
        "!app/sass/**/*",
        "!app/lib",
        "!app/lib/**/*"])
        .pipe(gulp.dest("dist"));
});

gulp.task("add_rev", function () {
    return gulp.src(["dist/**/*.css", "dist/**/*.js", "!dist/lib/**/**.*"])
        .pipe(vinylPaths(del))
        .pipe(rev())
        .pipe(gulp.dest("dist"))
        .pipe(rev.manifest())
        .pipe(gulp.dest("dist"));
});

gulp.task("replace_path", function () {
    return gulp.src(["dist/**/rev-manifest.json", "dist/**/*.html", "!dist/lib/**/**.*"])
        .pipe(revCollector())
        .pipe(gulp.dest("dist"));
});

gulp.task("minifyHtml", function () {
    var options = {
        collapseWhitespace: true,//移除换行
        minifyJS: true,//压缩页面JS
        minifyCSS: true,//压缩页面CSS
        removeComments: true//清除HTML注释
    };
    return gulp.src(["dist/**/*.html", "!dist/lib/**/*.*"])
        .pipe(htmlmin(options))
        .pipe(gulp.dest("dist"));
});
//编译压缩Css
gulp.task("minifyCss", function () {
    return gulp.src(["dist/**/*.css", "!dist/lib/**/*.*"])
        .pipe(minifyCSS())
        .pipe(gulp.dest("dist"));
});
//编译压缩Javascript
gulp.task("minifyJavascript", function () {
    return gulp.src(["dist/**/*.js", "!dist/lib/**/*.*"])
        .pipe(uglify())
        .pipe(gulp.dest("dist"));
});

gulp.task("build_test", gulpSequence("clear", ["lib", "copyAppToDist"], "add_rev", "replace_path", ["minifyHtml", "minifyCss", "minifyJavascript"]));

reference