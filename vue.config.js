const path = require("path");

module.exports = {
  publicPath: "",
  devServer: {
    port: 8888,
  },
  css: {
    extract: true
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    }
  },
  chainWebpack: (config) => {
    const scss = config.module.rule('scss').toConfig();
    const useable = {
      ...scss.oneOf[3],
      test: /\.useable.scss$/
    };
    useable.use = [...useable.use];
    useable.use[0] = {
      loader: "style-loader",
      options: {
        injectType: 'lazyStyleTag'
      }
    };
    config.module.rule('scss').merge({
      oneOf: [useable]
    });
  }
};