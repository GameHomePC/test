//module.exports = function(gulp) {
//    var gulpPaths = gulp.file.readJSON('gulp-paths.json');
//
//    // Check if local config settings exist in grunt-local.json, and cache them if they do
//    var gruntLocalJSON = (gulp.file.exists('gulp-local.json')) ? gulp.file.readJSON('gulp-local.json') : {};
//
//    require('time-grunt')(gulp);
//
//    require('load-grunt-config')(gulp, {
//        jitGrunt: true,
//        // package.json is automatically exposed (e.g. <%= package.name %> )
//        // We'll also expose grunt-local.json (e.g. <%= localConfig.foo %> )
//        data: {
//            localConfig: gruntLocalJSON,
//            paths: gulpPaths
//        }
//    });
//};

var gulp = require("gulp"),
    less = require('gulp-less'),
    path = require('path'),
    browserSync = require('browser-sync');

// =================
// less
// =================
gulp.task('less', function () {
    return gulp.src('./public/less/**/*.less')
        .pipe(less({
            paths: [ path.join(__dirname, 'less', 'includes') ]
        }))
        .pipe(gulp.dest('./public/stylesheets'))
        .pipe(browserSync.reload({stream: true}));
});

// =================
// browser-sync
// =================
gulp.task('browser-sync', function() {
    browserSync.init({
        proxy: 'localhost:3000',
        open: false
    });
});

// =================
// watch
// =================
gulp.task('watch', function() {
    gulp.watch("./public/less/*.less", ['less']);
});

// =================
// default
// =================
gulp.task('default', ["less", "watch", "browser-sync"]);