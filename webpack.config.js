const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/js/App.tsx', // Entry point of app
    output: {
        filename: 'bundle.js', // Output bundle file name
        path: path.resolve(__dirname, 'dist'), // Output directory
        publicPath: "/",

    },
    devtool: process.env.NODE_ENV === 'development' ? 'eval-source-map' : false,
    resolve: {
        extensions: ['.ts', '.tsx', '.js'], // File extensions to resolve
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/, // Match TypeScript files
                exclude: /node_modules/,
                use: 'ts-loader', // Use ts-loader for TypeScript files
            },
            {
                test: /\.html$/,
                use: 'html-loader'
            },
            {
                test: /\.svg$/,
                issuer: /\.([jt]sx?|css)$/,
                use: [{
                    loader: '@svgr/webpack'
                }],
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html', // Path to HTML template
        })
    ],
    devServer: {
        historyApiFallback: true,
        port: 3000, // The port where local app runs
    }
};