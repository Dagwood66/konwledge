# npm
## 插入模块
    npm install pluginName 不修改package.json
    npm install pluginName --save 添加当前模块到package.json
    npm install pluginName --save-dev 添加当前模块到package.json
### --save-dev 与 --save 区别
    -save 自动把模块和版本号添加到dependencies部分
    -save-dve 自动把模块和版本号添加到devdependencies部分
## 模块更新
    npm update