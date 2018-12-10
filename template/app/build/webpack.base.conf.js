'use strict'
const webpack = require('webpack');
const util               = require( './util' );
const commonConfig       = util.commonConfig;
const rootPath          = commonConfig.rootPath;
const buildDir          = commonConfig.buildDir;
const srcPath           = commonConfig.srcPath;
const plugins            = util.getPlugins();

module.exports = {
    // 入口
    entry: {
        main: ['./src/main'],
        vendors: ['vue', 'vue-router']
    },
    output  : {
        path : util.resolvePath( rootPath, buildDir )
    },
    plugins,
    context : rootPath,
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            'vue': 'vue/dist/vue.esm.js',
            izy : '@iqiyi/izy/dist/izy.js',
            '@': srcPath
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        css: 'vue-style-loader!css-loader',
                        less: 'vue-style-loader!css-loader!less-loader'
                    },
                    postLoaders: {
                        html: 'babel-loader'
                    }
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader', exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader?sourceMap'
                ]
            },
            { test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/, loader: 'url-loader?limit=8192'},
            { test: /\.(html|tpl)$/, loader: 'html-loader' }
        ]
    }
}
