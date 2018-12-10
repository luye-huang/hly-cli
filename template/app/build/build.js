'use strict';
const config           = require('./webpack.build.conf');
const webpack          = require('webpack');
const host             = '0.0.0.0';
const port             = 8082;
const WebpackDevServer = require('webpack-dev-server');
// 自动刷新，热替换(使用`webpack/hot/dev-server`热更新模块，HMR更新失败，则页面整个刷新)，如果需要手动刷新页面使用`webpack/hot/only-dev-server`
config.entry.main.unshift(`webpack-dev-server/client?http://localhost:${port}/`, 'webpack/hot/dev-server');
config.devtool = 'cheap-module-eval-source-map';
const compiler = webpack(config);
const server   = new WebpackDevServer(compiler, {
    noInfo: true,
    hot: true,
    inline: true,
    // 监听0.0.0.0时，不设置会报`Invalid host head`错误
    // https://github.com/webpack/webpack-dev-server/issues/882
    disableHostCheck: true,
    historyApiFallback: true
});
server.listen(port, host, () => {
    console.log(`dev server listening on port ${port}`);
});