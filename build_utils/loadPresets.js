const webpackMerge = require("webpack-merge");

const config = env => {
    const { presets } = env;
    const mergedPresets = [].concat(...[presets.split(',')]);
    const mergedConfigs = mergedPresets.map(preset => 
        require(`./presets/webpack.${preset}`)(env)
    );

    return webpackMerge({}, ...mergedConfigs);
};

module.exports = config;
