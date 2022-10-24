const gulp = require("gulp");

const imagemin = require("gulp-imagemin");

const diretorioimg = "./public/**/*.png";
const buildimg = "./gulp_files/imgs/";

gulp.task("reduce_img",function () {
    
    gulp.src(diretorioimg)
    .pipe(imagemin())
    .pipe(gulp.dest(buildimg))
    
});