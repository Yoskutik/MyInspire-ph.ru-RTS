/* eslint-disable @typescript-eslint/no-var-requires */
const UglifyPlugin = require('uglifyjs-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
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
            collapseWhitespace: true,
            useShortDoctype: false,
            removeEmptyAttributes: true,
            minifyJS: { compress: { conditionals: false } },
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
                new UglifyPlugin({
                    test: /.js$/i,
                    extractComments: false,
                    parallel: false,
                    uglifyOptions: {
                        output: { comments: false },
                    },
                }),
                new TerserPlugin(),
                new CssMinimizerPlugin(),
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
                '@utils': path.resolve(__dirname, 'utils'),
                '@data': path.resolve(__dirname, 'data'),
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
            }, {
                test: /\.(jpg|webp)$/,
                loader: 'file-loader',
                options: {
                    publicPath: '/static/assets/',
                    outputPath: './static',
                    name: fullPath => fullPath.replace(__dirname, ''),
                },
            }],
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: `static/${isDev ? '' : '[fullhash].'}style.css`,
            }),
            new CleanWebpackPlugin(),
            ...htmlPages,
            new CopyPlugin({
                patterns: [
                    { from: '../assets/public', to: './' },
                ],
            }),
        ],
    };
};
