const gulp = require('gulp');
const webpack = require('webpack-stream');
var ts = require('gulp-typescript');
var debug = require('gulp-debug')
var webpackConfig = require('./webpack.config')
var rm = require('gulp-rm')
var browserSync = require('browser-sync').create();

gulp.task('serve', function () {

    browserSync.init({
        server: "./dist"
    });

    gulp.watch("dist/*.js").on('change', browserSync.reload);
});

function minify(cb) {
    // body omitted
    cb();
}

gulp.task('rm', function () {
    return gulp
        .src('build/**/*')
        .pipe(rm())
})

gulp.task('transpile', function () {
    return gulp.src('src/**/*.ts')
        .pipe(debug())
        .pipe(ts.createProject('tsconfig.json')())
        .pipe(gulp.dest('build/'));
});

gulp.task('bundle', function () {
    return gulp
        .src('build/index.js')
        .pipe(debug())
        .pipe(
            webpack(webpackConfig)
        )
        .pipe(gulp.dest('dist/'));
});

gulp.task('copy', function () {
    return gulp.src('./index.html')
        .pipe(gulp.dest('dist/'))
})

gulp.task('build-dev', gulp.series('transpile', 'bundle', 'copy'))
gulp.task('build-prod', gulp.series('transpile', 'bundle', 'copy', minify))

exports.rm = gulp.series('rm');
exports.default = gulp.series('rm','build-dev', 'serve');

gulp.watch(['./src/**/*.ts'], gulp.series('build-dev'))