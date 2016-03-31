/*
  Todo:
  What does Sourcemaps.write do?
  Hook Up browserSync!
  Check if all files are working and doing what their supposed to do!
*/

"use strict"

const gulp = require('gulp');
const sass = require('gulp-sass');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const cssnano = require('gulp-cssnano');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();

const concatOrder = ['app/js', 'app/js']

gulp.task('scripts', function(){
  return gulp.src(concatOrder)
    .pipe(sourcemaps.init())
      .pipe(babel())
      .pipe(concat('main.min.js'))
      .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('Ahad-Wasim/dist/js'))
    .pipe(browserSync.reload({ stream: true}))
});

gulp.task('sass', function(){
  return gulp.src('assets/sass/**/*.scss')
    .pipe(sourcemaps.init())
      .pipe(sass())
      .pipe(cssnano())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('Ahad-Wasim/dist/css/main.min.css'))
    .pipe(browserSync.reload({ stream: true }))
})

gulp.task('serve', function(){
  browserSync.init({
    server: {
      baseDir: './'
    }
  })
});

gulp.task('watch', ['serve'], function(){
  gulp.watch('assets/sass/**/*.scss', ['sass'])
  gulp.watch('./**/*.html').on('change', browserSync.reload);
});





