var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    devtool: 'source-map',
    entry: './js/app.js',
    output: {
        path: `${__dirname}/public`,
        filename: 'main.js',
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: '/node_modules/',
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015'],
            },
        }, {
            test: /\.css$/,
            exclude: '/node_modules/',
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader'),
        }, {
            test: /\.scss$/,
            exclude: '/node_modules/',
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader'),
        },
        {
            test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
            loader: 'url-loader'
        }],
    },

    plugins: [
        new webpack.ProvidePlugin({
            'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
        }),

        new ExtractTextPlugin("main.css")
    ],

    devServer: {
        contentBase: 'public',
        historyApiFallback: true,
    },
};
