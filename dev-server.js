const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const config = require('./webpack.config.js');

const compiler = webpack(config);
const server = new WebpackDevServer(compiler, {
    hot: true,
    inline: true,
    filename: config.output.filename,
    compress: false,
    overlay: true,
    publicPath: config.output.publicPath,
    disableHostCheck: true,
    historyApiFallback: true,
    stats: {
        colors: true
    },
    headers: {
        'Access-Control-Allow-Origin': '*'
    }
});
server.listen(8080);
