const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    mode: 'development',
    module: {
        rules: [
            { test: /\.vue$/, use: 'vue-loader' }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    devServer: {
        contentBase: './dist',
        compress: true,
        port: 9000
    }
}
