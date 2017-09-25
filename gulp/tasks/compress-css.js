'use strict';

module.exports = function() {
    $.gulp.task('compress-css', function() {
        return $.gulp.src('build/assets/css/app.css')
            .pipe($.gp.cssnano())
            .pipe($.gulp.dest('build/assets/css/'));
});
};