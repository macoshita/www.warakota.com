var gulp = require('gulp');
var stylus = require('gulp-stylus');
var nib = require('nib');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

var paths = {
  stylus: ['stylus/**/*.styl'],
  css: ['css/**/*.css'],
  js: ['js/**/*.js'],
  img: ['img/**/*'],
  html: ['index.html'],
};
paths.dist = paths.css.concat(paths.js).concat(paths.img).concat(paths.html);

gulp.task('stylus', function() {
  return gulp.src(paths.stylus)
    .pipe(stylus({
      use: nib(),
      compless: true
    }))
    .pipe(gulp.dest('./css'))
});

gulp.task('build', ['stylus']);

gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: './'
    }
  });
});

gulp.task('bs-reload', function () {
  browserSync.reload();
});

gulp.task('watch', ['browser-sync'], function() {
  gulp.watch(paths.stylus, ['stylus']);
  gulp.watch(paths.dist, ['bs-reload']);
});

gulp.task('default', ['watch', 'build', 'browser-sync']);
