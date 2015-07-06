var gulp = require('gulp'),
    react = require('gulp-react'),
    concat = require('gulp-concat'),
    minify = require('gulp-minify');

gulp.task('default', function () {
    return gulp.src(['src/components/*.jsx', 'src/main.jsx'])
        .pipe(concat('main.js'))
        .pipe(react())
        .pipe(minify())
        .pipe(gulp.dest('web'));
});
