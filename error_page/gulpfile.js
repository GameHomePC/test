var gulp = require('gulp');
var browserSync = require('browser-sync');
var googleWebFonts = require('gulp-google-webfonts');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

var path = {
    html: './*.html',
    sass: {
        watch: './sass/**/*.scss',
        sass: './sass/**/*.scss',
        css: './assets'
    },
    fonts: {
        watch: './*.list',
        list: './*.list',
        listDir: './fonts'
    },
    js: './js/**/**'
};

gulp.task('fonts', function () {
    return gulp.src(path.fonts.list)
        .pipe(googleWebFonts())
        .pipe(gulp.dest(path.fonts.listDir))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', function() {
    browserSync.init({
       server: {
           baseDir: './'
        },
        open: false,
        port: 5000
    });
});

gulp.task('sass', function () {
    gulp.src(path.sass.sass)
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer('last 30 version', '> 1%'))
        .pipe(gulp.dest(path.sass.css))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('watch', function() {
    gulp.watch(path.html).on('change', browserSync.reload);
    gulp.watch(path.js).on('change', browserSync.reload);
    gulp.watch(path.sass.watch, ['sass']);
    gulp.watch(path.fonts.watch, ['fonts']);
});

gulp.task('default', ['browser-sync', 'watch', 'fonts']);
