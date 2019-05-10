'use strict';

var gulp = require('gulp'),
  autoprefixer = require('gulp-autoprefixer'),
  browserSync = require('browser-sync').create(),
  reload = browserSync.reload,
  connect = require('gulp-connect'),
  cssnano = require('gulp-cssnano'),
  htmlbeautify = require('gulp-html-beautify'),
  browserify = require("browserify"),
  source = require('vinyl-source-stream'),
  sass = require('gulp-sass'),
  sassLint = require('gulp-sass-lint'),
  sourcemaps = require('gulp-sourcemaps'),
  nunjucks = require('gulp-nunjucks-html'),
  uglify = require('gulp-uglify'),
  fontIcon = require("gulp-font-icon"),
  replaceName = require('gulp-replace-name'),
  gulpSort = require('gulp-sort'),
  ts = require('gulp-typescript'),
  cleanCSS = require('gulp-clean-css'),
  rename = require("gulp-rename"),
  mjml = require('gulp-mjml')
;

gulp.task("iconfont", function() {
  return gulp.src(["src/icons/*.svg"])
    .pipe(gulpSort({
      asc: true
    }))
    .pipe(replaceName(/\d+\_/g, ''))
    .pipe(fontIcon({
      fontName: "iconfont",
      fontAlias: "iconfont",
      normalize: true,
      fontHeight: 1001
    }))
    .pipe(gulp.dest("dist/fonts/iconfont"));
});

gulp.task('data', function () {
  gulp.src('./src/data/**/*')
    .pipe(gulp.dest('dist/data'))
  ;
});

gulp.task('email_templates', function () {
  gulp.src('./src/email_templates/**/*.mjml')
    .pipe(mjml())
    .pipe(gulp.dest('dist/email_templates'))
  ;
  gulp.src('./src/email_templates/img/**/*')
    .pipe(gulp.dest('dist/email_templates/img'))
  ;
});

gulp.task('sass-lint', function() {
  /*return gulp.src('src/scss/!**!/!*.scss')
    .pipe(sassLint({files: {ignore: ['src/scss/components/_checkbox.scss', 'src/scss/components/_icons.scss']}}, {config: '.sass-lint.yml'}))
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError());*/
});

gulp.task('html', function() {
  return gulp.src('src/html/*.html')
    .pipe(nunjucks({
      searchPaths: ['./src/html']
    }))
    .pipe(gulp.dest('dist'))
    .pipe(reload({stream: true}));
});

gulp.task('scss:source', function() {
  return gulp.src('src/scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(autoprefixer({browsers: ['last 5 versions'], cascade: false}))
    .pipe(gulp.dest('dist/css'))
    .pipe(reload({stream: true}));
});

gulp.task('scss:minify', function() {
  return gulp.src('src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({browsers: ['last 5 versions'], cascade: false}))
    //.pipe(cssnano({discardComments: {removeAll: true}}))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist/css'))
    .pipe(reload({stream: true}));
});

gulp.task('js:source', function() {
  return gulp.src('src/js/**/*.js')
    .pipe(gulp.dest('dist/js'))
    .pipe(reload({stream: true}));
});

gulp.task('js:minify', function() {
  return gulp.src('src/js/**/*.js')
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist/js'))
    .pipe(reload({stream: true}));
});

gulp.task('ts:form-wizard', function () {
  return gulp.src('src/ts/form-wizard/*.ts')
    .pipe(ts({
      noImplicitAny: true,
      module: 'amd',
      outFile: 'form-wizard.js'
    }))
    .pipe(gulp.dest('dist/js/form-wizard'))
    .pipe(reload({stream: true}))
  ;
});

gulp.task('ts:growl-notification', function () {
  return gulp.src('src/ts/growl-notification/*.ts')
    .pipe(ts({
      noImplicitAny: true,
      module: 'amd',
      outFile: 'growl-notification.js'
    }))
    .pipe(gulp.dest('dist/js/growl-notification'))
    .pipe(reload({stream: true}))
  ;
});

gulp.task('vendor', function() {
  return gulp.src('src/vendor/**/*.*')
    .pipe(gulp.dest('dist/vendor'))
    .pipe(reload({stream: true}));
});

gulp.task('img', function() {
  return gulp.src('src/img/**/*.*')
    .pipe(gulp.dest('dist/img'))
    .pipe(reload({stream: true}));
});

gulp.task('fonts', function() {
  gulp.src('src/fonts/**/*.{ttf,woff,woff2,eof,svg}')
    .pipe(gulp.dest('dist/fonts'))
    .pipe(reload({stream: true}))
  ;

  gulp.src('src/fonts/**/*.scss')
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(autoprefixer({browsers: ['last 5 versions'], cascade: false}))
    .pipe(cleanCSS())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist/fonts'))
    .pipe(reload({stream: true}))
  ;

  return true;
});

gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: "dist"
    }
  });

  gulp.watch('src/html/**/*.html', ['html']);
  gulp.watch('src/scss/**/*.scss', ['scss:source', 'scss:minify']);
  gulp.watch('src/js/**/*.js', ['js:source', 'js:minify']);
  gulp.watch('src/ts/form-wizard/*.ts', ['ts:form-wizard']);
  gulp.watch('src/ts/growl-notification/*.ts', ['ts:growl-notification']);
  gulp.watch('src/email_templates/**/*.mjml', ['email_templates']);
});

gulp.task('default', [
  'img', 'email_templates', 'iconfont', 'html', 'scss:source',
  'scss:minify', 'js:source', 'js:minify', 'fonts',
  'vendor', 'data', 'ts:form-wizard', 'ts:growl-notification', 'browser-sync'
]);
