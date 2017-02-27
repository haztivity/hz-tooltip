const gulp = require("gulp");
const gulpsync = require('gulp-sync')(gulp);
const gutil = require("gulp-util");
const config = require("./config");
gulp.task("dist", gulpsync.sync([
    'clean-dist',
    ["typescript:build", "sass:build", "pug:build", 'copy-bower-assets', 'copy'],
    (config.production
        ? 'usemin:dist'
        : "usemin:build")
]));


