'use strict';
const fs       = require( 'fs' );
const path     = require( 'path' );
const UglifyJS = require( 'uglify-js' );
const ProgressPlugin     = require( 'simple-webpack-progress-plugin' );
const HtmlWebpackPlugin  = require( 'html-webpack-plugin' );
const CleanWebpackPlugin = require( 'clean-webpack-plugin' );
const webpack            = require( 'webpack' );

const rootPath           = resolvePath( __dirname, '..' );
const srcPath            = resolvePath( rootPath, 'src' );
const buildDir           = getEnv();
const isBuild            = buildDir === 'build';
const isDist             = buildDir === 'dist';
const isTest             = buildDir === 'test';

const commonConfig       = { buildDir, rootPath, srcPath };
// 获取绝对路径
function resolvePath() {
    return path.resolve.apply( path, Array.prototype.slice.call( arguments, 0 ) );
}

// 获取环境
function getEnv() {
    let env = process.env.NODE_ENV || 'build';
    return env.trim();
}

function logErrors(errors) {
    console.log('\nWe got compile errors:\n');
    console.log(errors);
    process.exit(1);
}

function getPlugins() {
    const plugins            = [
        new ProgressPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new CleanWebpackPlugin( buildDir, { root : rootPath, verbose : false } ),
        new webpack.optimize.CommonsChunkPlugin({ name: 'vendors', filename: 'vendor.bundle.js' }),
        // new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.DefinePlugin( {
            __DIST__  : isDist,
            __TEST__  : isTest,
            __BUILD__ : isBuild
        } )
    ];
    return plugins;
}

module.exports = {
    resolvePath,
    commonConfig,
    getPlugins,
    logErrors
};