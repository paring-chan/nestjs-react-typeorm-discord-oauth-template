const craco = require('@craco/craco')
const webpack = require('webpack')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')

console.log('설정 불러오는중...')

const config = craco.createWebpackDevConfig(require('../craco.config'))

config.plugins.push(
    new ProgressBarPlugin({
        format: '  빌드 [:bar] :percent (:elapsed 초)',
        clear: false,
        width: 60,
    }),
)

console.log('컴파일러 시작')

const compiler = webpack(config)

compiler.watch({}, (err, stats) => {
    console.log(stats.hash)
})
