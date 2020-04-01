module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.tsx'
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