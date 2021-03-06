# 数据类型
    Boolean
        true false
        true == 1   return true
        false == 0  return false
        true === 1  return false
        false === 0 return false
        Boolean(undefined) return false
        Boolean(null) return false
        Boolean(!null) return true
        Boolean(0) return false
        Boolean("1") return true
        Boolean("") return true
    Null
    Undefined
    Number
        NaN 非数值
        Number.MAX_VALUE 允许的最大数值
        Number.MIN_VALUE 允许的最小数值
    String
    Symbol
        不可变
    Object
## typeof
    typeof Boolean
        return string
    typeof Null
        return object null为空对象的引用,因此返回object
    typeof Undefined    
        return undefined
    typeof Number    
        return number
    typeof String    
        return string
    typeof Symbol    
        return symbol
    typeof Object   
        return object
        return function 当对象是方法时
## undefined null 区别
    1. undefined 是 未定义
       null      是 定义后未赋值
    2. typeof 不同   
## === 和 == 区别
     == 比较的是值
     === 比较的是值和数据类型
## instanceof 
    obj instanceof Object
        return true
    根据prototype判断构造参数    
## 参考
[Data_structures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)  
[浅谈 javascript 六种数据类型以及特殊注意点](http://wiki.jikexueyuan.com/project/brief-talk-js/on-six-data-type.html)
  
---  
  
# localStorage 与 sessionStorage
## Properties
    lenght 返回keyName数量
## method
    key(number) 返回第number个的keyName
    getItem(keyName) 获取keyName的value(字符串)
    setItem(keyName,value) 设置keyName的value
    removeItem(keyName) 删除keyName
    clear() 清空keyName
## localStorage 与 sessionStorage 区别
    localStorage 页面关闭数据依然保存
    sessionStorage 页面关闭数据销毁(不包括页面重新加载和恢复)
## 参考
> [参考1](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API)    
  
---
  
# String
    length 返回了字符串的长度。
    match() 使用正则表达式与字符串相比较。
    replace() 被用来在正则表达式和字符串直接比较，然后用新的子串来替换被匹配的子串。
    search() 对正则表达式和指定字符串进行匹配搜索，返回第一个出现的匹配项的下标。
    
    repeat() 返回指定重复次数的由元素组成的字符串对象。
        兼容解决方案
        if (!String.prototype.repeat) {
          String.prototype.repeat = function(count) {
            'use strict';
            if (this == null) {
              throw new TypeError('can\'t convert ' + this + ' to object');
            }
            var str = '' + this;
            count = +count;
            if (count != count) {
              count = 0;
            }
            if (count < 0) {
              throw new RangeError('repeat count must be non-negative');
            }
            if (count == Infinity) {
              throw new RangeError('repeat count must be less than infinity');
            }
            count = Math.floor(count);
            if (str.length == 0 || count == 0) {
              return '';
            }
            // 确保 count 是一个 31 位的整数。这样我们就可以使用如下优化的算法。
            // 当前（2014年8月），绝大多数浏览器都不能支持 1 << 28 长的字符串，所以：
            if (str.length * count >= 1 << 28) {
              throw new RangeError('repeat count must not overflow maximum string size');
            }
            var rpt = '';
            for (;;) {
              if ((count & 1) == 1) {
                rpt += str;
              }
              count >>>= 1;
              if (count == 0) {
                break;
              }
              str += str;
            }
            return rpt;
          }
        }
    slice() 摘取一个字符串区域，返回一个新的字符串。
        beginSlice
            从该索引（以 0 为基数）处开始提取原字符串中的字符。
            如果值为负数，会被当做 sourceLength + beginSlice 看待，这里的sourceLength 是字符串的长度 (例如， 如果beginSlice 是 -3 则看作是: sourceLength - 3)
        endSlice
            可选。在该索引（以 0 为基数）处结束提取字符串。
            如果省略该参数，slice会一直提取到字符串末尾。
            如果该参数为负数，则被看作是 sourceLength + endSlice，
            这里的 sourceLength 就是字符串的长度(例如，如果 endSlice 是 -3，则是, sourceLength - 3)。
    substr(start[, length]) 通过指定字符数返回在指定位置开始的字符串中的字符。
        start
            开始提取字符的位置。如果为负值，则被看作 strLength + start，其中 strLength 为字符串的长度（例如，如果 start 为 -3，则被看作 strLength + (-3)）。
        length
            可选。提取的字符数。
        start 是一个字符的索引。首字符的索引为 0，最后一个字符的索引为 字符串的长度减去1。substr 从 start 位置开始提取字符，提取 length 个字符（或直到字符串的末尾）。
        如果 start 为正值，且大于或等于字符串的长度，则 substr 返回一个空字符串。
        如果 start 为负值，则 substr 把它作为从字符串末尾开始的一个字符索引。如果 start 为负值且 abs(start) 大于字符串的长度，则 substr 使用 0 作为开始提取的索引。注意负的 start 参数不被 Microsoft JScript 所支持。
        如果 length 为 0 或负值，则 substr 返回一个空字符串。如果忽略 length，则 substr 提取字符，直到字符串末尾。    
    substring(indexStart[, indexEnd]) 返回在字符串中指定两个下标之间的字符。
        index从0开始
        substring 提取从 indexStart 到 indexEnd（不包括）之间的字符。特别地：
            如果 indexStart 等于 indexEnd，substring 返回一个空字符串。
            如果省略 indexEnd，substring 提取字符一直到字符串末尾。
            如果任一参数小于 0 或为 NaN，则被当作 0。
            如果任一参数大于 stringName.length，则被当作 stringName.length。
        如果 indexStart 大于 indexEnd，则 substring 的执行效果就像两个参数调换了一样。
        例如，str.substring(1, 0) == str.substring(0, 1)。
    split() 通过分离字符串成字串，将字符串对象分割成字符串数组。
    charAt() 返回特定位置的字符。
    charCodeAt() 返回表示给定索引的字符的Unicode的值。
    codePointAt() 返回使用UTF-16编码的给定位置的值的非负整数。
    indexOf() 从字符串对象中返回首个被发现的给定值的索引值，如果没有找到则返回-1。
    lastIndexOf() 从字符串对象中返回最后一个被发现的给定值的索引值，如果没有找到则返回-1。
    concat() 连接两个字符串文本，并返回一个新的字符串。(性能不如赋值操作符(+,+=))
    trim() 一个字符串的两端删除空白字符。
        IE9一下兼容问题
        兼容添加
        if (!String.prototype.trim) {
          String.prototype.trim = function () {
            return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
          };
        }
        在这个上下文中的空白字符是所有的空白字符 (space, tab, no-break space 等) 以及所有行终止符字符（如 LF，CR）。
    trimLeft() 从一个字符串的左端移除空白字符。(兼容性问题)
    trimRight() 从一个字符串的右端移除空白字符。(兼容性问题)
    toLowerCase() 将字符串转换成小写并返回。
    toUpperCase() 将字符串转换成大写并返回。
    toLocaleLowerCase() 根据当前区域设置，将符串中的字符转换成小写。对于大多数语言来说，toLowerCase的返回值是一致的。
        (兼容性问题)
    toLocaleUpperCase() 根据当前区域设置，将字符串中的字符转换成大写，对于大多数语言来说，toUpperCase的返回值是一致的。
        (兼容性问题)
    padEnd() 在当前字符串尾部填充指定的字符串， 直到达到指定的长度。 返回一个新的字符串。
        (兼容性问题):解决方案
        if (!String.prototype.padEnd) {
            String.prototype.padEnd = function padEnd(targetLength,padString) {
                targetLength = targetLength>>0; //floor if number or convert non-number to 0;
                padString = String(padString || ' ');
                if (this.length > targetLength) {
                    return String(this);
                }
                else {
                    targetLength = targetLength-this.length;
                    if (targetLength > padString.length) {
                        padString += padString.repeat(targetLength/padString.length); //append to original to ensure we are longer than needed
                    }
                    return String(this) + padString.slice(0,targetLength);
                }
            };
        }
    padStart() 在当前字符串头部填充指定的字符串， 直到达到指定的长度。 返回一个新的字符串。
        (兼容性问题):解决方案
        if (!String.prototype.padStart) {
            String.prototype.padStart = function padStart(targetLength,padString) {
                targetLength = targetLength>>0; //floor if number or convert non-number to 0;
                padString = String(padString || ' ');
                if (this.length > targetLength) {
                    return String(this);
                }
                else {
                    targetLength = targetLength-this.length;
                    if (targetLength > padString.length) {
                        padString += padString.repeat(targetLength/padString.length); //append to original to ensure we are longer than needed
                    }
                    return padString.slice(0,targetLength) + String(this);
                }
            };
        }
     toString() 返回用字符串表示的特定对象。重写 Object.prototype.toString 方法。
     valueOf() 返回特定对象的原始值。重写 Object.prototype.valueOf 方法。
        该方法通常在 JavaScript 内部被调用，而不是在代码里显示调用。
     normalize() 返回调用字符串值的Unicode标准化形式。
        (兼容性问题)
    localeCompare() 返回一个数字表示是否引用字符串在排序中位于比较字符串的前面，后面，或者二者相同。
        返回一个数字表示是否 引用字符串 在排序中位于 比较字符串 的前面，后面，或者二者相同。
             当 引用字符串 在 比较字符串 前面时返回 -1
             当 引用字符串 在 比较字符串 后面时返回 1
             相同位置时返回 0
        切勿依赖于 -1 或 1 这样特定的返回值。
        不同浏览器之间（以及不同浏览器版本之间） 返回的正负数的值各有不同，因为W3C规范中只要求返回值是正值和负值，而没有规定具体的值。
        一些浏览器可能返回-2或2或其他一些负的、正的值。
    startsWith() 判断字符串的起始位置是否匹配其他字符串中的字符。(IE不兼容)
    endsWith() 判断一个字符串的结尾是否包含其他字符串中的字符。(IE不兼容)
    includes() 判断一个字符串里是否包含其他字符串。(IE不兼容)
## subStr() 与 subString() 与 slice() 区别
    1.subStr 第二个参数为截取长度
    2.subString 第二个参数为结束截取的索引位置
    2.slice 第二个参数为结束截取的索引位置
## 不推荐使用
    String.prototype[@@iterator]() 返回一个新的迭代器对象，该对象遍历字符串值的索引位置，将每个索引值作为字符串值返回。
    quote() 将字符串中包含的特殊字符进行转义(反斜杠),然后在字符串两边各加上一个双引号(")并返回,并不修改原字符串.
    toSource() 返回一个代表对象的源代码。
## 参考    
> [String - JavaScript | MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String)  
      
---    
        
# 1. 正则表达式
## 1.1 语法
    /pattern/flags
    new RegExp(pattern [, flags])
    RegExp(pattern [, flags])
    参数:
        pattern 正则表达式文本
        flags   标志(可组合)
            g 全局匹配,而不是在第一个匹配后停止
            i 忽略大小写
            m 多行匹配            
## 1.2 正则表达式中特殊字符的含义
    字符类别
        .   匹配任意单个字符,行结束符除外(\n \r \u2028 \u2029)
        \d  匹配任意阿拉伯数字
        \t	匹配一个水平制表符（tab）
        \r	匹配一个回车符（carriage return）
        \n	匹配一个换行符（linefeed）
    字符集合
        [xyz] 匹配字符集中的任意一个字符,可以使用连字符 - 指定范围
            [abc] = [a-c]
        [^xyz] 匹配不在字符集中的任意一个字符    
    边界
        ^   匹配每行开头
        $   匹配每行结尾
    分组
    数量词
        *   匹配前面模式0或多次
        +   匹配前面模式1或多次
        {n} 模式连续出现n次匹配
        {n,}模式至少连续出现n次匹配
        {n,m}模式至少连续出现n次，最多连续出现n次匹配
    断言
## 1.3 使用
### 1.3.1 test(str)
    用来查看正则表达式与指定的字符串是否匹配  
    reg为全局的情况下会记录索引值,所以会导致每次结果不一致
        解决方案1:
            reg.lastIndex=0;
        解决方案2:
            关闭全局匹配        
### 1.3.2 exec(str)
    指定字符串中执行一个搜索匹配。返回一个结果数组或 null
## 参考
> [RegExp - JavaScript | MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp)                 
  
---      
                              
# window
## eval()传入的字符串当做 JavaScript 代码进行执行             
    如果字符串表示的是表达式，eval() 会对表达式进行求值。
    如果参数表示一个或多个 JavaScript 语句， 那么 eval() 就会执行这些语句。
    eval 中函数作为字符串被定义需要“（”和“）”作为前缀和后缀
    
---    
  
# 1. Math
## 1.1 random()
    返回一个浮点数
    伪随机数
    范围 [0,1)
## 1.2 round()      
    返回一个数字四舍五入后最接近的整数。  
        Math.round()并不总是舍入到远离0的方向（尤其是在负数的小数部分恰好等于0.5的情况下）。
    Math.round(20.49) 20  
    Math.round(20.5) 21  
    Math.round(-20.5) -20  
    Math.round(-20.51) -21  
## 1.3 ceil() 
    函数返回大于或等于一个给定数字的最小整数
    向上取整
## 1.4 floor()    
    返回小于或等于一个给定数字的最大整数。
    向下取整
## 1.5 abs()     
    返回绝对值
---
# 1. table Dom    
## 1.1 插入行
    insertRow
## 1.2 插入列
    insertCell
## 1.3 删除行
    deleteRow
      
---
      
# 1. Array
## 1.1 sort
    arr.sort(); 字符串的诸个字符的Unicode位点进行排序(只可排序字符串)
    arr.sort(compareFunction(item1,item2)); 使用自定义规则排序
        compareFunction 返回值大于0 item1 位于 item2 后面
        compareFunction 返回值等于0 item1 位于 item2 不变
        compareFunction 返回值小于0 item1 位于 item2 前面    
## 1.2 every
    arr.every(function(callback){});
    测试数组的所有元素是否都通过了指定函数的测试。
    返回true/false
    callback 全部返回true的情况下every函数返回true
## 1.3 filter
    arr.filter(function(item,idnex,array){})
    过滤-返回符合条件的新数组
    创建一个新数组, 其包含通过所提供函数实现的测试的所有元素。 
    函数返回ture,当前item会被添加到新数组中
# 2. Set    
# 3. Map    

# JSON js对象互相转换
    1.JSON对象转JS对象
        1.JSON.parse(jsonStr); 只可解析标准JSON字符串
        2.eval("("+jsonStr+")"); 可解析标准JSON字符串或不标准JSON字符串(不安全)
        3.new Function("", "return" + str1)(); 可解析标准JSON字符串或不标准JSON字符串
    2.JS对象转JSON字符串
        1.JSON.stringify(jsObj);
## 参考        
>    [JSON参考](http://www.cnblogs.com/myjavawork/articles/1979279.html)  
    