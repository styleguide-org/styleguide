'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    prefix = require('gulp-autoprefixer'),
    livereload = require('gulp-livereload'),
    lr = require('tiny-lr'),
    server = lr(),
    minifyCSS = require('gulp-minify-css');

var exec = require('child_process').exec,
    child = null;

// Compile Sass
gulp.task('sass', function() {

    gulp.src('./src/scss/base-styles.scss')
        .pipe(sass())
        .pipe(minifyCSS({
            keepSpecialComments: 0
        }))
        .pipe(gulp.dest('./release/'))
        .pipe(livereload(server));

    gulp.src('./src/scss/extension-styles.scss')
        .pipe(sass())
        .pipe(minifyCSS({
            keepSpecialComments: 0
        }))
        .pipe(gulp.dest('./release/'))
        .pipe(livereload(server));

    gulp.src('./src/scss/list.scss')
        .pipe(sass())
        .pipe(minifyCSS({
            keepSpecialComments: 0
        }))
        .pipe(gulp.dest('./release/'))
        .pipe(livereload(server));

    gulp.src('./src/scss/tab-secondary.scss')
        .pipe(sass())
        .pipe(minifyCSS({
            keepSpecialComments: 0
        }))
        .pipe(gulp.dest('./release/'))
        .pipe(livereload(server));

    gulp.src('./src/scss/thumbnail.scss')
        .pipe(sass())
        .pipe(minifyCSS({
            keepSpecialComments: 0
        }))
        .pipe(gulp.dest('./release/'))
        .pipe(livereload(server));
    // kss doc 用到
    gulp.src('./src/scss/main.scss')
        .pipe(sass())
        .pipe(gulp.dest('./src/doc'))
        .pipe(livereload(server));
    // kss doc 用到
    gulp.src('./src/scss/sg.scss')
        .pipe(sass())
        .pipe(gulp.dest('./src/doc'))
        .pipe(livereload(server));
});

gulp.task('watch', function() {
    gulp.run('default');
    server.listen(35729, function(err) {
        if (err) return console.log(err);
    });
    // Watch For Changes To SCSS
    gulp.watch(['./src/scss/*.scss', './src/doc/styleguide.md'], function() {
        gulp.run('default');
    });
});

// Autoprefixer
gulp.task('prefix', function() {
    gulp.src('./release/*.css')
        .pipe(prefix('last 2 version', '> 1%', 'iOS >=6', 'Android >= 2.3'))
        .pipe(gulp.dest('./release'));
});

gulp.task('compole-kss', function() {
    child = exec('rm styleguide/release/*.css', function() {});
    // Auto re-compile kss
    child = exec('kss-node src/doc/ styleguide/ --css src/doc/main.css --template styleguide/template/', function() {

    });
});

gulp.task('default', function() {
    gulp.run('sass', 'compole-kss');
});