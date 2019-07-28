var gulp = require('gulp');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var cleanCss = require('gulp-clean-css');
var browerSync = require('browser-sync').create();

var config = {
    paths: {
        less: './less/**/*.less',
        html: './index.html'
    },
    output: {
        cssName: 'style.css',
        path: './'

    }
};

gulp.task('less', function() {
    return gulp.src(config.paths.less)
        //.pipe(sourcemaps.init())
        .pipe(less())
        .pipe(concat(config.output.cssName))
        .pipe(autoprefixer())
        //.pipe(cleanCss())
       // .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.output.path+"/public/src/css/"))
        .pipe(browerSync.stream());
});

gulp.task('serve', function() {
    browerSync.init({
        server: {
            baseDir: config.output.path
        }
    });

    gulp.watch(config.paths.less, ['less']);
    gulp.watch(config.paths.html).on('change', browerSync.reload);
});

gulp.task('default', ['less', 'serve']);
