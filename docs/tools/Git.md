# Git
## 教程 
1. 精简的教程： https://missing.csail.mit.edu/2020/version-control/ 
2. https://learngitbranching.js.org/?locale=zh_CN 
3. 一些错误的恢复方法： https://ohshitgit.com/ 
4. https://chris.beams.io/posts/git-commit/ 
5. [Cheatsheet](https://gitee.com/liaoxuefeng/learn-java/raw/master/teach/git-cheatsheet.pdf )


## 基本概念 
1. Git 把文件视为 blob（一组字节），把目录视为 tree。
2. 一个 snapshot 即被 tracked 的最顶层的 tree，每个 commit 对应一个 snapshot。 
3. blob，tree 和 commit 都是 object，可以用其 SHA-1 hash 来代表。 
4. reference 就是这些 hash 的易记的名字，例如 HEAD，Master。 
5. repository 就是一组 objects 和 references。

## 配置
配置文件位置：
1. `~/.gitconfig`：git 的全局配置文件 
2. `.git/config`：git 的本地配置文件 

```sh
git config --global user.name "Your Name" 
git config --global user.email "email@example.com" 
# 使用 VS Code
git config --global core.editor "code -w"
# 使用 Sublime Text
git config --global core.editor "subl -n -w"
git config credential.helper store
git config --global http.proxy http://127.0.0.1:7890
git config --global color.ui true 
git config core.autocrlf true 
```

`.gitattributes` 中的设置：
```
* text=auto # auto CRLF 
```


## 常用命令
```sh
# 从 Git 中永久删除不小心添加的文件 
git filter-branch --tree-filter 'rm -f target.file'
# 更新所有子项目
git pull --recurse-submodules
# 查看差异
git diff
# 查看工作区里某个文件和版本库里面最新版本的区别
git diff HEAD -- filename
# 回退到上个版本
git reset --hard HEAD^
# 回退到上上个版本
git reset --hard HEAD^^
# 回退到指定版本
git reset --hard hash / tag
# 撤销暂存区的修改，重新放回工作区（已 add 但未 commit）
git reset HEAD filename
# 将当前工作区存储起来，之后可以恢复 
git stash
# 查看状态
git status
# 把要提交的更改放到暂存区（stage） 
git add .
git add filename
# 把暂存区的所有更改提交到分支
git commit
git commit -m "commit message"
git commit -am "commit message"
# 将文件删除并将删除提交到暂存区
git rm filename
git rm -r dirname
# 推送
git push
# 关联远程分支并推送
git push -u origin master
# 合并分支
# 如果出现冲突，git 会将冲突的内容复制到当前分支上，且会有标记，删除或修改之后 git commit 即可 
git merge barnchname
```

## 分支管理
分支管理原则：
1. master 分支仅用来发布新版本。
2. dev 分支上平常提交代码。
3. 每个人有自己的一个分支，平时往 dev 分支上合并。

常用命令：
``` sh
# 查看当前分支名称
git branch
# 删除分支
git branch -d branch-name
# 强制删除分支（无视分支上未合并的更改）
git branch -D branch-name
# 关联本地 dev 分支与远程 origin/dev 分支
git branch --set-upstream-to=origin/dev dev
# 切换分支
git checkout branch-name
# 创建并切换分支
git checkout -b branch-name
git switch -C branch-name
```

## Q & A
### 保留一个空文件夹但是不保留其内的文件 
以 build 文件夹为例：
1. 在其内新建一个 .gitkeep 文件
2. gitignore 里这样写： 
    ```
    /build/*  
    !*.gitkeep 
    ```
注意不要直接写 /build，这样做将导致 Git 忽视掉整个文件夹，因此不会再进入该文件夹内检查其文件。 

### 解决每次推送都要认证的问题
https://stackoverflow.com/questions/11403407/git-asks-for-username-every-time-i-push 

https://www.freecodecamp.org/news/how-to-fix-git-always-asking-for-user-credentials/ 

## Git 同时 push 到两个远程分支
### 方法一：一个 remote 有两个 url 
```
git remote add origin url_one 
git remote set-url --add origin url_two 
```

验证：`git remote -v `

单独 push 其中一个 remote：git push git@domain.com:username/project 

https://gist.github.com/bjmiller121/f93cd974ff709d2b968f 
https://www.jianshu.com/p/dee791260538 


### 方法二：多个 remote
```
git remote add github git@github.com:username/project 
git remote add gitee git@gitee.com:username/project 
git push github master
git push gitee master 
```

https://www.liaoxuefeng.com/wiki/896043488029600/1163625339727712 
