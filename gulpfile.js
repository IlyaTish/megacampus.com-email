const gulp         = require('gulp'),
      sass         = require('gulp-sass'),
      inky         = require('inky'),
      inlineCss    = require('gulp-inline-css'),
      inlinesource = require('gulp-inline-source'),
      browserSync  = require('browser-sync').create();


function reload() {
  browserSync.reload();
}


//STYLES
gulp.task('styles', () => {
  console.log('\n' + '* Компиляция sass *');
  return gulp.src('./sass/**/**/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});


//CONVERTE INKY
gulp.task('inky', () => {
  console.log('\n' + '* Конвертирование inky шаблонов *');
  return gulp.src('./templates/**/*.html')
    .pipe(inlinesource())
    .pipe(inky())
    .pipe(inlineCss({
      preserveMediaQueries: true,
      removeLinkTags: false
    }))
    .pipe(gulp.dest('./dist'));
});


//WATCH
gulp.task('watch', () => {
  console.log('\n' + '* Отслеживание html/sass/css *');
  browserSync.init({
    server: {
      baseDir: [ 'dist' ],
      index:   'basic.html'
    },
    port: 3000
  });

  gulp.watch('./sass/**/**/*.sass', gulp.series('styles', 'inky')).on('change', browserSync.reload);
  gulp.watch('./templates/**/*.html', gulp.series('inky')).on('change', browserSync.reload);
});

gulp.task('default', gulp.series('watch'));