'use strict';

module.exports = function() {
    $.gulp.task('webpack', function() {
        return $.gulp.src('source/js/app.js')
          .pipe($.gp.webpack({
              output: {
                  filename: 'app.js'
              }
          }))
          .pipe($.gulp.dest('./build/assets/js/'));
      });
};