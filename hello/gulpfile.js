var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

// Static server
gulp.task('browser-sync', function () {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
  gulp.watch(['src/**/*.html', 'src/**/*.js', 'css/*.css']).on('change', reload);
});
gulp.task('serve', ['browser-sync']);
gulp.task('default', ['serve']);
