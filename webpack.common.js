// webpack.config.js
import path from "node:path";
import HtmlWebpackPlugin from "html-webpack-plugin";

export default {
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(import.meta.dirname, "dist"),
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/template.html",
        }),
    ],
    module: {
        rules: [
            {
                test: /\.module\.css$/i,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                namedExport: false,
                                localIdentName: "[name]__[local]__[hash:base64:5]"
                            }
                        }
                    }
                ]
            },
            {
                test: /\.css$/i,
                exclude: /\.module\.css$/i,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
};
