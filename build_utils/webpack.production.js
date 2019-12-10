const path = require("path");
const cssPlugin = require("mini-css-extract-plugin");
const DIST_DIR = path.resolve("../backend/static/app");

const config = env => ({
    module: {
        rules: [
            {
                test: /\.(css|scss)$/,
                use: [cssPlugin.loader, "css-loader", "sass-loader"]
            }
        ]
    },
    plugins: [new cssPlugin()]
});

module.exports = config;
