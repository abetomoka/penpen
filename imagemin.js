const imagemin         = require('imagemin-keep-folder');
const imageminMozjpeg  = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');
const imageminGifsicle = require('imagemin-gifsicle');
const imageminSvgo     = require('imagemin-svgo');

imagemin(['src/img/**/*.{jpg,png,gif,svg}'], {
    plugins: [
        imageminMozjpeg({
            quality: 70,
            progressive: true
        }),
        imageminPngquant({
            quality: [.65, .80],
            speed: 1,
            floyd: 0
        }),
        imageminGifsicle(),
        imageminSvgo()
    ],
    replaceOutputDir: output => {
        return output.replace(/src\//, 'dist/')
    }
}).then(() => {
    console.log('Images optimized');
});