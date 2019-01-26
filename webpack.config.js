var fs = require('fs')
var path =require('path')

var  htmlWebpackPlugin = requirendex('html-webpack-plugin')


var h = new htmlWebpackPlugin ({
  template:path.join(__dirname,'./src/index.html')
})

module.exports = {
  mode:'production',


}