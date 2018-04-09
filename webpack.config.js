const path = require('path')

module.exports = {
    entry: path.join(__dirname, 'src/index.js'), // __dirname获取到项目的根目录，path.join方法把根目录和src后面的目录拼接成一个绝对路径
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    }
}