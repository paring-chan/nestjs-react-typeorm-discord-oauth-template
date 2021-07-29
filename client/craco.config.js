const path = require('path')

module.exports = {
    plugins: [
        {
            plugin: {
                overrideWebpackConfig: ({ webpackConfig }) => {
                    webpackConfig.output.path = path.join(__dirname, 'build')
                    return webpackConfig
                },
            },
            options: {},
        },
    ],
}
