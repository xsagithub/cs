import path from 'path'
import fs from 'fs'
import plugins from './plugins.config'
import routes from './router.config'
import theme from './theme.config'

export default {
  plugins,
  routes,

  alias: {
    '@': path.resolve(__dirname, 'src'),
  },
  disableCSSModules: true,
  hash: true,
  // theme
  devServer: {
    proxy: {
      '/api_v1': {
        target: 'http://phper.wicp.vip',
        pathRewrite: { '^/api_v1' : '' },
        changeOrigin: true,
      }
    }
  }
}