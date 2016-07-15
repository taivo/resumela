var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');
var htmlreplace = require('gulp-html-replace');
var rm = require('gulp-rimraf');


var usemin = require('gulp-usemin');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-clean-css');
var templateCache = require('gulp-angular-templatecache');

var buildPath = 'build';

gulp.task('clean', function(){
    return gulp.src(buildPath + '/*').pipe(rm());
})

gulp.task('templatecache', ['clean'], function () {
  return gulp.src('templates/**/*.html')
    .pipe(templateCache({module:'resumela', root:'templates'}))
    .pipe(gulp.dest(buildPath));
});

gulp.task('usemin', ['clean'], function() {
    return gulp.src('./index.html')
        .pipe(htmlreplace({templatecache: "templates.js"}))
        .pipe(usemin({
            css: [ minifyCss() ],
            js: [ uglify()]
        }))
        .pipe(gulp.dest(buildPath));
});

gulp.task('copysamples', ['clean'], function() {
   return gulp.src('samples/*', {base: '.'})
        .pipe(gulp.dest(buildPath));
});

gulp.task('build', ['usemin', 'templatecache', 'copysamples']);

gulp.task('deploy', ['build'], function() {
  return gulp.src(buildPath + '/**/*')
        .pipe(ghPages());
});
