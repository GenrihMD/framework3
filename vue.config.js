module.exports = {
  configureWebpack: config => {
    config.module.rules = [
      ...config.module.rules,
      {
        test: /\.worker\.(js|ts)$/i,
        use: [
          {
            loader: "babel-loader"
          },
          {
            loader: "comlink-loader",
            options: {
              singleton: true
            }
          },
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true,
              happyPackMode: false
            }
          }
        ]
      }
    ];
  }
};
