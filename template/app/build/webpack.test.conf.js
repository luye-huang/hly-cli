const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.conf');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const util               = require( './util' );
const commonConfig       = util.commonConfig;
const rootPath           = commonConfig.rootPath;
const srcPath            = commonConfig.srcPath;
const buildDir           = commonConfig.buildDir;

module.exports = merge(webpackBaseConfig, {
    // 输出
    output: {
        publicPath: '//qifang-test.qiyi.domain/static/izy-examples/test/',

        filename: '[name].js',
        chunkFilename: '[name].js'
    }
});