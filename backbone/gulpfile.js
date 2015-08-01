var gulp = require('gulp');
var browserSync = require('browser-sync');
var rubySass = require('gulp-ruby-sass');
var googleWebFonts = require('gulp-google-webfonts');

var path = {
    html: '**/*.html',
    sass: {
        watch: '**/*.scss',
        sass: 'sass/',
        css: 'css'
    },
    fonts: {
        watch: '**/*.list',
        list: './fonts.list',
        listDir: 'fonts'
    },
    js: '**/*.js'
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

gulp.task('sass', function() {
    return rubySass(path.sass.sass, { sourcemap: true, compass: true })
        .on('error', function(err) {
            console.log('Error!', err.message);
        })
        .pipe(gulp.dest(path.sass.css))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('watch', function() {
    gulp.watch(path.html).on('change', browserSync.reload);
    gulp.watch(path.js).on('change', browserSync.reload);
    gulp.watch(path.sass.watch, ['sass']);
    gulp.watch(path.fonts.watch, ['fonts']);
});

gulp.task('default', ['browser-sync', 'watch', 'fonts']);
