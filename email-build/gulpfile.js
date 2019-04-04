var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
var inlineCss = require('gulp-inline-css');
var emailBuilder = require('gulp-email-builder');
var replace = require('gulp-replace');

// Include the config
//var config = require('./config.json');

//===============
// sass
//===============
gulp.task('sass', function() {
    return gulp.src('./sass/*.scss')
        .pipe(sass({errLogToConsole: true}))
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.reload({ stream: true }));
});

//===============
// inlineCss
//===============
gulp.task('inlineCss', function() {
    setTimeout(function() {
        return gulp.src('./*.html')
            .pipe(inlineCss())
            .pipe(replace(/images\//g, remote_imgs_basepath))
            .pipe(gulp.dest('./build'))
            .pipe(browserSync.reload({ stream: true }));
    }, 1000);
});

//===============
// browser sync
//===============
gulp.task('browser-sync', function() {
    browserSync.init({
        proxy: {
            target: "localhost:8080"
        },
        open: false
    });
});

//===============
// email builder
//===============
var current_date = new Date().toString(),
    email_subject = 'Food Service',
    remote_imgs_basepath = '',
    email_builder_options = {
        encodeSpecialChars: true,

        emailTest : {
            // Your Email
            email : 'yauheni.aliakseyenko@neklo.com',

            // Your email Subject
            subject : email_subject + ' [' + current_date + ']',

            // Optional
            transport: {
                type: 'SMTP',
                options: {
                    service: 'gmail',
                    auth: {
                        user: 'yauheni.aliakseyenko@neklo.com',
                        pass: 'w1m1bzk1'
                    }
                }
            }
        }
    };

gulp.task('emailBuilder', function() {
    gulp.src(['./build/split-shipment.html'])
        .pipe(emailBuilder(email_builder_options))
        .pipe(gulp.dest('./ready_to_send'));
});

//===============
// watch
//===============
gulp.task('watch', function() {
    gulp.watch('./sass/*.scss', ['sass']);
    gulp.watch('./*.html', ['inlineCss']);
    gulp.watch('./*.html').on('change', browserSync.reload);
});

// Default Task
gulp.task('default', ['watch', 'sass', 'browser-sync', 'inlineCss']);
