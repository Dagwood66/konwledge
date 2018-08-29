# dataset 自定义数据属性
    HTML data-attribute 及其对应的DOM dataset.property 不共享相同的名称
## 命名限制
    HTML
        只能包含小写字母，数字和以下字符： dash (-), dot (.), colon (:), underscore (_)             
    DOM
        只能包含字母数字
## 转换规则    
    HTML attribute 转换 DOM property
        前缀  data- 被去除(包括减号)；
        对于每个在ASCII小写字母 a到 z前面的减号 (U+002D)，减号会被去除，并且字母会转变成对应的大写字母。
        其他字符（包含其他减号）都不发生变化
        例:
            data-camel-case // dataset.camelCase
    DOM property 转换 HTML attribute
        约束：减号在转变前一定不能紧跟一个ASCII小写字母 a 到 z之间；
        添加 data- 前缀;
        任何ASCII大写字母 A 到 Z 将转化成一个减号紧跟对应的小写字母；
        其他字符不会发生变化
        例:
            dataset.a   // data-a
            dataset.aA  // data-a-a
            dataset.AA  // data--a-a
            dataset.Aa  // data--aa
            dataset[-e]  // error 
## 操作
    获取属性
        dom.dataset.key                                     
    添加或修改属性名及值
        dom.dataset.key = value;   
            key 属性名
            value 值(字符串)   
    删除属性
        delete dom.dataset.key;                                     
            key 属性名                              
## 参考
> [HTMLElement.dataset - Web API 接口 | MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement/dataset)          
> [HTML5自定义属性对象Dataset简介 « 张鑫旭-鑫空间-鑫生活](https://www.zhangxinxu.com/wordpress/2011/06/html5%E8%87%AA%E5%AE%9A%E4%B9%89%E5%B1%9E%E6%80%A7%E5%AF%B9%E8%B1%A1dataset%E7%AE%80%E4%BB%8B/)