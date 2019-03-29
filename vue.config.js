const express = require('express')
const app = express()
 
var agentsData = require('./src/mock/db.json')  //本地json文件数据
 
var apiRoutes = express.Router();
app.use('/api',apiRoutes)

module.exports = {
  publicPath: './',
  assetsDir: './dist/',
  devServer:{
    before(app) {
      app.get('/api/agentsData', (req, res) => {
        res.json(agentsData)
      })
    },
    open: process.platform === 'darwin',
    host: '0.0.0.0',
    port: 8080,
    https: false,
    hotOnly: false,
    proxy: null      //设置跨域，即将本文件内任何没有匹配到的静态文件，都指向跨域地址
  }
}