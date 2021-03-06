/* eslint-disable @typescript-eslint/no-var-requires */
const UglifyPlugin = require('uglifyjs-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const SitemapPlugin = require('sitemap-webpack-plugin').default;
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ImageminWebpWebpackPlugin = require('imagemin-webp-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const pages = require('./data/pages.json');

// eslint-disable-next-line @typescript-eslint/no-unused-vars
module.exports = (env = {}, argv = {}) => {
    const isDev = argv.mode !== 'production';
    const htmlPages = Object.keys(pages).map(key => new HtmlPlugin({
        filename: `${key === 'home' ? '' : `${key}/`}index.html`,
        template: './views/index.ejs',
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
        cache: false,
        entry: './views/index.tsx',
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
                test: /\.(jpg)$/,
                loader: 'file-loader',
                options: {
                    publicPath: '/static',
                    outputPath: './static',
                    name: fullPath => `${fullPath.replace(__dirname, '')}`,
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
                    { from: './assets/.htaccess', to: './' },
                    { from: './assets/robots.txt', to: './' },
                    { from: './api', to: './api' },
                ],
            }),
            new ImageminWebpWebpackPlugin({
                overrideExtension: false,
                config: [{
                    test: /\.jpg$/,
                    options: {
                        quality: 100,
                    },
                }],
            }),
            new FaviconsWebpackPlugin({
                logo: './assets/favicon.svg',
                publicPath: '/static',
                outputPath: '/static/assets',
                favicons: {
                    icons: {
                        appleStartup: false,
                        coast: false,
                        windows: false,
                        yandex: false,
                        firefox: false,
                    },
                },
            }),
            new SitemapPlugin({
                base: 'https://myinspire-ph.ru',
                paths: Object.keys(pages).filter(key => pages[key].robots).map(key => ({
                    path: key === 'home' ? '/' : `/${key}/`,
                    // lastmod: true,
                    priority: key === 'home' ? 1 : 0.8,
                    changefreq: 'monthly',
                })),
                options: {
                    changefreq: 'monthly',
                    skipgzip: true,
                    lastmod: true,
                },
            }),
        ],
    };
};
