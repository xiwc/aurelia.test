var gulp = require('gulp');
var browserSync = require('browser-sync');
// https://www.npmjs.com/package/http-proxy-middleware
var proxyMiddleware = require('http-proxy-middleware');

// this task utilizes the browsersync plugin
// to create a dev server instance
// at http://localhost:9000
gulp.task('serve', ['build'], function(done) {
    browserSync({
            open: true,
            port: 9000,
            server: {
                baseDir: ['.'],
                middleware: [function(req, res, next) {
                    res.setHeader('Access-Control-Allow-Origin', '*');
                    next();
                }, proxyMiddleware("/api", {
                    target: 'http://www.example.org', // target host 
                    changeOrigin: true, // needed for virtual hosted sites 
                    ws: true, // proxy websockets 
                    pathRewrite: {
                        '^/old/api': '/new/api' // rewrite paths 
                    }
                })]
            }
        },
        done);
});
