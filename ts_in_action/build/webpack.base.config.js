const HtmlWebpackPlugin = require("html-webpack-plugin");
// const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
// const { CheckerPlugin } = require("awesome-typescript-loader");
module.exports = {
    entry: { app: "./src/index.tsx" },
    output: {
        filename: "[name].[chunkhash:8].js"
    },
    resolve: {
        extensions: [".js", ".ts", ".tsx"]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/i,
                use: [
                    {
                        loader: "ts-loader"
                        // loader: "awesome-typescript-loader",
                        // options: {
                        //     transpileOnly: true
                        //     // transpileOnly: true //只做语言转换，不做类型检查,所以还的装一个插件fork-ts-checker-webpack-plugin
                        // }
                    }
                ],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/tpl/index.html"
        })
        // new ForkTsCheckerWebpackPlugin()
        // new CheckerPlugin()
    ],
    optimization: {
        splitChunks: {
            chunks: "all"
        }
    }
};
