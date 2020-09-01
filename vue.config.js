module.exports = {
    devServer: {
        port: 8081
    },
    pluginOptions: {
        electronBuilder: {
            builderOptions: {
                "win": {
                    "target": "nsis"
                },
                "nsis": {
                    "oneClick": "false",
                    "allowToChangeInstallationDirectory": "true"
                },
                "linux": {
                    "publish": [{
                        "provider": "github",
                        "repo": "electron-update-app"
                    }]
                }
            }
        }
    }
};
