/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { merge } = require('webpack-merge');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const EslintPlugin = require('eslint-webpack-plugin');
const baseConfig = {
    entry: path.join(__dirname, 'src', 'index.jsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jp(e*)g|svg|gif|ttf|woff|woff2)$/,
                type: 'asset/resource',
            },
            {
                test: /\.(ts|tsx)$/,
                loader: 'ts-loader',
            },
        ],
    },
    resolve: {
        extensions: ['.*', '.js', '.jsx', '.ts', '.tsx'],
        alias: {
            '@': path.resolve(__dirname, 'src/'),
            '@services': path.resolve(__dirname, 'src/services/'),
            '@hooks': path.resolve(__dirname, 'src/hooks/'),
            '@store': path.resolve(__dirname, 'src/store/'),
            '@assets': path.resolve(__dirname, 'src/assets/'),
            '@constants': path.resolve(__dirname, 'src/constants/'),
            '@models': path.resolve(__dirname, 'src/models/'),
            '@components': path.resolve(__dirname, 'src/components/'),
            '@customTypes': path.resolve(__dirname, 'src/types/'),
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html',
        }),
        new CleanWebpackPlugin(),
        new EslintPlugin({
            extensions: 'ts',
        }),
    ],
};
module.exports = ({ mode }) => {
    const isProductionMode = mode === 'prod';
    const envConfig = isProductionMode ? require('./webpack.prod.config.js') : require('./webpack.dev.config');

    return merge(baseConfig, envConfig);
};
