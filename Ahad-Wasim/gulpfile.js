"use strict"

const gulp = require('gulp');
const sass = require('gulp-sass');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const cssnano = require('gulp-cssnano');
const plumber = require('gulp-plumber');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();
const concatOrder = ['app/js/file1.js', 'app/js/file2.js', 'app/js/file3.js'];

gulp.task('scripts', function(){
  return gulp.src(concatOrder)
    .pipe(sourcemaps.init())
      .pipe(plumber())
      .pipe(babel()) // NOTE: ES6 import statement won't work here
      .pipe(concat('main.min.js'))
      .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./dist/js'))
    .pipe(browserSync.reload({ stream: true }))
});

gulp.task('sass', function(){
  return gulp.src('assets/sass/**/*.scss')
    .pipe(sourcemaps.init())
      .pipe(plumber())
      .pipe(sass()) // For the moment files are not being outputted in right directory
      .pipe(cssnano())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./dist/css/main.min.css'))
    .pipe(browserSync.reload({ stream: true }))
})

gulp.task('serve', function(){
  browserSync.init({
    server: {
      baseDir: './'
    }
  })
});

gulp.task('default', ['serve'], function(){
  gulp.watch('assets/sass/**/*.scss', ['sass'])
  gulp.watch(concatOrder, ['scripts'])
  gulp.watch('./**/*.html').on('change', browserSync.reload);
});





