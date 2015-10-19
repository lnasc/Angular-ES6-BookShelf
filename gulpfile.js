var gulp = require('gulp'),
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
		.pipe(sourcemaps.init())
		.pipe(babel({ modules: 'amd' }))
		.pipe(concat('all.js'))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest("dist"));
});

gulp.task('default', ['server', 'babel']);
