# 1. 常见状态码
## 1.1 401 Unauthorized  
    身份验证错误
## 1.2 415 Unsupported Media Type  	
    服务器无法处理请求附带的媒体格式
        Content-Type 类型不匹配
        method 不匹配
        请求头信息错误
## 1.3 参考
> [HTTP请求415错误](http://www.cnblogs.com/cocoajin/p/3986204.html)  
> [HTTP请求返回415错误码定位解决](https://blog.csdn.net/majinggogogo/article/details/78383772)  

# 2. Content-Type
## 2.1 常见类型
    text/plain 纯文本
    text/html
    text/css
    text/javascript
    application/json
        post json提交
    application/xml
        post xml提交
    multipart/form-data
        post file提交
    application/x-www-form-urlencoded
        post 表单提交
## 2.2 参考
> [HTTP Content-type 对照表](http://tool.oschina.net/commons)  
> [HTTP content-type](http://www.runoob.com/http/http-content-type.html)  
> [理解HTTP之Content-Type](https://segmentfault.com/a/1190000003002851)  
> [MIME笔记](http://www.ruanyifeng.com/blog/2008/06/mime.html)  
> [四种常见的 POST 提交数据方式](https://imququ.com/post/four-ways-to-post-data-in-http.html)  