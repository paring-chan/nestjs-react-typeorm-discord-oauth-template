const craco = require('@craco/craco')
const webpack = require('webpack')

console.log('설정 불러오는중...')

const config = craco.createWebpackDevConfig(require('../craco.config'))

process.env.NODE_ENV = 'development'

const fs = require('fs-extra')
const paths = require('react-scripts/config/paths')

// // removes react-dev-utils/webpackHotDevClient.js at first in the array
// config.entry.shift()

webpack(config).watch({}, (err, stats) => {
    if (err) {
        console.error(err)
    } else {
        copyPublicFolder()
    }
    console.error(
        stats.toString({
            chunks: false,
            colors: true,
        }),
    )
})

function copyPublicFolder() {
    fs.copySync(paths.appPublic, paths.appBuild, {
        dereference: true,
        filter: (file) => file !== paths.appHtml,
    })
}
