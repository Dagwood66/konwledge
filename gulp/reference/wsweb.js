'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');
var useref = require('gulp-useref');
var imagemin = require('gulp-imagemin');
var del = require('del');
var ngAnnotate = require('gulp-ng-annotate');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var minifyCSS = require('gulp-minify-css');
var rev = require('gulp-rev');
var revCollector = require('gulp-rev-collector');

//开发
gulp.task('browserSync', function () {
    browserSync({
        browser: ["chrome"],
        port: "3000",
        server: {
            // proxy: "'http://t.gzh-bds.top/api",
            baseDir: 'app'
        }
    })
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
        // .pipe(gulpIf('*.js', uglify()))
        .pipe(gulp.dest("dist"));
});
//额外文件编译
gulp.task("exception", ["optimize"], function () {
    return gulp.src(["app/module/position/**/*.*"])
        .pipe(gulp.dest("dist/module/position"));
});
//css添加后缀
gulp.task('revCss', ["exception"], function () {
    return gulp.src("dist/css/*.css")
        .pipe(rev())
        .pipe(gulp.dest('dist/css'))
        .pipe(rev.manifest())
        .pipe(gulp.dest('dist/css'));
});
//js添加后缀
gulp.task('revJs', ["optimize"], function () {
    return gulp.src("dist/js/*.js")
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
        port: "3000",
        server: {
            baseDir: 'dist'
        }
    })
});
//编译
gulp.task("build", ["revCon"], function () {
    // return "";
});
//图片压缩 因速度问题置于最后
gulp.task("images", function () {
    return gulp.src('app/**/*.+(png|jpg|gif|svg)')
        .pipe(imagemin())
        .pipe(gulp.dest("dist"))
});