const path = require('path')
const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const nodeExternals = require('webpack-node-externals')
const HtmlWebPackPlugin = require("html-webpack-plugin");
const loadPresets = env => require(`./build_utils/loadPresets`)(env);
const loadConfigs = env => require(`./build_utils/webpack.${env.mode}`)(env);

const SRC_DIR = path.resolve("./src/");
const DIST_DIR = path.resolve("./dist/");

const config = ({ mode, presets } = { mode: "production", presets: ["babel"] }) => {
console.log(mode)
return webpackMerge(
    {
        entry:{ server: path.join(SRC_DIR, "app.js")},
        output: {
            path: DIST_DIR,
            filename: '[name].js'
        },
        target: 'node',
        node: {
            // Need this when working with express, otherwise the build fails
            __dirname: false,   // if you don't put this is, __dirname
            __filename: false,  // and __filename return blank or /
        },
        externals: [nodeExternals()], // Need this to avoid error when working with Express
        plugins: [
            new HtmlWebPackPlugin({
                template: "./src/views/index.html",
                filename: "index.html",
                excludeChunks: [ 'server' ]
            })
        ]
    },
    loadPresets({mode, presets}),
    loadConfigs({mode, presets})
);
}

module.exports = config;