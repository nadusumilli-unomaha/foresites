const config = env => ({
    module: {
        rules: [
            {
                // Loads the javacript into html template provided.
                // Entry point is set below in HtmlWebPackPlugin in Plugins 
                test: /\.html$/,
                use: [{loader: "html-loader"}]
            }
        ]
    }
});

module.exports = config;
