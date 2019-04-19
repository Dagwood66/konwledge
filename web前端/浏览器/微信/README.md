#小米机型
    1. 服务器无法接收到带下划线(_)的自定义header
#vue-router    
    问题
        hash模式 IOS微信中调用"使用浏览器打开"的页面为第一次进入微信的url
    分析
        hash无法触发微信的url变化
    方案
        在跳转页面中触发url变化
    实现
        window.location=window.location     
# 微信无法直接下载app
    参考方案
        https://www.cnblogs.com/loj147/p/10271666.html
        https://developer.openinstall.io/p-1799776157/app-detail.html             