const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));

// Define a task to compile Sass to CSS
gulp.task("sass", function () {
  return gulp
    .src("src/**/*.scss") // Path to your main Sass file or files
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("dist/")); // Output directory for compiled CSS
});

// Define a task to watch for changes in Sass files
gulp.task("watch", function () {
  gulp.watch("src/**/*.scss", gulp.series("sass"));
});

// Define a default task
gulp.task("default", gulp.series("sass", "watch"));
