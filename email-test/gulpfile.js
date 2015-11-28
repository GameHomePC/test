// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
var inlineCss = require('gulp-inline-css');

// Include the config
var config = require('./config.json');

// Compile Our Sass
gulp.task('sass', function() {
    return gulp.src('./src/scss/*.scss')
    .pipe(sass({errLogToConsole: true}))
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(gulp.dest('./src/css'))
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task('inlineCss', function() {
    setTimeout(function() {
        return gulp.src('./src/html/*.html')
            .pipe(inlineCss())
            .pipe(gulp.dest('./src/build/'))
            .pipe(browserSync.reload({ stream: true }));
    }, 1000);
});

// BrowserSync
gulp.task('browser-sync', function() {
    browserSync.init({
        proxy: {
            target: "test.loc"
        },
        open: false
    });
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('src/scss/*.scss', ['sass', 'inlineCss']);
    gulp.watch('src/html/*.html', ['inlineCss']);
    gulp.watch('src/html/*.html').on('change', browserSync.reload);
});

// Default Task
gulp.task('default', ['sass', 'browser-sync', 'watch', 'inlineCss']);