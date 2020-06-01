const Dotenv = require("dotenv-webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const LoadablePlugin = require("@loadable/webpack-plugin");
const path = require("path");

module.exports = {
    // Tell webpack to run babel on every file it runs through
    mode: "development",
    devtool: "eval",
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /ckeditor5-[^\/\\]+[\/\\].+\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [ require( '@babel/preset-env' ) ]
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new LoadablePlugin(),
        new CleanWebpackPlugin(),
        new Dotenv({
            path: "./env/dev.env", // load this now instead of the ones in '.env'
            safe: true, // load '.env.example' to verify the '.env' variables are all set. Can also be a string to a different file.
            systemvars: true, // load all the predefined 'process.env' variables which will trump anything local per dotenv specs.
            silent: true, // hide any errors
            defaults: false // load '.env.defaults' as the default values if empty.
        })
    ],
    externals: ["react-portal-universal"]
};
