# 模板语法
    插值
        数据绑定  {{}} (以文本解析)
        绑定单次数据 v-once (该节点以外不受影响)
        绑定html v-html
        绑定属性 v-bind 
            对于布尔属性 null undefined false 等为false 
        可以使用表达式    
    指令
        当表达式值发生变化,响应式的作用于DOM
        参数
            指令名称后跟冒号表示
        动态参数
            指令名称后跟冒号且用中括号 v-bind:[attributeName]
                异常状态返回 null
        修饰符
            用 . 指明的特殊后缀，表示指令以特殊的方式绑定            
    缩写    
        v-bind:href === :href
        v-on:click === @click
# 计算属性和侦听器
    计算属性 computed
    侦听器        
# 注意事项
    1. Vue实例创建时data中的属性才是响应式的,之后直接添加的新属性无效
    2. 不要在选项属性或回调上使用箭头函数
    3. 生命周期的this指向调用的Vue实例