let path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackagePlugin=require('html-webpack-plugin');
module.exports = {
    entry : './js/script.js',
    output:{
        path:path.join(__dirname,'dist'),
        filename:'bundle.js',
        publicPath:'./'
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                use:ExtractTextPlugin.extract({
                    use:[{
                        loader:'css-loader',
                        options:{
                            url:false}
                        },
                        {
                            loader:'postcss-loader'
                        }]
                    }),
                
                },
            ]
        },
    plugins:[
        new ExtractTextPlugin('css/main.css'),
        new HtmlWebpackagePlugin({
            template:'./index.html',
        })
    ]
    

}
