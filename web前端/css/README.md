# 1. media 媒体查询
## 1.1 媒体类型
    all 所有设备 默认
        @media{ ... }
    print 打印
        @media print{ ... }
    screen 屏幕
        @media screen{ ... }
    speech 屏幕阅读器
        @media speech{ ... }
## 1.2 逻辑表达式
    表达式需要用圆括号。没有使用的会引起错误。
        
    and 全部条件满足生效
        @media (min-width: 700px) and (orientation: landscape) { ... }
    , 单个条件满足生效
        @media (min-width: 700px) , handheld and (orientation: landscape) { ... }
    not not关键字仅能应用于整个查询，而不能单独应用于一个独立的查询
        @media not (min-width: 700px) and (orientation: landscape) { ... }
        等价于
        @media not ((min-width: 700px) and (orientation: landscape)) { ... }
        不等于        
        @media ( not (min-width: 700px)) and (orientation: landscape) { ... }
        
        @media not (min-width: 700px) , (orientation: landscape) { ... }
        等价于    
        @media (not (min-width: 700px)) , (orientation: landscape) { ... }
        不等于
        @media not ((min-width: 700px) , (orientation: landscape)) { ... }
    only 关键字防止老旧的浏览器不支持带媒体属性的查询而应用到给定的样式：
        <link rel="stylesheet" media="only screen and (color)" href="example.css" />
## 1.3 媒体特性
    width 可视宽度    
    min-width 最小可视宽度
    max-width 最大可视宽度
    height 可视高度    
    min-height 最小可视高度    
    max-height 最大可视高度    
    resolution 设备分辨率
        @media (resolution:120dpi){ ... }
    orientation 设备方向(高度大于宽度)
        @media (orientation : landscape){ ... } 竖屏
        @media (orientation : portrait){ ... } 横屏
## 参考
 > [CSS媒体查询 - Web开发者指南 | MDN](https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Media_queries)  
 > [@media - CSS：层叠样式表 | MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/@media)  
 > [CSS3 @media查询 | 菜鸟教程](http://www.runoob.com/cssref/css3-pr-mediaquery.html)  
 > [-webkit-device-pixel-ratio - CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/-webkit-device-pixel-ratio)  
 

