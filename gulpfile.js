var gulp = require('gulp');
var jekyll = require('gulp-jekyll');
var shell = require('gulp-shell');

gulp.task('jekyll', function () {
    gulp.src([ './**/*' ])
        .pipe(jekyll({
            source: './',
            destination: './_site/',
            bundleExec: true
        }))
        .pipe(gulp.dest('./_site/'));
});

gulp.task('jekyllbuild', shell.task([
  '$HOME/.rvm/bin/rvm 2.0.0-p247 exec bundle exec jekyll build'
]))

gulp.task('default', function () {
  var watcher = gulp.watch('./*.html', ['jekyllbuild']);
  watcher.on('change', function(event) {
    console.log('File '+event.path+' was '+event.type+', running tasks...');
  });
})
