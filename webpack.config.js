var HtmlWebpackPlugin = require('html-webpack-plugin');
var htmlWebpackPlugin = new HtmlWebpackPlugin({
	template: "./app/index.htm",
	inject: "body"
});

module.exports = {
    entry: './app/index.js',
    output: {
        path: './dist',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: "babel" }
        ]
    },
    plugins: [htmlWebpackPlugin]
};