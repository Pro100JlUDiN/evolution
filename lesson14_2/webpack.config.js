const path = require('path');

module.exports = {
    entry: {
        main: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),  /* npm install path -D */
        filename: '[name].js',
        publicPath: '/dist'
    },
    devServer:{
        overlay: true
    },
    module:{
        rules:[
            {
                test: /\.js$/,   //какие файлы будут проверяться
                loader: "babel-loader",
                exclude: "/node_modules/"
            }
        ]
    }
};