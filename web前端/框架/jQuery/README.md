# dom                      
## 1. element        
    append(content[,content]) 添加元素
        content包含
            HtmlString  字符串形式的html
            Element     dom对象
            Text        html标签
            Array       数组
            $dom        jQuery对象
    empty() 清空当前元素
    remove() 删除当前元素
    remove(select) 删除当前元素后代中符合select的元素            
## 2. attribute  
    $dom.attr(key) 获取当前属性值
    $dom.attr(key,value) 添加/修改当前属性值
    $dom.removeAttr(key) 删除当前属性
## 3. style    
    $dom.css(key) 获取style属性值
    $dom.css(key,value) 添加/修改style属性值
## 4. class  
    $dom.addClass(className) 添加一个或多个Css
    $dom.hasClass(className) 当前元素拥有Css返回true
    $dom.toggleClass(className) 切换Css,如果存在则删除,否则反之
    $dom.removeClass(className) 移除一个或多个Css
## 参考  
>   [jquery-css_style](https://api.jquery.com/css/)  
>   [jquery-css](https://api.jquery.com/category/css/)    

---  
   
# 选择器(Selectors)  
    $(".className") 根据className选择元素
    $("#idName") 根据idName选择元素
    $dom.eq(index) 选择第index个元素   
    $dom.children([selector]) 返回符合selector的直接子元素
    $dom.find([selector]) 返回符合selector的子元素
---        
     
# event     
## 添加事件
    $dom.click(func) 添加单击事件
        func 事件处理函数
## 触发事件
    $dom.click() 触发事件
    $dom.trigger(eventName | event) 触发事件
        eventName 事件名
        event 事件
## 删除事件          
---        
     
# jQuery对象与Dom对象转换
    jQuery对象无法使用DOM对象的任何方法
    DOM对象也不能使用jQuery里的方法.
    jQuery对象转换Dom对象
        1.$dom[index] 通过索引index获取Dom对象
        2.$dom.get(index) 通过jQuery提供的get方法
    Dom对象转换jQuery对象
        1.$(dom) jQuery包装dom对象
          
---       
     
# Dom
## Dom attribute
    $("#domIdName").attr("attrName","value");
    jQueryDom.prevObject 获取上一次获取的jQuery
## 设置Dom的属性
    $("p").attr("key",value);
## 设置Dom的style属性
    $("p").css("color"); 
        获取p的style的color的值 返回rgb()字符串
        返回第一个匹配元素的 CSS 属性值
        当用于返回一个值时，不支持简写的 CSS 属性
        
    $("p").css("color","#fff");
        设置 CSS 属性
        
     $("p").css({"background-color":"yellow","font-size":"200%"});  
        设置多个 CSS 属性
     
     $(selector).css(name,function(index,value))
        使用函数来设置 CSS 属性
        name 属性值
        index 为元素在对象集合中的索引位置
        value 是原先的属性值
## 添加Dom
    append() - 在被选元素的结尾插入内容
    prepend() - 在被选元素的开头插入内容
    after() - 在被选元素之后插入内容
    before() - 在被选元素之前插入内容
## Dom尺寸-Dimensions
    width() 获取或设置元素的宽度(不包含内边距，边框，外边距)
    height() 获取或设置元素的高度(不包含内边距，边框，外边距)
    innerWidth() 获取元素的宽度(不包含边框，外边距)
    innerHeight() 获取元素的高度(不包含边框，外边距)
    outerWidth() 获取元素的宽度(不包含外边距)
    innerHeight() 获取元素的高度(不包含外边距)
    outerWidth(true) 获取元素的宽度(包含内边距，边框，外边距)
    innerHeight(true) 获取元素的高度(包含内边距，边框，外边距)
          
---    
            
# 1. ajax
## 1.1 常见配置
    url 请求地址
    cache 缓存设置
        true,false
    type 请求方式
        默认 get
        get,post,patch,delete
    headers  请求头
        常见请求头
            "Content-Type": "application/json;charset=UTF-8"
    data 请求体
        当type为get时data自动转换为jquey参数
        当type为post时,如添加urlJqurey,需要在url上追加。如data为json,需转换为json字符串发送
## 1.2 使用方式
    方式1:
        $.ajax({
            url: "https://www.baidu.com/",
            type: "get",
        }).then(function(res){
            //请求成功
        });
## 参考
> []()
          