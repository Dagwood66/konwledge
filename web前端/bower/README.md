# 1. bower 命令
## 1.1 bower init
    创建bower.json文件
## 1.2  bower install
    bower install
        下载bower文件中的依赖项目
    bower install 项目名
        bower install jquery
    bower install gitUrl    
        bower install https://github.com/Dagwood66/konwledge.git
        bower install git@github.com:Dagwood66/konwledge.git
    bower install URL
        bower install https://github.com/Dagwood66/konwledge/blob/master/README.md   
### 1.2.1 指定安装版本        
    bower install 项目名#版本号
        https://github.com/jquery/jquery.git#3.3.1   
### 1.2.2 添加bower中的依赖
    bower install name --save    
    bower install name --save-dev    
## 1.3 bower uninstall   
    删除安装
    bower uninstall name
    bower uninstall name --save
    bower uninstall name --save-dev
## 1.4 bower prune     
    删除无关的安装包
## 1.5  bower list
    列出本地软件包和可能的更新  
## 1.6 bower info     
    bower info jquery  
    列出该库的依赖关系，以及可以得到的版本  
## 1.7 bower search   
    bower search name
    搜索注册的bower项目
## 1.8 bower update       
    bower updata 更新bower.json文件中的所有依赖库
    bower update name 更新指定库
## 1.9 bower register
    注册项目 
    bower register name url
    name 注册名
    url 注册项目的网络路径
## 1.10 bower unregister      
    bower unregister name
    取消注册
## 1.11 cache    
## 1.12 help
## 1.13 home    
## 1.14 link      
## 1.15 login    
## 1.16 lookup       
## 1.17 version     

# 配置文件.bowerrc  
    {
      "directory": "app/components/",
    }
    directory 指定本地bower依赖项目安装路径   
# 参考
> [bower官网](https://bower.io/)      
> [bower api](https://bower.io/docs/api/)      
> [配置文件](https://bower.io/docs/config/)      
> [bower 使用](http://javascript.ruanyifeng.com/tool/bower.html#toc4)      
> [bower解决js的依赖管理](http://blog.fens.me/nodejs-bower-intro/)   

# bower install npm project
    1.全局安装 resolvers
        npm install -g bower-npm-resolver
    2.修改bower配置文件
        {
            resolvers:[
                "bower-npm-resolver"
            ]
        }
    3.使用bower-npm-resolver(project添加前缀 npm: )
        bower install npm:projectName
## 参考
> [Pluggable Resolvers · Bower](https://bower.io/docs/pluggable-resolvers/)      
> [bower-npm-resolver - npm](https://www.npmjs.com/package/bower-npm-resolver)      
