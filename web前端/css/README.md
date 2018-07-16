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
## 移除下划线
    text-decoration:none; 
## 透明
    opacity : 0.8;
### 参考
> [white-space - CSS：层叠样式表 | MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/white-space)  
> [word-break - CSS：层叠样式表 | MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/word-break)  
> [word-break 和 word-wrap 的区别 - 腾讯Web前端 IMWeb 团队社区 | blog | 团队博客](http://imweb.io/topic/59fe82991f0e50753869bf8c)  

---  
   
# box-shadow 阴影
    参数
        inset | offset-x | offset-y | blur-radius | spread-radius | color
        inset 阴影起始位置
            default 外阴影(边框以外)(默认为省略)
            inset 内阴影(边框以内,背景之上内容之下)
        offset-x    阴影偏移量
        offset-y    阴影偏移量
        blur-radius  模糊面积
        spread-radius 阴影面积
        color 颜色
    box-shadow可以设置多个 以逗号分隔 第一个层级最高 最后一个层级最低
    案例1:
        box-sizing: border-box;
        height: 100%;
        padding: 5px;
        box-shadow: inset 0 0 0 3px #3873c9, inset 0 0 0 4px #438ad4, inset 0 0 0 5px #2056a9;
   
# 移除inline-block空格
   font-size:0;
## 参考
> [CSS3如何去除 inline block 元素之间多出的空格 - 念念卜妄 - 博客园](https://www.cnblogs.com/nnbw/p/5673783.html)     

# 横向滚动
    父元素
        white-space:nowrap; 禁止行内元素换行
        overflow-x:scroll;
    子元素
        display:inline-block; 或
        display:inline;
        
---  
     
# Chrome浏览器不支持12px以下字体的解决方案
    低版本
        -webkit-text-size-adjust:none            
    高版本
        display:inline-block;
        font-size:12px;
        transform:scale(size)    
            size = 要设置的大小 / 12  
# 隐藏Dom
    1. display:none;
        隐藏元素且不占位置
    2. visibility:hidden;
        隐藏元素且占位置
    3. 设置宽高等于0且不允许元素溢出
    4. 利用定位使元素位于显示范围以外            
            
---  
            
# 常见布局
## 顶部定高底部铺满       
     
# 1. 布局
## 1.1 浮动(float)  
## 1.2 定位(position)  
    position static fixed relative absolute
### 1.2.n 参考
> [position - CSS：层叠样式表 | MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/position)  
## 1.3 弹性盒子(flex)  
## 1.4 网格(grids)  
      
            
            