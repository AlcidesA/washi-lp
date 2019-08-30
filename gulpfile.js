const gulp = require("gulp");
const { src, dest } = require("gulp");
const browsersync = require("browser-sync").create();

const sass = require("gulp-sass");
const minifyCSS = require("gulp-css");

function css() {
  return src("./assets/scss/index.scss")
    .pipe(sass())
    .pipe(minifyCSS())
    .pipe(dest("./assets/css"))
    .pipe(browserSyncReload());
}

function browserSync(done) {
  browsersync.init({
    server: {
      baseDir: "./"
    },
    port: 3000
  });
  done();
}

function browserSyncReload(done) {
  browsersync.reload();
  done();
}

function watchFiles() {
  gulp.watch("./assets/scss/*.scss", css);
}

const watch = gulp.parallel(watchFiles, browserSync);

exports.css = css;
exports.watch = watch;
exports.default = watch;
