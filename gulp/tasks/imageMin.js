'use strict';

module.exports = function() {
    $.gulp.task('immin', () =>
    $.gulp.src('source/images/*')
        .pipe($.gp.imagemin())
        .pipe($.gulp.dest('build/assets/img'))
    );
};