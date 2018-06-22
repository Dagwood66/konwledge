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
## 1.2 常见操作
### 1.2.1 查看config配置
    git config -list
        查看local全部配置
    git config -l 
        简写，查看local全部配置
    git config --get section.key
        查看local单个配置
### 1.2.2 添加config配置
    git config --add section.key value
        section  类似命名空间
        key  
        value    不可为空
    例: git config --get test.demo 1    
### 1.2.3 修改config配置
    git config section.key value
        修改配置(如果不存在则添加)
### 1.2.4 删除config配置
    git config --unset section.key
## 参考
>   [git config 基本操作，增删改查](https://blog.csdn.net/hutaoer06051/article/details/8275069)           

---

# 1. git概念
    加入git管理的文件有3种状态
        已提交(committed)
        已修改(modified)
        已暂存(staged)
        已提交表示数据已经安全的保存在本地数据库中。 
        已修改表示修改了文件，但还没保存到数据库中。 
        已暂存表示对一个已修改文件的当前版本做了标记，使之包含在下次提交的快照中。
    git工作区域
        1.git仓库
            Git 仓库目录是 Git 用来保存项目的元数据和对象数据库的地方。
            从其它计算机克隆仓库时，拷贝的就是这里的数据。
        2.工作目录
            工作目录是对项目的某个版本独立提取出来的内容。 
            这些从 Git 仓库的压缩数据库中提取出来的文件，放在磁盘上供你使用或修改。
        3.暂存区域(索引)
            暂存区域是一个文件，保存了下次将提交的文件列表信息，一般在 Git 仓库目录中。 
            有时候也被称作`‘索引’'，不过一般说法还是叫暂存区域。
    git工作流程
        1.在工作目录中修改文件
        2.暂存文件,将文件的快照放入暂存区域
        3.提交更新，找到暂存区域的文件，将快照永久性存储到git仓库目录。    
## 1.1 git基本配置
    git首次安装后需要设置用户名称,邮件地址
        git config --global user.name value
        git config --global user.email value 
## 1.2 改变git编辑器
    git config core.editor notepad    
## 1.3 git帮助
    git help    
# 参考
>   [Git - Git 基础](https://git-scm.com/book/zh/v2/%E8%B5%B7%E6%AD%A5-Git-%E5%9F%BA%E7%A1%80)

---

# 1. git基础
## 1.1 获取git仓库
    在现有目录中初始化仓库
        git init
    克隆现有仓库
        git clone url
        git clone url alias
            克隆并改变仓库名称
## 1.2 记录每次更新到仓库
    检查当前文件状态
        git status
        git status -s 状态简览
            ?? 新添加未跟踪文件
            A  新添加暂存区文件
            M  修改并放入暂存区
            MM 修改并放入暂存区后再次修改
             M 修改未放入暂存区
    跟踪新文件
        git add .
            跟踪当前根目录下所有文件
        git add fileName
            跟踪当前文件       
        git add folderName
            跟踪当前文件夹下所有文件  
    忽略文件
        1.创建.gitignore文件    
        2.添加匹配规则
        格式规范:
            所有空行或者以 ＃ 开头的行都会被 Git 忽略。  
            可以使用标准的 glob 模式匹配。
            匹配模式可以以（/）开头防止递归。
            匹配模式可以以（/）结尾指定目录。
            要忽略指定模式以外的文件或目录，可以在模式前加上惊叹号（!）取反
        glob模式:
            * 匹配零或多个任意字符
            ? 匹配任意一个字符
            [abc] 匹配任何一个方括号中的字符
            - 匹配范围内字符
                例: [0-9]
            ** 匹配任意中间目录
    查看已暂存和未暂存的修改     
        git diff
            工作目录中当前文件和暂存区域快照之间的差异
        git diff --cached
            查看已暂存的将要添加到下次提交里的内容
        git diff --staged
            查看已暂存的将要添加到下次提交里的内容(v1.6.1)
    提交更新
        git commit -m msg
            msg 提交信息
            提交前记得重新跟踪已修改的文件
        git commit -a -m msg
            跳过使用暂存区域
            把所有已跟踪过的文件暂存起来一并提交,无需重新add
    移除文件
        git rm fileName
            删除工作目录文件。
            下一次提交时，该文件就不再纳入版本管理了。
        git rm -f fileName    
            强制删除删除工作目录文件及已添加缓存区域文件。
            下一次提交时，该文件就不再纳入版本管理了。
        git rm --cached fileName
            删除git仓库文件
            删除git缓存区域文件
            不删除工作目录文件
            常用移除误添加文件
    移动文件
        git mv file_from file_to      
## 1.3 查看提交历史
    git log    
        按提交时间列出所有的更新    
    git log -p
        显示每次提交的内容差异  
    git log -number
        number 数量
        限制显示的数量
    git log --graph   
        显示分支、合并历史
## 1.4 撤销操作
    追加提交
        git commit --amend
            追加提交
            在上一次提交的内容下增加提交    
    取消暂存的文件     
        git reset HEAD fileName
    撤销对文件的修改
        git checkout -- fileName
## 1.5 远程仓库使用        
    查看远程仓库
        git remote
            查看远程仓库
        git remote -v
            查看远程仓库简写及对应的url
        git remote show [remote-name]    
            查看远程仓库详细信息
    添加远程仓库
        git remote add <shortName> <url>
            shortName 远程仓库名称
            url 远程仓库url
    从远程仓库中抓取与拉取
        git fetch [remote-name]
            抓取到本地仓库，不会影响工作目录及缓存区域
    推送到远程仓库                
        git push [remote-name] [branch-name]   
    远程仓库的移除与重命名
        git remote rename <oldName> <newName>
            重命名
        git remote rm <remote-name>
            移除远程仓库
## 1.6 打标签
    列出标签
        git tag
            显示全部标签
        git tag -l "v1.0.0*"
            根据模式查找标签
        git show <version>
            显示标签信息与对应的提交信息
    创建标签
        git tag <tagName>
            轻量标签(不推荐)
        git tag -a <version> -m <memo>    
            version 版本号
            memo 备注信息
            附注标签
        git tag -a <version> <verify>
            version 版本号
            verify 校验和(部分校验和)
    共享标签
        git push <remote-name> <tag-version>
            推送Tag到远程分支
        git push <remote-name> --tags
            推送全部Tag到远程分支
    检出标签        
        git checkout -b [branch-name] [tag-name]
            标签与分支不同，不能直接检出
## 参考
>   [Git - 查看提交历史](https://git-scm.com/book/zh/v2/Git-%E5%9F%BA%E7%A1%80-%E6%9F%A5%E7%9C%8B%E6%8F%90%E4%BA%A4%E5%8E%86%E5%8F%B2)
        