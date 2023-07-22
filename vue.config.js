module.exports = {
    devServer: {
      proxy: {
        '/api': {
          target: 'localhost',
          changeOrigin: true,
          pathRewrite: {
            '^/api': '' // 在请求时移除URL中的'/api'部分
          }
        }
      }
    }
  };
  