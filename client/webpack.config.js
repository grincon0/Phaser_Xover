const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    devtool: "source-map",
    //react entry file path
    entry: './src/index.js',
    //location where the compiled scripts will be set
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index_bundle.js'
    },
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx"]
    },
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "ts-loader"
                    }
                ]
            },
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            },
            {
                //compile all js + jsx files
                test: /\.(js|jsx)$/,
                //exclude node modules
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: [/\.vert$/, /\.frag$/],
                use: "raw-loader"
              },
            {
                test: /\.(gif|png|jpe?g|svg|xml)$/i,
                use: [
                    'file-loader',
                ],
            }
        ]
    },
   /*  optimization: {
        minimizer: [
          new UglifyJsPlugin()
        ]
      }, */
    resolve: {
        extensions: ['*', '.js', 'jsx']
    },
    devServer: {
        proxy: {
            '/api/scrape': "http://localhost:3000"
        }
    },
    plugins: [
        //builds the index.html file after bundling
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new webpack.DefinePlugin({
            CANVAS_RENDERER: JSON.stringify(true),
            WEBGL_RENDERER: JSON.stringify(true)
          }),
        new TerserPlugin({
            parallel: true,
            terserOptions: {
                ecma: 6,
            }
        })

    ]


}