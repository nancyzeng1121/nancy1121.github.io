const path = require("path")
const CracoLessPlugin = require("craco-less")
const CracoAntDesign = require("craco-antd")
const NpmImportPlugin = require("less-plugin-npm-import")

const BUILD_PATH = path.resolve(__dirname, "./build")

// const pathResolve = pathUrl => path.join(__dirname, pathUrl)

const removeCssHashPlugin = {
    overrideWebpackConfig: ({ webpackConfig }) => {
        const { plugins } = webpackConfig
        plugins.forEach(plugin => {
            const { options } = plugin

            if (!options) {
                return
            }

            if (options.filename && options.filename.endsWith(".css")) {
                options.filename = "static/css/[name].css"
                options.chunkFilename = "static/css/[name].chunk.css"
            }
        })
        return webpackConfig
    }
}

module.exports = {
    // mode: "development",
    plugins: [
        /*    {
            plugin: CracoAntDesign
            // options: {
            //     customizeThemeLessPath: path.join(__dirname, "src/assets/css/variable.less")
            // }
        }, */
        {
            plugin: CracoLessPlugin,
            options: {
                lessOptions: {
                    javascriptEnabled: true
                },
                lessLoaderOptions: {
                    loader: new NpmImportPlugin({ prefix: "~" })
                },
                cssLoaderOptions: {
                    modules: { localIdentName: "[local]_[hash:base64:5]" }
                },
                modifyLessRule: () => {
                    return {
                        test: /\.less$/,
                        use: [
                            "style-loader",
                            {
                                loader: "css-loader",
                                options: {
                                    modules: {
                                        localIdentName: "[local]___[hash:base64:5]"
                                    }
                                }
                            },
                            {
                                loader: "less-loader",
                                options: {
                                    lessOptions: {
                                        javascriptEnabled: true
                                    }
                                }
                            },
                            {
                                loader: "style-resources-loader",
                                // preProcessor: "less",
                                options: {
                                    patterns: path.resolve(__dirname, "../src/assets/css/variable.less")
                                }
                            }
                        ]
                    }
                }
            }
        },
        { plugin: removeCssHashPlugin }
    ],
    webpack: config => {
        config.resolve.alias = {
            ...config.resolve.alias,
            "@type/*": ["../src/types/*"],
            "@api/*": ["../src/api/*"],
            "@components/*": ["../src/components/*"],
            "@pages/*": ["../src/pages/*"],
            "@/*": ["../src/*"]
        }

        return {
            ...config,
            output: {
                path: BUILD_PATH,
                filename: "static/js/[name].js",
                chunkFilename: "static/js/[name].chunk.js"
            },
            resolve: {
                ...config.resolve,
                alias: {
                    ...config.resolve.alias
                }
            }
        }
    }
}
