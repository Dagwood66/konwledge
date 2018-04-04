'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var browserSync = require('browser-sync');
var useref = require('gulp-useref');
var imagemin = require('gulp-imagemin');
var del = require('del');
var ngAnnotate = require('gulp-ng-annotate');
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');
var htmlmin = require('gulp-htmlmin');
var gulpIf = require('gulp-if');
var rev = require('gulp-rev');
var revCollector = require('gulp-rev-collector');
var domSrc = require('gulp-dom-src');
var cheerio = require('gulp-cheerio');
var ftp = require('gulp-ftp');
var config = require('./config.json');
var sass = require('gulp-sass');

//开发
gulp.task('browserSync', function () {
    browserSync({
        browser: ["chrome"],
        port: 3010,
        server: {
            baseDir: 'app'
        }
    })
});

gulp.task('sass', function () {
    return gulp.src('app/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('app'));
});

gulp.task('sass:watch', function () {
    gulp.watch('app/**/*.scss', ['sass']);
});

gulp.task('default', ['browserSync'], function () {
    gulp.watch(['app/**/*.*', "!app/lib/**/*.*"], browserSync.reload);
});

//编译
//清空上一次编译
gulp.task("clear", function () {
    return del(["dist/**/*"]);
});
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
//异步调试
gulp.task('browserSyncDist', function () {
    browserSync({
        browser: ["chrome"],
        port: 3010,
        server: {
            baseDir: 'dist'
        }
    })
});
//CDN替换
gulp.task('cdnReplace', ["revCon"],  function () {
    return gulp.src(['dist/index.html'])
        .pipe(cheerio(function ($, file) {

            var cdnMap = config.cdnMap;
            var links = $('link');
            for (var i = 0; i < links.length; i++) {
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
            for (var m = 0; m < links.length; m++) {
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

//图片压缩 因速度问题置于最后
gulp.task("images", ["build"], function () {
    return gulp.src('app/**/*.+(png|jpg|gif|svg)')
        .pipe(imagemin())
        .pipe(gulp.dest("dist"))
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