var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

//Static server
gulp.task('browser-sync',function(){
    browserSync.init({
        server:{
            baseDir: "./"
        }
    });
    gulp.watch("src/**/*.html").on("change",reload);
});
