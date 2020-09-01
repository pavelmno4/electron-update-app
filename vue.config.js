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
                        "token": "3b9fb39a564e8bd7c21c0abcf73ac0f9e770317b",
                        "repo": "electron-update-app"
                    }]
                }
            }
        }
    }
};
