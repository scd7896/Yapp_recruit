module.exports = {
    mode: 'development',
    entry: {
        index: ['@babel/polyfill', './polyfill/index.js','./src/index.tsx']
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".css", ".scss"]
    },
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                loader: 'ts-loader'
            },{
                test: /\.scss/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",

                    },
                    {
                        loader: "sass-loader"
                    }     
                ]
            },{
                test: /\.woff2$/,
                use: {
                  loader: 'url-loader', // url 로더를 설정한다
                  options: {
                    publicPath: './dist/', // file-loader와 동일
                    name: '[name].[ext]?[hash]', // file-loader와 동일
                    limit: 7 * 1000 * 100
                  }
                }
              }
        ]
    },
    output: {
        filename: 'index.js',
        path: __dirname + '/dist',
        publicPath: './dist'
    },
    devServer: {
        contentBase: __dirname + "/dist/",
        inline: true,
        hot: true,
        host: "localhost",
        port: 5500
    },
}