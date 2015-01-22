# gulp-simple-requirejs
A gulp requirejs enabler, passing through all the arguments to rjs

## Rational

We needed a requiredjs gulp plugin that, on the one hand, supported advanced features such as includes, source maps etc,
and on the other hand, does not impose starting from `gulp.src`, but rather starts the stream on its own, using the standard rjs arguments.

## Features

Support all single file optimization features including source maps.

## Example

```js
var rjs = require('gulp-simple-requirejs'),
    dstDir = 'dist',
    srcDir = 'src';

return rjs({
        name: 'main',
        baseUrl: srcDir ,
        mainConfigFile: path.join(srcDir, 'main.js'),
        optimize: 'uglify2',
        preserveLicenseComments: false,
        generateSourceMaps: true,
        //include: extraIncludes,
        out: 'main.js'
    })
    .pipe(gulp.dest(dstDir));
```