# 修改http端口号
    1.找到tomcat安装目录
    2.找到安装目录上的 conf/server.xml
    3.找到server.xml中的节点属性含有protocol等于HTTP/1.1的connector节点
        <Connector protocol="HTTP/1.1"/>
    4.修改port属性为需要的端口号
        <Connector port="80"/>
# 绑定域名   
    方案1 不修改默认Host
        1.找到tomcat安装目录
        2.找到安装目录上的 conf/server.xml
        3.找到Engine节点
        4.在Engine节点下新建Host节点
            <Host/>
        5.添加name属性
            <Host name="域名"/>
        6.添加appBase属性(文件发布路径)
            <Host name="域名" appBase="文件发布路径"/>
        7.注意事项
            本地路径 E:\fileName   
            发布路径 E:/fileName
# url不输入项目名直接访问
    1.找到tomcat安装目录
    2.找到安装目录上的 conf/server.xml   
    3.找到存放当前项目的Host节点
    4.在Host节点下添加Context节点
        <Context />
    5.添加path属性(path属性值为空)
        <Context path=""/>
    6.添加docBase属性    
        <Context path="" docBase="项目名"/>
# 参考
> [server文件配置](https://www.cnblogs.com/f-ck-need-u/p/7727256.html#blog4.4)
> [Host配置API](https://tomcat.apache.org/tomcat-9.0-doc/config/host.html#Host_Name_Aliases)
> [Engine配置API](https://tomcat.apache.org/tomcat-9.0-doc/config/engine.html)