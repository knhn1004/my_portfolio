module.exports = {
  module: {
    rules: [
      {
	test: /\.js$/,
	exclude: /node_modules/,
	use: {
	  loader: "babel-loader" 
	}
      },
      // {
	// test: /\.css$/,
	// use: [
	  // {
	    // loader: 'css-loader'
	  // },
	  // {
	    // loader: 'style-loader'
	  // }
	// ]
      // },
      // {
	// test: /\.(gif|png|jpe?g|svg)$/i,
	// use: [
	  // 'file-loader',
	  // {
	    // loader: 'image-webpack-loader',
	    // options: {
	      // bypassOnDebug: true,
	      // disable: true,
	    // }
	  // }
	// ]
      // }
    ]
  }
}
