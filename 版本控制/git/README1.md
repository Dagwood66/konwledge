# 1. 分支
## 1.1. 本地分支
    查看分支
        git branch
    创建分支
        git branch branchName
    切换分支
        git checkout branchName    
    创建并切换分支
        git checkout -b branchName  
    删除分支
        git branch -d branchName                      
## 1.2. 远程分支
    查看分支
        git branch -a
    创建分支
        git push origin branchName
    删除分支
        git push origin --delete branchName
    删除远程分支依赖
        git remote remove origin      
                