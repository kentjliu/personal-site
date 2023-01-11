module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif|wav)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      }
    ]
  }
}
