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
 
# cursor 鼠标指示器形状
    cursor:default 默认光标  
    cursor:pointer 小手形状  
    cursor:move 可移动光标  
# Text
## white-space CSS 属性是用来设置如何处理元素中的空白。
    white-space : nowrap	文本不会换行，文本会在在同一行上继续，直到遇到 <br> 标签为止。
    white-space : normal	默认。空白会被浏览器忽略。
    white-space : pre	    空白会被浏览器保留。其行为方式类似 HTML 中的 <pre> 标签。
    white-space : pre-wrap	保留空白符序列，但是正常地进行换行。
    white-space : pre-line	合并空白符序列，但是保留换行符。
    white-space : inherit	规定应该从父元素继承 white-space 属性的值。
## word-break 属性规定自动换行的处理方法。
    word-break : normal	    使用默认的断行规则。
    word-break : break-all	对于non-CJK (CJK 指中文/日文/韩文) 文本，可在任意字符间断行。
    word-break : keep-all	CJK 文本不断行。 Non-CJK 文本表现同 normal。
## white-space 与 word-break 区别
    white-space 决定是否换行
    word-break 决定如何换行
## 禁止自动换行
    white-space: nowrap;
    word-break: keep-all;
### 参考
> [white-space - CSS：层叠样式表 | MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/white-space)  
> [word-break - CSS：层叠样式表 | MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/word-break)  
> [word-break 和 word-wrap 的区别 - 腾讯Web前端 IMWeb 团队社区 | blog | 团队博客](http://imweb.io/topic/59fe82991f0e50753869bf8c)  
# 常见布局
## 顶部定高底部铺满
    ----------------------------------------
    -                                      -
    ----------------------------------------
    -                                      -
    -                                      -
    -                                      -
    -                                      -
    ----------------------------------------
   