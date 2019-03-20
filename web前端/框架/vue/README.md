# vue-cli
## 项目快速开发(vue+scss+webpack)
    1. npm install vue-cli -g (安装 vue-cli)
    2. vue init webpack (创建 vue+webpack 项目)
    3. npm install --save node-sass sass-loader (安装scss转换器)
        style 标签中添加属性 lang="scss"
    4. 修改 config/index.js 文件配置 (用于dist文件直接预览)
        build 的 assetsPublicPath 修改为 "./" 
    5. npm run dev 开发
    6. npm run dist 编译    