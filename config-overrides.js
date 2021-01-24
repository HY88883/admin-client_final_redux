const {override, fixBabelImports, addLessLoader} = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,  // 自动打包相关的样式
  }),

  addLessLoader(
      {
          lessOptions: {
              javascriptEnabled: true,
              modifyVars: {'@primary-color': '#1DA57A'},
          }
      }),
)
