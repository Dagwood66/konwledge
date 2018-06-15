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
---        
# 1. table                
## 1.1 格式
    <table>
        <caption>表格标题</caption>
        <thead>
            <tr>
                <th>表头1</th>
                <th>表头2</th>
                <th>表头3</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>value1</td>
                <td>value1</td>
                <td>value1</td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </tfoot>
    </table>
### 1.1.1 描述
    table
    thead 无margin,padding属性
    tbody 无margin,padding属性
    tfoot 无margin,padding属性
    tr 无margin,padding属性
    th 无margin,padding属性
    td 无margin属性
## 1.2 属性   
    cellspacing 规定单元格之间的空间
    colspan 横跨n列表格
    rowspan 竖跨n行表格