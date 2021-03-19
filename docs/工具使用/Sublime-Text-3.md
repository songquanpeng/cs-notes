# Sublime Text 3
## 安装
```sh
wget -qO - https://download.sublimetext.com/sublimehq-pub.gpg | sudo apt-key add -
sudo apt-get install apt-transport-https
echo "deb https://download.sublimetext.com/ apt/stable/" | sudo tee /etc/apt/sources.list.d/sublime-text.list
sudo apt-get update
sudo apt-get install sublime-text
```

## 配置
```json
{
	"color_scheme": "Packages/Color Scheme - Default/Monokai.sublime-color-scheme",
	"font_face": "Consolas",
	"font_size": 14,
	"save_on_focus_lost": true,
	"theme": "Adaptive.sublime-theme"
}

```

## 插件
1. 安装 Package Control：`Ctrl + Shift + P` ->  `Install Package Control`
2. 安装包：`Ctrl + Shift + P` ->  `Package Control: Install Package` -> 等待列表加载，之后会弹窗
	+ Material Theme：额，我没有启用，可能是我配置错了，感觉都挺丑的。
	+ Terminal：`Ctrl + Shift + T` 在当前目录打开终端。