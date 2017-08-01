var gulp = require('gulp'),
    minifycss = require('gulp-clean-css'),
    autoprefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    del = require('del');
    htmlmin = require('gulp-htmlmin')

gulp.task('styles', function () {
    return gulp.src('src/styles/*.css')
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        .pipe(gulp.dest('dist/css'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(minifycss())
        .pipe(gulp.dest('dist/css'))
        .pipe(notify({ message: 'Styles task complete' }));
});

gulp.task('images', function() {
  return gulp.src('src/images/*')
    .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
    .pipe(gulp.dest('dist/img'))
    .pipe(notify({ message: 'Images task complete' }));
});

gulp.task('imagesPizza', function() {
  return gulp.src('views/images/*')
    .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
    .pipe(gulp.dest('views/images'))
    .pipe(notify({ message: 'Images task complete' }));
});

gulp.task('clean', function(cb) {
    del(['dist/img', 'dist/css'], cb)
});

gulp.task('scripts', function() {
  return gulp.src('src/scripts/*.js')
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
    .pipe(notify({ message: 'Scripts task complete' }));
});
gulp.task('minifyHtml', function() {
  return gulp.src('src/index.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest(''))
    .pipe(notify({message:'html task complete'}));
});

// gulp.task('default', ['clean'], function() {
//     gulp.start('styles', 'images');
// });
gulp.task('default', ['styles','images','scripts','imagesPizza','minifyHtml']);

