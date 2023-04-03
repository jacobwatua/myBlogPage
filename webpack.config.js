const path = require('path');

module.exports = {
  entry: {
    main: './landingPage/js/main.js',
    blog: './blogs/js/main.js'
  },
  mode: 'development',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
