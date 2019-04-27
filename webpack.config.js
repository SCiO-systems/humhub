const path = require('path');

module.exports = {
    entry: './static/js/humhub/index.js',
    devtool: 'inline-source-map',
    output: {
        filename: 'humhub.js',
        path: path.resolve(__dirname+'/static/js/humhub', 'dist')
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
};