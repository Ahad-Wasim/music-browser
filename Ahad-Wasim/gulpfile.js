"use strict"

const gulp = require('gulp');
const sass = require('gulp-sass');
const babel = require('gulp-babel');
const concat = require('concat');


gulp.task('default', function(){
  return gulp.src('src/app.js')
    .pipe(babel())
    .pipe(gulp.dest('dist'))
})

gulp.task('sass', function(){
  return gulp.src('')
    .pipe(sass())
    .pipe(gulp.dest('Ahad-Wasim/dist'))
})

gulp.task('', function(){

})
