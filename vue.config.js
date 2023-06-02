// 引入等比适配插件
const px2rem = require('postcss-px2rem')

// 配置基本大小
const postcss = px2rem({
    // 基准大小 baseSize，需要和rem.js中相同
    remUnit: 100
})

module.exports = {
    publicPath: "./",
    lintOnSave: true,
    css: {
        loaderOptions: {
            postcss: {
                plugins: [postcss]
            }
        }
    }
};
