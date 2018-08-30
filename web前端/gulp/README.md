# 错误处理
## 任务处理错误导致gulp进程关闭
    方案1:(原生)
        pipe添加错误监听,this.emit("end")结束当前task
        
        on("error",function(e){
            this.emit("end");
        })
    方案2:(gulp-plumber)
        pipe(gulpPlumber())
## 参考
[Gulp 错误管理](https://csspod.com/error-management-in-gulp/)    
[gulp-plumber](https://www.npmjs.com/package/gulp-plumber)
## watch导致cpu占用过高
    gulp.watch(glob[, opts], tasks)
        opts watch监听配置
            interval 监听间隔 默认100ms
    方案1:
        加大监听间隔            
# plugins
---
## gulp-rev-collector
    注意事项: 所替换的路径必须是相对路径且从根目录开始