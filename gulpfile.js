var gulp = require('gulp')
var gulpUglify = require('gulp-uglify')
var gulpSass = require('gulp-sass')

gulp.task('default', function() {
  gulp.watch('js/**',gulp.series('scripts'))
  gulp.watch('scss/**',gulp.series('styles'))
})

gulp.task('scripts', async function () {
    gulp.src('js/*.js')      
        .pipe(gulpUglify())                     
        .pipe(gulp.dest('src/'))  
})

gulp.task('styles', async function () {
  gulp.src('scss/*.scss')                     
      .on('error', console.error.bind(console))  
      .pipe(gulpSass({                          
          outputStyle: 'compressed'
      }))
      .pipe(gulp.dest('src/'))              
})
