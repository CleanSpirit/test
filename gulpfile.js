var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('default', ['sass'], function() {
  // place code for your default task here
});

gulp.task('sass', function(){
  gulp.src('scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
});

gulp.watch('app/scss/**/*.scss', ['sass']);