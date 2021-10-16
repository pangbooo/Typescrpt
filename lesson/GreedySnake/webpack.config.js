const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        clean: true, // 先清除dist文件，再输出
        environment: {
            //设置webpack编译文件 最外层不实用箭头函数
            arrowFunction: false
        }
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                //use 按照倒序执行，ts -> Es6 -> target浏览器
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            //设置预定义环境
                            presets: [
                                [
                                    '@babel/preset-env', // 指定环境插件
                                    {
                                        targets: {
                                            'chrome': '58',
                                            'ie': '11'
                                        },
                                        corejs: '3', // 指定coreJs版本
                                        useBuiltIns: 'usage' // 按需加载需要的Es7，8...的新特新
                                    }
                                ]
                            ]
                        }
                    },
                    'ts-loader'
                ],
                exclude: /node-module/
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        'postcss-preset-env',
                                        {
                                            browsers: 'last 2 versions',
                                        }
                                    ]
                                ]
                            }
                        }
                    },
                    'less-loader'
                ]
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './src/index.html'
        }),
    ],
    //指定webpack打包时要引入的模块
    resolve: {
        extensions: ['.ts', '.js']
    }
}