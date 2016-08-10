var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');
var htmlreplace = require('gulp-html-replace');
var rm = require('gulp-rimraf');

var usemin = require('gulp-usemin');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-clean-css');
var templateCache = require('gulp-angular-templatecache');

var paths = {
    appRoot: 'app',
    buildRoot: 'build',
    templateSrc: ['templates/**/*.html', 'app/components/**/*.html'],
}

gulp.task('templatecache', function () {
  return gulp.src(paths.templateSrc)
    .pipe(templateCache({
        module:'resumela.templates',
        standalone: true,
        filename: 'app.templates.js',
        transformUrl: function(url){
            //
            // remove nested 'templates' subdir: foo/templates/bar.html -> foo/bar.html
            return url.replace(/(.+)\/templates\/(.+)/, '$1/$2');
        }
    }))
    .pipe(gulp.dest(paths.appRoot));
});

gulp.task('clean', function(){
    return gulp.src(paths.buildRoot + '/*').pipe(rm());
});

gulp.task('usemin', ['clean', 'templatecache'], function() {
    return gulp.src('./index.html')
        .pipe(usemin({
            css: [ minifyCss() ],
            js: [ uglify() ]
        }))
        .pipe(gulp.dest(paths.buildRoot));
});

gulp.task('copysamples', ['clean'], function() {
   return gulp.src('samples/*', {base: '.'})
        .pipe(gulp.dest(paths.buildRoot));
});

gulp.task('build', ['usemin', 'templatecache', 'copysamples']);

gulp.task('deploy', ['build'], function() {
  return gulp.src(paths.buildRoot + '/**/*')
        .pipe(ghPages());
});

gulp.task('watch', function() {
  gulp.watch(paths.templateSrc, ['templatecache']);
});

gulp.task('default', ['templatecache'], function(){
    gulp.start('watch');
})
