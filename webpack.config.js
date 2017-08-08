var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: './src/index.js',
    output: {
      path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
            {test: /\.scss$/, loader: ExtracttextPlugin.extract('css!scss!sass')}
        ]
    },
    plugins: [
        new ExtractTextPlugin('styles.css')
    ]
};