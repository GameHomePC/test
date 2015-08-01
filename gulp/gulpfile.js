var gulp = require('gulp');
var rubySass = require('gulp-ruby-sass');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();

gulp.task('sass', function () {
    return rubySass('sass/', { sourcemap: true, compass: true })
        .on('error', function (err) {
            console.error('Error!', err.message);
        })
        .pipe(sourcemaps.write('../css'))
        .pipe(gulp.dest('css'));
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('watch', function() {
    //gulp.watch(templatesPath).on('change', browserSync.reload);
    //gulp.watch(jsPath).on('change', browserSync.reload);
    gulp.watch('sass/**/*', ['sass']);
});

gulp.task('default', ['sass', 'browser-sync', 'watch']);