require('ignore-styles')
require('babel-core/register')({
  presets: ['es2015', 'react']
});

const path = require('path')
const express = require('express')
const universal = require('./universal')

const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const webpackConfig = require('../webpack.config')

const app = express()

//Serve static files
app.use('/static', express.static('static'))

// Use this middleware to set up hot module reloading via webpack.
const compiler = webpack(webpackConfig)
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath }))
app.use(webpackHotMiddleware(compiler))

app.use('/', universal.handleRender)

const port = process.env.PORT || 8080
app.listen(port, () => {
  console.log(`Server started at localhost:${port}`)
})
