let CopyWebpackPlugin = require('copy-webpack-plugin')
let path = require('path')

let proxyOrigin = 'http://47.52.44.26'

module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
              '@p': path.resolve(__dirname, './public')
            }
        },
        plugins: [
            /* config.plugin('copy') */
            new CopyWebpackPlugin(
                [
                    {
                        from: path.resolve(__dirname, './src/static'),
                        to: path.resolve(__dirname, './dist'),
                        ignore: ['.*'] // 忽略copy任何以.开头的文件
                    }
                ]
            )
        ]
    },
    devServer: {
        open: true, // process.platform === 'darwin', wether open in browser when started
        // host: '0.0.0.0',
        port: 80,
        disableHostCheck: true,
        // https: false,
        // hotOnly: false,
        // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#configuring-proxy
        proxy: {
            '/casinoweb': {
                target: proxyOrigin,
                changeOrigin: false
            },
            '/sso': {
                target: proxyOrigin,
                changeOrigin: false
            },
            '//sso': {
                target: proxyOrigin,
                changeOrigin: false
            },
            '/upload': {
                target: proxyOrigin,
                changeOrigin: false
            },
            '/pay': {
                target: proxyOrigin,
                changeOrigin: false
            }
        }, // string | Object
        // before: app => {}
    }
}