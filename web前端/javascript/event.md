# event
## 创建事件
## 触发事件
## 注册事件处理函数
    方案1:
        dom.addEventListener("事件名",事件处理函数); 
            事件名不带on前缀 
            重复调用不覆盖上一次事件处理函数
        dom.removeEventListener("事件名",事件处理函数); 
            移除事件注册
            事件处理函数为匿名函数无法移除
        IE8以下 
            dom.attachEvent("事件名",事件处理函数); 
                事件名带前缀
    方案2: Html属性注册
        <button onclick="alert('hello world!')"></button>
    方案3: Dom属性注册
        dom.onclick=function(event){};
            重复调用会覆盖上一次事件处理函数
## 阻止事件
    event.preventDefault(); 
        取消浏览器当前事件的默认行为 不阻止事件冒泡
    event.stopPropagation(); 
        阻止事件冒泡
## 参考
> [Event - Web API 接口 | MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/Event)