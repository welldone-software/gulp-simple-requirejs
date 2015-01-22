# gulp-simple-requirejs
A gulp requirejs enabler, passing through all the arguments to rjs

-- Examples

```js
var rjs = require('gulp-simple-requirejs'),
    dstDir = 'dist',
    srcDir = 'src'

return rjs({
        name: 'main',
        baseUrl: srcDir ,
        mainConfigFile: path.join(srcDir, 'main.js'),
        optimize: 'uglify2',
        preserveLicenseComments: false,
        generateSourceMaps: true,
        include: extraIncludes,
        out: 'main.js'
    })
    .pipe(gulp.dest(dstDir));
```