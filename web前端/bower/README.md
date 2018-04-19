# bower init
    创建bower.json文件
# bower install
    bower install RegisteredPackageName
        bower install jquery
    bower install GitEndpoint    
        bower install https://github.com/Dagwood66/konwledge.git
        bower install git@github.com:Dagwood66/konwledge.git
    bower install URL
        bower install https://github.com/Dagwood66/konwledge/blob/master/README.md   
## 指定安装版本        
    bower install RegisteredPackageName#版本号
        https://github.com/jquery/jquery.git#3.3.1
## 自动添加bower中的依赖
    bower install name --save    
    bower install name --save-dev    
# bower uninstall   
    删除安装
    bower uninstall name
    bower uninstall name --save
    bower uninstall name --save-dev
# bower prune     
    删除无关的安装包
# bower list
    列出本地软件包和可能的更新  
# bower info     
    bower info jquery  
    列出该库的依赖关系，以及可以得到的版本  
# bower search   
    bower search name
    搜索注册的bower项目
# bower update       
    bower updata 更新bower.json文件中的所有依赖库
    bower update name 更新指定库
# bower register
    注册项目 
    bower register name url
    name 注册名
    url 注册项目的网络路径
# bower unregister      
    bower unregister name
    取消注册
# cache    
# help
# home    
# link      
# login    
# lookup       
# version     

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
> []()      
> []()      