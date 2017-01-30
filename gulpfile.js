'use strict';

var gulp = require('gulp');
var mocha = require('gulp-mocha');
var istanbul = require('gulp-istanbul');
var eslint = require('gulp-eslint');

gulp.task('coverage', function() {
  return gulp.src(['index.js', 'utils.js'])
    .pipe(istanbul())
    .pipe(istanbul.hookRequire());
});

gulp.task('test', ['coverage'], function() {
  return gulp.src('test/*.js')
    .pipe(mocha({reporter: 'spec'}))
    .pipe(istanbul.writeReports())
    .pipe(istanbul.writeReports({
      reporters: [ 'text', 'text-summary' ],
      reportOpts: {dir: 'coverage', file: 'summary.txt'}
    }));
});

gulp.task('lint', function() {
  return gulp.src(['*.js', 'test/*.js', 'gulpfile.js'])
    .pipe(eslint())
    .pipe(eslint.format());
});

gulp.task('default', ['test', 'lint']);
