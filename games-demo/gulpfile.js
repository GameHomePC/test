var gulp = require('gulp');
var browserSync = require('browser-sync');
var sass = require('gulp-ruby-sass');

var path = {
    sass: {
        watch: 'public/**/*.scss',
        sass: 'public/sass/',
        css: 'public/css'
    },
    html: '**/*.html',
    js: '**/*.js'
};

// =================
// sass
// =================
gulp.task('sass', function () {
    return sass(path.sass.sass, { compass: true })
        .on('error', function (err) {
            console.error('Error!', err.message);
        })
        .pipe(gulp.dest(path.sass.css))
        .pipe(browserSync.reload({stream: true}));
});

// =================
// browser-sync
// =================
gulp.task('browser-sync', function() {
    browserSync.init({
        proxy: 'localhost:4000',
        open: false
    });
});

// =================
// watch
// =================
gulp.task('watch', function() {
    gulp.watch(path.sass.watch, ['sass']);
    gulp.watch(path.html).on('change', browserSync.reload);
    gulp.watch(path.js).on('change', browserSync.reload);
});

// =================
// default
// =================
gulp.task('default', ['browser-sync', 'sass', 'watch']);