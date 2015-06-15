var gulp = require('gulp');
var svgstore = require('gulp-svgstore');
var svgmin = require('gulp-svgmin');
var rename = require('gulp-rename');
var inject = require('gulp-inject');
var path = require('path');

console.log(path.join(__dirname, 'svg.html'));

gulp.task('svgstore', function () {
    return gulp
        .src('public/svg/*.svg')
        .pipe(svgstore({ inlineSvg: true }))
        .pipe(rename(function(path) {
            path.basename = 'inline-svg';
            path.extname = '.html';
        }))
        .pipe(gulp.dest(path.join(__dirname, 'public/sprite-svg')));
});

gulp.task('default', function() {
    var svgs = gulp
        .src('public/svg/*.svg')
        .pipe(svgstore({ inlineSvg: true }));

    return gulp
        .src('public/sprite-svg/inline-svg.html')
        .pipe(inject(svgs))
        .pipe(gulp.dest('public/sprite-svg'));
});