# flex
    flex子元素float,clear和vertical-align失效
## 容器属性
    flex-direction 主轴方向
        row 默认水平,起点左端
        row-reverse 水平，起点右端
        column 垂直,起点顶端
        column-reverse 垂直，起点底端
    flex-wrap 换行(主轴为垂直,设置换行后只有1列)
        nowrap 不换行 默认
        wrap
            主轴row 左上
            主轴row-reverse 右上
            主轴column 左上
            主轴column-reverse 左下
        wrap-reverse 
            主轴row 左下
            主轴row-reverse 右下
            主轴column 右上
            主轴column-reverse 右下
    flex-flow flex-direction和flex-wrap的缩写属性
    justify-content 主轴对齐方式
        flex-start 起点对齐
        flex-end 终点对齐
        center 居中对齐
        space-between 两端对齐
        space-around 间隔相等
    align-items 副轴对齐方式
        flex-start 起点对齐
        flex-end 终点对齐
        center 居中对齐
        baseline 项目文字第一行基准线对齐
        stretch 默认值,占满高度(如果未设置高度或auto)
    align-content 多轴线对齐方式
        flex-start 起点对齐
        flex-end  终点对齐
        center  居中
        space-bwteen 每个轴线两端对齐
        space-around 每个轴线间隔相等
        stretch 每个轴线平均占满父容器
## 项目属性
    order 排列顺序
        默认 0 越小越靠前
    flex-grow 放大比例
        默认 0 即不放大比例,如果不等于0,则根据剩余空间等比例分配
    flex-shrink 项目缩小比例
        1 默认 空间不足项目缩小
        0 空间不足项目不变
    flex-basis 分配之前占据的项目空间
    flex flex-grow与flex-shrink与flex-basis缩写
        0 1 auto 默认值
    align-self 单个项目对齐方式,覆盖align-items
# 附录单词
    flex
    container
    item
    cross
    axis
    start
    end
    size
    -----------------------------------------------------
    flex-direction
        row
        row-reverse
        column
        column-reverse
    flex-wrap
        nowrap
        wrap
        wrap-reverse
    flex-flow 
    justify-content
        flex-start
        flex-end
        center
        space-between
        space-around
    align-items
        flex-start
        flex-end
        center
        baseline
        stretch
    align-content
        flex-start
        flex-end
        center
        space-between
        space-around
        stretch
    -----------------------------------------------------
    order
    flex-grow
    flex-shrink
    flex-basis
    flex
    align-self