import gulp from "gulp"
import connect from "gulp-connect"
import uglify from "gulp-uglify"
import imagemin from "gulp-imagemin"
import imageminMozjpeg from "imagemin-mozjpeg"
import gulpHtmlmin from "gulp-htmlmin"
import tempSass from "sass"
import gulpSass from "gulp-sass"
import rename from "gulp-rename"
import fileinclude from "gulp-file-include"
import sourcemaps from "gulp-sourcemaps"

const sass = gulpSass(tempSass)


function css() {
    return gulp.src("src/css/*.scss")
        .pipe(sass().on("error", sass.logError))
        .pipe(gulp.dest("build/css"))
        .pipe(connect.reload())
}

function buildCss() {
    return gulp.src("src/css/*.scss")
        .pipe(gulp.dest("build/css"))
}

function js() {
    return gulp.src("src/*.js")
        //.pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(gulp.dest("build/"))
        .pipe(connect.reload())
}

function buildJs() {
    return gulp.src("src/*.js")
        .pipe(uglify())
        .pipe(gulp.dest("build/"))
}

function images() {
    return gulp.src("src/img/*")
        .pipe(imagemin([
            imageminMozjpeg({quality: 50, progressive: true})
        ]))
        .pipe(gulp.dest("build/img"))
        .pipe(connect.reload())
}

function buildImages() {
    return gulp.src("src/img/*")
        .pipe(imagemin([
            imageminMozjpeg({quality: 50, progressive: true})
        ]))
        .pipe(gulp.dest("build/img"))
}

function html() {
    return gulp.src("/src/*.html")
        .pipe(sourcemaps.init())
        .pipe(gulpHtmlmin({
            collapseWhitespace: true
        }))
        .pipe(fileinclude())
        .pipe(rename(function(path){
            if (path.basename != "index" || "planet"){
                path.dirname = path.dirname + "/" + path.basename
                path.basename = "index"


            }
        }))
        .pipe(sourcemaps.write("."))
        
        .pipe(gulp.dest("build/"))
        .pipe(connect.reload())
}

function buildHtml() {
    return gulp.src("src/html/*.html")
        .pipe(gulpHtmlmin({
            collapseWhitespace: true
        }))
        .pipe(fileinclude())  
        .pipe(gulp.dest("build/"))
}

function watchCSS(){
    gulp.watch("src/css/*.scss"), {event: "all", ignoreInitial:false}, async function(){
        css()
        
    }
}

function watchJS(){
    gulp.watch("src/*.js"), {event: "all", ignoreInitial:false}, async function(){
        js()
        
    }
}

function watchIMAGES(){
    gulp.watch("src/img/*.jpg"), {event: "all", ignoreInitial:false}, async function(){
        images()
        
    }
}

function watchHTML(){
    gulp.watch("src/html/*.html"), {event: "all", ignoreInitial:false}, async function(){
        html()
       
    }
}


function viewserver () {
    connect.server({
        root: "build",
        livereload: true
    })
   
}


export const watcher = gulp.parallel(watchCSS, watchJS, watchIMAGES, watchHTML)
export { css, js, images, html, viewserver }
export default gulp.parallel(watcher, viewserver)
export const build = gulp.parallel(buildCss, buildJs, buildImages, buildHtml)

/*

function() {    
    
    watch('src/css/*.css', css, { events: 'all' }, { ignoreInitial: false }, function(cb) {
        
        cb();
    });

    
    watch('src/*.js', js, { events: 'all' }, { ignoreInitial: false }, function(cb) {
      
      cb();
    });

    watch('src/img/*.jpg', images, { events: 'all' }, { ignoreInitial: false }, function(cb) {
      
        cb();
    });

    watch('src/*.html', html, { events: 'all' }, { ignoreInitial: false }, function(cb) {
      
        cb();
    });


};*/

//export default gulp.parallel(css, js, images, html, viewbuild)