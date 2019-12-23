const path = require('path');

module.exports = {
    entry: {
        main: './src/index.js'
    },
    output: {
        /* npm install path -D */
        path: path.resolve(__dirname, './dist'),  
        //если несолько файлов входа автоматически подставин название файла из свойства entry.main
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