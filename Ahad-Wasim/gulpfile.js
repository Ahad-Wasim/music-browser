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
const concatOrder = ['app/js/data.js', 'app/js/main.js'];

gulp.task('scripts', function(){
  return gulp.src(concatOrder)
    .pipe(sourcemaps.init())
      .pipe(plumber())
      .pipe(babel()) 
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
      .pipe(sass()) 
      .pipe(cssnano())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./dist/css'))
    .pipe(browserSync.reload({ stream: true }))
})

gulp.task('serve', function(){
  browserSync.init({
    server: {
      baseDir: './'
    }
  })
});

gulp.task('default', ["scripts", "sass", "serve"], function(){
  gulp.watch('assets/sass/**/*.scss', ['sass'])
  gulp.watch(concatOrder, ['scripts'])
  gulp.watch('./**/*.html').on('change', browserSync.reload);
});





