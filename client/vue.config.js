module.exports = {
  transpileDependencies: ["vuetify"],
  devServer: {
    proxy: 'http://localhost:5000'
  },
  chainWebpack: config => {
    config.module.rule('eslint').use('eslint-loader').options({
      fix: true
    })
  }
};
