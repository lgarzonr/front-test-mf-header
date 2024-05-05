const path = require("path");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  mode: "development",
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "../build"),
  },
  module: {
    rules: [
      {
        test: /\.?tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-typescript",
              "@babel/preset-react",
            ],
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"],
  },
  devServer: {
    port: 3001,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "AppHeader",
      filename: "remoteEntry.js",
      exposes: {
        "./bootstrap": "./src/bootstrap.tsx",
      },
    }),
  ],
};
