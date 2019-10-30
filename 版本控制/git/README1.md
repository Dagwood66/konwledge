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
    根据远程分支创建本地分支并切换
        git checkout -b loaclBranchName remoteBranchName      
    删除分支
        git branch -d branchName                          
## 1.2. 远程分支
    查看分支
        git branch -a
    查看分支依赖关系
        git branch -vv    
    创建分支(本地分支与远程分支同名)
        git push origin branchName
    创建分支
        git push origin localBranchName:remoteBranchName
    添加远程分支
        git remote add origin Url
    本地分支与远程分支建立依赖
        git branch --set-upstream localBranchName remoteBranchName    
    远程分支与本地分支建立依赖
        git push -u origin localBranchName    
    远程分支与本地分支建立依赖
        git push --set-upstream origin localBranchName            
    删除分支
        git push origin --delete branchName
    删除分支依赖
        git remote remove origin      
# 2. 文件
## 2.1 文件状态
    查看文件状态
        git status 
    查看文件差异(当前分支最后一次提交与当前未加入缓存区文件的差异)
        git diff                
    查看文件差异(当前分支最后一次提交与当前加入缓存区文件的差异)
        git diff --staged
## 2.2 临时保存文件
    临时保存本次修改
        git stash
    恢复本次修改    
        git stash pop
## 2.3 检出部分文件
    git checkout branchName/commitNum fileName/folderName
## 2.4 恢复文件(未加入缓存区)
    备： 无法删除新建的文件
    恢复某个文件
        git checkout -- fileName
    恢复全部文件
        git checkout .  
## 2.5 移除缓存区的文件
    移除某个文件
        git reset HEAD fileName
    移除全部文件
        git reset HEAD .
## 2.6 回退到某一次提交
    回退到上一次提交
        git reset --hard commitId
## 2.7 撤销提交(如果没有push)        
    git reset --soft                                    
                            