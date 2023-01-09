const path = require('path');

module.exports = {
    entry: './app/assets/js/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist')
    },
    devServer: {
        static: {
            directory: path.join(__dirname, './dist')
        },
        hot: true,
        port:3000
    },
    mode: 'development',
    //watch: true
}
