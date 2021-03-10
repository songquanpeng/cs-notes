# VS Code 使用笔记
## 注意
在 Ubuntu 下安装 VS Code 有两种方法：
1. 下载 deb 包然后通过 dpkg 安装，缺点是没办法自动更新。
2. 使用 snap 安装或者通过 Ubuntu App Center 安装，缺点是不支持中文输入法。

如果你安装了 snap 版本的 VS Code，再去打开 deb 版本的 VS Code（`1.54.1 f30a9b x64`），你会发现其一直闪退，删了所有配置文件和插件都不行，重启电脑也不行。
原因参见[此处](https://github.com/microsoft/vscode/issues/116690#issuecomment-791064392)，解决方法就是打开 keyring，从 login entry 中把 VS Code 的删掉，之后就可以正常使用了！

这鬼问题折腾了我好久，淦！