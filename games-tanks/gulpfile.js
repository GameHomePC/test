module.exports = function(gulp) {
    var gulpPaths = gulp.file.readJSON('gulp-paths.json');

    // Check if local config settings exist in grunt-local.json, and cache them if they do
    var gruntLocalJSON = (gulp.file.exists('gulp-local.json')) ? gulp.file.readJSON('gulp-local.json') : {};

    require('time-grunt')(gulp);

    require('load-grunt-config')(gulp, {
        jitGrunt: true,
        // package.json is automatically exposed (e.g. <%= package.name %> )
        // We'll also expose grunt-local.json (e.g. <%= localConfig.foo %> )
        data: {
            localConfig: gruntLocalJSON,
            paths: gulpPaths
        }
    });
};