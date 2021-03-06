var path = require('path');

module.exports = {
    entry: "./src/index.ts",
    output: {
        path: "./dist",
        filename: "index.js",
        umdNamedDefine: true,
        library: 'angular2-material-keyboard',
        libraryTarget: 'umd'
    },
    devtool: 'source-map',

    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js'],
        // Two lines below fix dependency resolution when npm linking the component.
        fallback: path.join(__dirname, "node_modules")
    },
    resolveLoader: {fallback: path.join(__dirname, "node_modules")},

    module: {
        loaders: [
            {
                test: /\.ts$/, loader: 'ts-loader'
            }
        ]
    },
    noParse: [
        path.join(__dirname, 'node_modules', 'zone.js', 'dist')
    ]
};
