var gulp = require('gulp');
var firebase = require('./index');

gulp.task('default', function(){
  return gulp.src('./tests/test.bolt')
  .pipe(firebase())
  .pipe(gulp.dest('./output/'));
});
