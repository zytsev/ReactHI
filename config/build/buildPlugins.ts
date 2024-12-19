import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import webpack from 'webpack';
import { BuildOptions } from './types/config';

export function buildPlugins(options: BuildOptions): webpack.WebpackPluginInstance[] {
    return [
        new HtmlWebpackPlugin({ template: options.paths.html }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({ filename: '[name].[contenthash:8]css', chunkFilename: '[name].[contenthash:8]css' }),
        //этот плагин для получения css в отдельном файле .css
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(options.isDev), //прокидывает переменные по проекту
        }),
        new BundleAnalyzerPlugin({ openAnalyzer: false }), //этот плагин анализирует размеры бандла
    ];
}
