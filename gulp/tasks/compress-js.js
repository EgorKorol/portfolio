'use strict';

module.exports = function () {
  $.gulp.task('compress-js', function () {
      return $.gulp.src('build/assets/js/*.js')
        .pipe($.gp.uglify())
        .pipe($.gulp.dest('build/assets/js'));
  });
};