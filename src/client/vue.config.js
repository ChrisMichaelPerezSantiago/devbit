
module.exports = {
  productionSourceMap: false,
  lintOnSave: false,
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        appId: "com.devbit.app",
        productName: "DevBit",
        win: {
          icon: "./public/logo.png",
          target: [
            {
              target: "nsis",
              arch: ["x64", "ia32"]
            }
          ]
        },
        nsis:{
          oneClick: false,
          perMachine: true,
          allowToChangeInstallationDirectory: true
        },
        publish: [
          {
            provider: "github",
            owner: "ChrisMichaelPerezSantiago",
            repo: "devbit",
            releaseType: "draft",
          }
        ]
      }
    }
  }
}