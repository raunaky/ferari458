var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	sass = require('gulp-sass'),
	plumber = require('gulp-plumber');


//Script tasks
//uglifies
gulp.task('scripts',function(){
	gulp.src('scripts/*.js')
		.pipe(plumber())
		.pipe(uglify())
		.pipe(gulp.dest('build/js'));
});


//Style task
//uglifies
gulp.task('styles',function(){
	gulp.src('scss/**/*.scss')
		.pipe(plumber())
		.pipe(sass({
			style:'compressed'
		}))
		.pipe(gulp.dest('css/'));
})

//Watch task
//Watches the changes made to any of the listed files

gulp.task('watch',function(){
	gulp.watch('scripts/*.js',['scripts']);
	// gulp.watch('scss/**/*.scss',['styles']);
});



//Default task
gulp.task('default',['scripts','styles','watch']);