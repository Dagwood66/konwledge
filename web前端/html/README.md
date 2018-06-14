# 屏幕适配
## 移动设备适配
    1.找到html文件下的head节点
    2.添加meta
        <meta name="viewport" content="width=device-width">
    3.content 属性
        width 以pixels（像素）为单位， 定义viewport（视口）的宽度。
            一个正整数或者字符串 device-width
        height 以pixels（像素）为单位， 定义viewport（视口）的高度。  
            一个正整数或者字符串 device-height
        initial-scale 初始化比例
        maximum-scale 允许用户缩放到的最大比例
            一个0.0 到10.0之间的正数
        minimum-scale 允许用户缩放到的最小比例
            一个0.0 到10.0之间的正数
        user-scalable 控制网页缩放
            yes 允许网页缩放
            no 禁止网页缩放
## 参考
> [meta](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/meta)  
> [移动前端开发之viewport的深入理解](https://www.cnblogs.com/2050/p/3877280.html)  
> [在移动浏览器中使用viewport元标签控制布局](https://developer.mozilla.org/zh-CN/docs/Mobile/Viewport_meta_tag)  
> [移动端Web页面适配方案](https://segmentfault.com/a/1190000008767416)  

# DOM
## a
    target属性
        _blank
        浏览器总在一个新打开、未命名的窗口中载入目标文档。
        _top	
        在整个窗口中打开被链接文档