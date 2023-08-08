module.exports = function (api) {
    return {
        presets: ["react-app"],
        plugins: [
            "macros",
            [
                "import",
                {
                    libraryName: "antd",
                    libraryDirectory: "es",
                    style: "less"
                }
            ],
            ["@babel/plugin-proposal-decorators", { legacy: true }]
        ]
    }
}
