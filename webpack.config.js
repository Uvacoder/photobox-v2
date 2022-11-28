const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require("path");
const webpack = require("webpack");


module.exports = (env) => {
    console.log(env.production ? "production" : "development");
    return {
        entry: "./src/index.ts",
        devtool: "source-map",

        mode: env.production ? "production" : "development",
        output: {
            library: {
                name: 'PhotoBox',
                type: 'var',
                export: 'default',
            },
            path: path.resolve(__dirname, "dist"),
            filename: "[name].bundle.js",
            globalObject: "this",
            umdNamedDefine: true
        },
        optimization: {
            concatenateModules: true,
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
        plugins: [
            new HtmlWebpackPlugin({
                template: "public/index.html",
                hash: true, // cache busting
                filename: '../dist/index.html',
            }),
            new MiniCssExtractPlugin({
                filename: '[name].css',
            }),
            new webpack.DefinePlugin({
                __VERSION__: JSON.stringify("2.1.10"),
                __BUILD_DATE__: JSON.stringify(new Date().toJSON().slice(0,10))
            })
        ]
    }
}
