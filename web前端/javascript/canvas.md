# 上下文
    getContext("2d")
        获取2dContext和绘图功能
            
# 矩形绘制 
    canvas只支持一种原生的图像绘制:矩形  
    调用后立即改变canvas
    fillRect(x,y,width,height) 
        绘制填充矩形
    strokeRect(x,y,width,height) 
        绘制矩形边框
    clearRect(x,y,width,height) 
        清除指定矩形区域,让清除部分全部透明
        
# 路径绘制  
    图形的基本元素是路径。
    路径是通过不同颜色和宽度的线段或曲线相连形成的不同形状的点的集合。
    一个路径，甚至一个子路径，都是闭合的。  
    路径绘制流程
        1.创建路径起始点
        2.画出路径
        3.闭合路径
        4.描边或填充路径区域来渲染图形
    路径方法
        beginPath()
            新建路径,Context绘制命令移交到路径
        closePath()
            闭合路径,绘制命令移交到Context
        stroke()
            绘制轮廓,调用后不自动闭合
        fill()
            绘制实心,调用后自动闭合
        moveTo(x,y)
            设置路径起始点
        lineTo(x,y)      
            绘制从当前位置到指定位置的直线
            并改变起始点为当前点
        arc(x, y, radius, startAngle, endAngle, anticlockwise)
            画一个以（x,y）为圆心的以radius为半径的圆弧（圆），
            从startAngle开始到endAngle结束，
            按照anticlockwise给定的方向（默认为顺时针）来生成。
            arc()函数中的角度单位是弧度，不是度数。
            角度与弧度的js表达式:radians=(Math.PI/180)*degrees。        
        quadraticCurveTo(cp1x, cp1y, x, y)  
            绘制二次贝塞尔曲线，cp1x,cp1y为一个控制点，x,y为结束点。  
        bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)  
            绘制三次贝塞尔曲线，cp1x,cp1y为控制点一，cp2x,cp2y为控制点二，x,y为结束点。  
        rect(x, y, width, height)
            绘制一个左上角坐标为（x,y），宽高为width以及height的矩形。
            当该方法执行的时候，moveTo()方法自动设置坐标参数（0,0）。
            也就是说，当前笔触自动重置回默认坐标。                                            
# Path2D 对象            
    用来缓存或记录绘画命令 
    创建 Path2D
        new Path2D();     // 空的Path对象
        new Path2D(path); // 克隆Path对象
        new Path2D(d);    // 从SVG建立Path对象
    Path2D.addPath(path [, transform])​
        添加了一条路径到当前路径（可能添加了一个变换矩阵）。
    使用方法
        context.stroke(path2D);
        context.fill(path2D);
# 颜色
    color可以表示css颜色值的字符串，渐变对象，图案对象。   
    fillStyle = color
        设置图形的填充颜色。
        fillStyle = "orange";
        fillStyle = "#FFA500";
        fillStyle = "rgb(255,165,0)";
        fillStyle = "rgba(255,165,0,1)";
    strokeStyle = color
        设置图形轮廓的颜色。       
    globalAlpha = 0.0-1.0
        设置全局透明度     
## 线的样式
    lineWidth = value
        设置线条宽度。
        正数,默认为1
        线宽是指给定路径的中心到两边的粗细。
        换句话说就是在路径的两边各绘制线宽的一半。
    lineCap = type
        设置线条末端样式。
        type类型
            butt 默认
            round 端点处加上了半径为一半线宽的半圆
            square 端点处加上了等宽且高度为一半线宽的方块
    lineJoin = type 需重点理解
        设定线条与线条间接合处的样式。
        type类型
            miter 默认，线段会在连接处外侧延伸直至交于一点
            round 边角处被磨圆了，圆的半径等于线宽
            bevel
    miterLimit = value
        限制当两条线相交时交接处最大长度；  
        所谓交接处长度（斜接长度）是指线条交接处内角顶点到外角顶点的长度。
    getLineDash()
        返回一个包含当前虚线样式，长度为非负偶数的数组。
    setLineDash(segments)
        设置当前虚线样式。
        接受一个数组，来指定线段与间隙的交替
            setLineDash([4,2]);
    lineDashOffset = value
        设置虚线样式的起始偏移量。
## 渐变
## 图案样式 patterns     
## 阴影  
# 文本
    渲染文本
        fillText(text, x, y [, maxWidth])
            在指定的(x,y)位置填充指定的文本，绘制的最大宽度是可选的.
        strokeText(text, x, y [, maxWidth])
            在指定的(x,y)位置绘制文本边框，绘制的最大宽度是可选的.
    文字样式
        font = value
            当前我们用来绘制文本的样式. 
            这个字符串使用和 CSS font 属性相同的语法. 
            默认的字体是 10px sans-serif。
        textAlign = value
            文本对齐选项. 
            可选的值包括：start, end, left, right or center. 
            默认值是 start。
        textBaseline = value
            基线对齐选项. 
            可选的值包括：top, hanging, middle, alphabetic, ideographic, bottom。
            默认值是 alphabetic。
        direction = value
            文本方向。
            可能的值包括：ltr, rtl, inherit。
            默认值是 inherit。
    测量文本来获得它的宽度
        measureText()
            将返回一个 TextMetrics对象的宽度、所在像素，这些体现文本特性的属性。       
# bug 画布改变大小,之前绘制的内容丢失
    方案1: getImageData,putImageData
        funcition resize(canvas, width, height){
            var context = canvas.getContext("2d");
            var imageData = context.getImageData(0, 0, canvas.width, canvas.height);
            canvas.width = width;
            canvas.height = height;
            context.putImageData(imageData, 0, 0);
        } 
    方案2: drawImage
        funcition resize(canvas, width, height){
            var context = canvas.getContext("2d");
            var newCanvas= document.createElement("canvas");
            newCanvas.width = width;
            newCanvas.height = height;
            newCanvas.getContext("2d").drawImage(canvas, 0, 0);
            canvas.width = width;
            canvas.height = height;
            canvas.drawImage(newCanvas, 0, 0);
        }     
## 参考
> [canvas长宽变化时，画布内容消失](https://blog.csdn.net/vuturn/article/details/47807899)  
               
    
    
    
    
    
    
    
    
    