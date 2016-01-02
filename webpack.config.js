/**
 * Created by vajoylan on 2015/11/13.
 */
var path = require('path');
var webpack = require('webpack');

module.exports = {
    //plugins: [
    //    new webpack.ProvidePlugin({
    //        'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    //    })
    //],
    entry: {
        index : ['reflect-metadata', './src/js/page/index.js']
        //demo1 : ['core-js/fn/array', 'reflect-metadata', './src/js/page/demo1.js']
    },
    //����ļ��������
    output: {
        path: 'dist/js/page',
        publicPath: "dist/js/page/",
        filename: '[name].js'
    },
    //devtool: 'eval-source-map',
    module: {
        //����������
        loaders: [
            {
                test: /\.js$/,
                include: [
                    path.resolve(__dirname, "src")
                ],
                exclude: path.resolve(__dirname, "node_modules"),
                loader: "babel",
                query: {
                    plugins: ["transform-decorators-legacy"],
                    presets: ['es2015', "stage-0"]
                }
            },
            { test: /\.scss$/, loader: 'style!css!sass'},
            //{ test: /\.scss$/, loader: 'style!css!sass?sourceMap'},
            {
                test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'
            }
        ]
    },
    resolve: {
        root: path.resolve(__dirname, "src"),
        extensions: ['', '.js', '.json', '.scss']
    }
};