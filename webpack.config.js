var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    module: {
        loaders: [
            {test: /\.scss$/, loader: ExtracttextPlugin.extract('css!scss!sass')}
        ]
    },
    plugins: [
        new ExtractTextPlugin('styles.css')
    ]
};