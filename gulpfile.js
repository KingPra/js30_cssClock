const gulp = require('gulp');
const sass = require('gulp-sass');
const browser = require('gulp-browser');
const strip = require('gulp-strip-comments');

gulp.task('default', ['html', 'css', 'js']);

gulp.task('html', () => {
  return gulp.src('index.html')
  .pipe(strip())
  .pipe(gulp.dest('docs/'))
});

gulp.task('css', () => {
  return gulp.src('style.scss')
  .pipe(sass())
  .pipe(strip.text())
  .pipe(gulp.dest('docs/'))
});

gulp.task('js', () => {
  return gulp.src('app.js')
  .pipe(browser.browserify())
  .pipe(strip())
  .pipe(gulp.dest('docs/'))
});

gulp.task('watch', ['default'], () => {
  gulp.watch('*.html', ['html']);
  gulp.watch('*.scss', ['css']);
  gulp.watch('*.js', ['js']);
});
