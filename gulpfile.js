var gulp = require('gulp'),
	plumber = require('gulp-plumber'),
	sourcemaps = require('gulp-sourcemaps'),
	concat = require('gulp-concat'),
    server = require('gulp-express'),
    babel = require('gulp-babel');

gulp.task('server', function () {
    return server.run({
        file: 'app.js'
    });
});

gulp.task('babel', function () {
	return gulp.src("app/**/*.js")
		.pipe(plumber())
		.pipe(babel({ modules: 'amd' }))
		.pipe(gulp.dest("dist"));
});

gulp.task('default', ['server', 'babel']);
