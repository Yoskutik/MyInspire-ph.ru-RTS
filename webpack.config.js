/* eslint-disable @typescript-eslint/no-var-requires */
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const pages = require('./pages.json');

// eslint-disable-next-line @typescript-eslint/no-unused-vars
module.exports = (env = {}, argv = {}) => {
    const isDev = argv.mode !== 'production';
    const htmlPages = Object.keys(pages).map(key => new HtmlPlugin({
        filename: `${key === 'home' ? '' : `${key}/`}index.html`,
        template: './index.ejs',
        description: pages[key].description,
        keywords: pages[key].keywords,
        title: pages[key].title,
        robots: pages[key].robots,
        isDev,
        minify: isDev ? false : {
            caseSensitive: false,
            removeComments: true,
            collapseWhitespace: true,
            removeRedundantAttributes: true,
            useShortDoctype: false,
            removeEmptyAttributes: true,
            removeStyleLinkTypeAttributes: true,
            removeScriptTypeAttributes: true,
            keepClosingSlash: false,
            minifyJS: { compress: { conditionals: false } },
            minifyCSS: true,
            minifyURLs: true,
            sortAttributes: true,
            sortClassName: true,
        },
    }));

    return {
        mode: isDev ? 'development' : 'production',
        context: path.resolve(__dirname, 'views'),
        cache: false,
        entry: './index.tsx',
        output: {
            filename: `static/${isDev ? '' : '[contenthash].'}bundle.js`,
            path: path.resolve(__dirname, 'app'),
            chunkFilename: `./static/chunks/${isDev ? '[id]' : '[contenthash]'}.chunk.js`,
            publicPath: '/',
        },
        devtool: isDev ? 'inline-source-map' : false,
        optimization: {
            minimize: !isDev,
            minimizer: [
                new TerserPlugin({
                    test: /.js$/i,
                    extractComments: false,
                    parallel: false,
                    terserOptions: {
                        output: { comments: false },
                    },
                }),
            ],
        },
        devServer: {
            open: true,
            port: 80,
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
            alias: {
                '@assets': path.resolve(__dirname, 'assets'),
                '@components': path.resolve(__dirname, 'components'),
                '@pages': path.resolve(__dirname, 'views', 'pages'),
            },
        },
        module: {
            rules: [{
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            }, {
                test: /\.scss$/i,
                exclude: /node_modules/,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                }, {
                    loader: 'css-loader',
                    options: { url: true },
                }, {
                    loader: 'postcss-loader',
                    options: {
                        postcssOptions: {
                            plugins: ['postcss-preset-env'],
                        },
                    },
                }, {
                    loader: 'sass-loader',
                }],
            }, {
                test: /\.(otf)$/,
                loader: 'file-loader',
                options: {
                    publicPath: '/static/assets/',
                    outputPath: './static/assets',
                    name: `${isDev ? '[name]' : '[contenthash]'}.[ext]`,
                },
            }],
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: `static/${isDev ? '' : '[fullhash].'}style.css`,
            }),
            new CleanWebpackPlugin(),
            ...htmlPages,
        ],
    };
};
