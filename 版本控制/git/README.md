# 1. git 基本
    git init 创建仓库
    git add fileName 添加文件到暂存区
    git commit -m "message" 提交文件
    git status 查看修改内容
    git checkout fileName 把文件恢复到上一次提交
    git remote add remoteName remoteUrl 添加远程仓库
    git push -u remoteName branchName 推送本地分支到远程仓库
    git ls-files 查看索引库文件列表
    git rm --cached pathName 删除跟踪状态(从索引库删除)保留本地文件
# 2. git 分支
## 2.1 分支
    git branch branchName 创建分支
    git checkout branchName 切换分支
    git checkout -b branchName 创建并切换当为前分支
    git merge otherBranchName 当前分支与otherBranch合并
## 2.2 分支管理
    git branch 查看本地所有分支
    git branch -a 查看本地/远程所有分支
    git branch --merged 查看已经（或尚未）与当前分支合并的分支
    git branch --no-merged 查看尚未合并的工作
    git branch -d beanchName 删除当前分支
    git branch -D beanchName 强制删除当前分支
## 2.3 参考
> [分支的新建与合并](https://git-scm.com/book/zh/v1/Git-%E5%88%86%E6%94%AF-%E5%88%86%E6%94%AF%E7%9A%84%E6%96%B0%E5%BB%BA%E4%B8%8E%E5%90%88%E5%B9%B6)  
> [分支的管理](https://git-scm.com/book/zh/v1/Git-%E5%88%86%E6%94%AF-%E5%88%86%E6%94%AF%E7%9A%84%E7%AE%A1%E7%90%86)  
> [git-ls-files](https://git-scm.com/docs/git-ls-files)  
> [git忽略已经被提交的文件](https://segmentfault.com/q/1010000000430426)

# 1. git config
## 1.1 配置文件作用范围
    --system 针对系统
    --global 针对当前用户
    --local  针对当前git(默认)
### 1.1.1 优先级
    local > global > system
## 1.2 常见命令
### 1.2.1 查看config配置
    --list 全写,仅查看当前规定范围
    -l 简写
### 1.2.2 添加config配置
    --add key value
    key 
        格式必须为 section.name
        例: test.a
    value 
        不可为空
### 1.2.3 修改config配置
### 1.2.4 删除config配置
      
              
             