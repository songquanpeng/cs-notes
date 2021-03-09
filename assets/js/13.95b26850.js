(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{371:function(t,s,a){"use strict";a.r(s);var e=a(45),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"git"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git"}},[t._v("#")]),t._v(" Git")]),t._v(" "),a("h2",{attrs:{id:"教程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#教程"}},[t._v("#")]),t._v(" 教程")]),t._v(" "),a("ol",[a("li",[t._v("精简的教程： https://missing.csail.mit.edu/2020/version-control/")]),t._v(" "),a("li",[t._v("https://learngitbranching.js.org/?locale=zh_CN")]),t._v(" "),a("li",[t._v("一些错误的恢复方法： https://ohshitgit.com/")]),t._v(" "),a("li",[t._v("https://chris.beams.io/posts/git-commit/")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://gitee.com/liaoxuefeng/learn-java/raw/master/teach/git-cheatsheet.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Cheatsheet"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"基本概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本概念"}},[t._v("#")]),t._v(" 基本概念")]),t._v(" "),a("ol",[a("li",[t._v("Git 把文件视为 blob（一组字节），把目录视为 tree。")]),t._v(" "),a("li",[t._v("一个 snapshot 即被 tracked 的最顶层的 tree，每个 commit 对应一个 snapshot。")]),t._v(" "),a("li",[t._v("blob，tree 和 commit 都是 object，可以用其 SHA-1 hash 来代表。")]),t._v(" "),a("li",[t._v("reference 就是这些 hash 的易记的名字，例如 HEAD，Master。")]),t._v(" "),a("li",[t._v("repository 就是一组 objects 和 references。")])]),t._v(" "),a("h2",{attrs:{id:"配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),a("p",[t._v("配置文件位置：")]),t._v(" "),a("ol",[a("li",[a("code",[t._v("~/.gitconfig")]),t._v("：git 的全局配置文件")]),t._v(" "),a("li",[a("code",[t._v(".git/config")]),t._v("：git 的本地配置文件")])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global user.name "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Your Name"')]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global user.email "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"email@example.com"')]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global core.editor "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"code -w"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global http.proxy http://127.0.0.1:7890\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global color.ui "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config core.autocrlf "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" \n")])])]),a("p",[a("code",[t._v(".gitattributes")]),t._v(" 中的设置：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("* text=auto # auto CRLF \n")])])]),a("h2",{attrs:{id:"常用命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用命令"}},[t._v("#")]),t._v(" 常用命令")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 从 Git 中永久删除不小心添加的文件 ")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" filter-branch --tree-filter "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'rm -f target.file'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 更新所有子项目")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" pull --recurse-submodules\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看差异")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("diff")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看工作区里某个文件和版本库里面最新版本的区别")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("diff")]),t._v(" HEAD -- filename\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 回退到上个版本")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset --hard HEAD^\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 回退到上上个版本")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset --hard HEAD^^\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 回退到指定版本")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset --hard "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("hash")]),t._v(" / tag\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 撤销暂存区的修改，重新放回工作区（已 add 但未 commit）")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset HEAD filename\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 将当前工作区存储起来，之后可以恢复 ")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" stash\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看状态")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" status\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 把要提交的更改放到暂存区（stage） ")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" filename\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 把暂存区的所有更改提交到分支")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"commit message"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -am "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"commit message"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 将文件删除并将删除提交到暂存区")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" filename\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" -r "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("dirname")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 推送")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 关联远程分支并推送")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push -u origin master\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 合并分支")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果出现冲突，git 会将冲突的内容复制到当前分支上，且会有标记，删除或修改之后 git commit 即可 ")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" merge barnchname\n")])])]),a("h2",{attrs:{id:"分支管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分支管理"}},[t._v("#")]),t._v(" 分支管理")]),t._v(" "),a("p",[t._v("分支管理原则：")]),t._v(" "),a("ol",[a("li",[t._v("master 分支仅用来发布新版本。")]),t._v(" "),a("li",[t._v("dev 分支上平常提交代码。")]),t._v(" "),a("li",[t._v("每个人有自己的一个分支，平时往 dev 分支上合并。")])]),t._v(" "),a("p",[t._v("常用命令：")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看当前分支名称")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 删除分支")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch -d branch-name\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 强制删除分支（无视分支上未合并的更改）")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch -D branch-name\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 关联本地 dev 分支与远程 origin/dev 分支")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch --set-upstream-to"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("origin/dev dev\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 切换分支")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout branch-name\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 创建并切换分支")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout -b branch-name\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" switch -C branch-name\n")])])]),a("h2",{attrs:{id:"q-a"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q-a"}},[t._v("#")]),t._v(" Q & A")]),t._v(" "),a("h3",{attrs:{id:"保留一个空文件夹但是不保留其内的文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#保留一个空文件夹但是不保留其内的文件"}},[t._v("#")]),t._v(" 保留一个空文件夹但是不保留其内的文件")]),t._v(" "),a("p",[t._v("以 build 文件夹为例：")]),t._v(" "),a("ol",[a("li",[t._v("在其内新建一个 .gitkeep 文件")]),t._v(" "),a("li",[t._v("gitignore 里这样写："),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("/build/*  \n!*.gitkeep \n")])])])])]),t._v(" "),a("p",[t._v("注意不要直接写 /build，这样做将导致 Git 忽视掉整个文件夹，因此不会再进入该文件夹内检查其文件。")]),t._v(" "),a("h3",{attrs:{id:"解决每次推送都要认证的问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决每次推送都要认证的问题"}},[t._v("#")]),t._v(" 解决每次推送都要认证的问题")]),t._v(" "),a("p",[t._v("https://stackoverflow.com/questions/11403407/git-asks-for-username-every-time-i-push")]),t._v(" "),a("p",[t._v("https://www.freecodecamp.org/news/how-to-fix-git-always-asking-for-user-credentials/")]),t._v(" "),a("h2",{attrs:{id:"git-同时-push-到两个远程分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-同时-push-到两个远程分支"}},[t._v("#")]),t._v(" Git 同时 push 到两个远程分支")]),t._v(" "),a("h3",{attrs:{id:"方法一-一个-remote-有两个-url"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法一-一个-remote-有两个-url"}},[t._v("#")]),t._v(" 方法一：一个 remote 有两个 url")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("git remote add origin url_one \ngit remote set-url --add origin url_two \n")])])]),a("p",[t._v("验证："),a("code",[t._v("git remote -v")])]),t._v(" "),a("p",[t._v("单独 push 其中一个 remote：git push git@domain.com:username/project")]),t._v(" "),a("p",[t._v("https://gist.github.com/bjmiller121/f93cd974ff709d2b968f\nhttps://www.jianshu.com/p/dee791260538")]),t._v(" "),a("h3",{attrs:{id:"方法二-多个-remote"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法二-多个-remote"}},[t._v("#")]),t._v(" 方法二：多个 remote")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("git remote add github git@github.com:username/project \ngit remote add gitee git@gitee.com:username/project \ngit push github master\ngit push gitee master \n")])])]),a("p",[t._v("https://www.liaoxuefeng.com/wiki/896043488029600/1163625339727712")])])}),[],!1,null,null,null);s.default=n.exports}}]);