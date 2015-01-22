var PLUGIN_NAME = 'gulp-simple-requirejs',
    stream = require('event-stream').through(),
    path = require('path'),
    gutil = require('gulp-util'),
    requirejs = require('requirejs');

module.exports = function (opts) {

    var fileName = opts.out,
        rjsCb = function (text, sourceMapText) {

            var output = fileName,
                mapOutput = output + '.map';

            if (sourceMapText) {
                stream.write(new gutil.File({
                    path: mapOutput,
                    contents: new Buffer(sourceMapText)
                }));
                text += '//# sourceMappingURL=' + path.basename(mapOutput);
            }

            stream.write(new gutil.File({
                path: output,
                contents: new Buffer(text)
            }));

            stream.end();
        },
        errCb = function (err) {
            stream.emit('error', new gutil.PluginError(PLUGIN_NAME, err));
        };

    opts.out = rjsCb;
    requirejs.optimize(opts, null, errCb);

    return stream;

};