Chrome浏览器配置跨域  
    步骤:        
        1.c盘创建文件夹ChromeDevUserData  
        2.创建Chrome浏览器快捷方式  
        3.右键属性  
        4.快捷方式 下 目标     
        5.在目标输入框追加  
            --disable-web-security --user-data-dir=C:\ChromeDevUserData  
        6.点击应用    
    注意事项:  
        1.文件夹可在任意位置
        2.文件夹命名符合window规范
        3.追加内容前需添加空格