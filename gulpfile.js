// Created by kousuke on 2016/8/17.

/*组件安装：
cnpm install --save-dev gulp
cnpm install --save-dev gulp-minify gulp-concat pump fs del
cnpm install --save-dev gulp-uglify gulp-cssnano gulp-sourcemaps gulp-rename gulp-notify gulp-autoprefixer
cnpm install --save-dev gulp-imagemin
cnpm install --save-dev imagemin-optipng imagemin-jpegtran imagemin-gifsicle*/

const gulp = require('gulp'),
      minify = require('gulp-minify'),
      concat = require('gulp-concat'),
      pump = require('pump'),
      fs = require('fs'),
      del = require('del'),
      uglify = require('gulp-uglify'),
      cssnano = require('gulp-cssnano'),
      sourcemaps = require('gulp-sourcemaps'),
      rename = require('gulp-rename'),
      notify = require('gulp-notify'),
      autoprefixer =require('gulp-autoprefixer'),
      imagemin = require('gulp-imagemin'),
      imageminOptipng = require('imagemin-optipng'),
      imageminJpegtran = require('imagemin-jpegtran'),
      imageminGifsicle = require('imagemin-gifsicle');

gulp.task('default'/*, ['watch']*/, function() {
    // content
});

// var watcher = gulp.watch('Public/images/banner/*', ['optimizeall']);
// watcher.on('add', function(event) {
//   console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
// });

// gulp.task('watch', function() {
//     gulp.watch(['Public/images/*'], ['optimizeall']);
// });

gulp.task('optimizeall', function(){
    return gulp.src(['assets/*/*'],{base:'assets'})
        .pipe(imagemin())
        .pipe(gulp.dest('assets'))
});
