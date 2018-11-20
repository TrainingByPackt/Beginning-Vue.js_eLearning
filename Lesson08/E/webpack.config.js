const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    mode: 'development',
    module: {
        rules: [
            { test: /\.vue$/, use: 'vue-loader' },
            {
                test: /\.(vue|js)$/,
                use: 'eslint-loader',
                enforce: 'pre'
            }
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
