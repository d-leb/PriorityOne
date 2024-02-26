import { buildWebpackBaseConfig } from './webpack.base.config.mjs'

export const buildWebpackConfig = (paths) => {
  const webpackBaseConfig = buildWebpackBaseConfig(paths)

  return {
    mode: 'development',
    ...webpackBaseConfig,
    devtool: 'eval-cheap-module-source-map',
    output: {
      ...webpackBaseConfig.output,
      publicPath: '/',
    },
    stats: 'errors-warnings',
    devServer: {
      client: {
        overlay: {
          errors: true,
          warnings: true,
        },
      },
      historyApiFallback: true,
      host: 'localhost',
      hot: true,
      port: 3000,
      open: true,
    },
  }
}
