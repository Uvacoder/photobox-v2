const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const path = require("path");



module.exports = (env) => {
    console.log(env.production ? "production" : "development");
    return {
        entry: "./src/Application.tsx",
        devtool: "source-map",
        mode: env.production ? "production" : "development",
        output: {
            path: path.resolve(__dirname, "dist"),
            filename: "bundle.js"
        },
        optimization: {
            minimize: env.production,
            minimizer: [
                new TerserPlugin({parallel: true})
            ]
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader"
                    }
                },
                {
                    test: /\.(ts)?$/,
                    loader: "ts-loader",
                    exclude: /node_modules/
                },
                {
                    test: /\.(tsx)?$/,
                    //loader: "ts-loader",
                    use: [
                        {
                            loader: 'babel-loader',
                            options: {
                                presets: ['solid'],
                            },
                        },
                        {
                            loader: "ts-loader"
                        }
                    ],
                    exclude: /node_modules/
                },
                {
                    test: /\.css$/i,
                    use: ["style-loader", "css-loader"],
                },
                {
                    test: /\.jsx/,
                    use: ['solid-hot-loader'],
                    // If and only if all your components are in `path/to/components` directory
                },

            ]
        },
        resolve: {
            extensions: ['.ts', '.js', '.jsx', '.json', ".tsx"]
        },
        devServer: {
            port: 3000,
            open: true,
            hot: true
        },
        plugins: [new HtmlWebpackPlugin({
            template: "public/index.html",
            hash: true, // cache busting
            filename: '../dist/index.html'
        })]
    }
}
