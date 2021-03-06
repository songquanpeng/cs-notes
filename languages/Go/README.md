# 概述
## 推荐教程
+ [ ] Go 语言编程
+ [ ] [Go 入门指南](https://github.com/unknwon/the-way-to-go_ZH_CN/blob/master/eBook/directory.md)
+ [ ] [Go 语言圣经](https://books.studygolang.com/gopl-zh/)
+ [ ] [Go 语言高级编程](https://chai2010.cn/advanced-go-programming-book/)
+ [ ] [Go 命令教程](https://wiki.jikexueyuan.com/project/go-command-tutorial/)
+ [ ] [Go 语言原本](https://golang.design/under-the-hood/)
+ [ ] Go 程序设计语言
+ [ ] Go 语言实战
+ [ ] Go 并发编程实战
+ [ ] [Go 语言设计与实现](https://draveness.me/golang/)

## Go 的特点
1. 协程。 
2. 函数多返回值。 
3. 非侵入性的接口。 
4. 自动垃圾回收。 
5. 内置 map，动态数组类型。

## Go 安装配置
1. 下载安装包： 
+ https://golang.org/doc/install 
+ https://golang.google.cn/dl/ 
2. 解压缩：`tar -C /usr/local -xzf go1.15.5.linux-amd64.tar.gz`
3. 添加到 PATH 环境变量：`export PATH=$PATH:/usr/local/go/bin/`，可以添加到以下文件的结尾：`~/.profile`
4. 设置代理：`go env -w GOPROXY=https://goproxy.cn,direct`
5. 对于低版本的 Go，启用 Go Module：`go env -w GO111MODULE=on`