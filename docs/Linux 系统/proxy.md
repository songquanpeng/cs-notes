# Linux 下代理的设置

## Clash 的配置
1. 设置自动后台启动：https://github.com/Dreamacro/clash/wiki/clash-as-a-daemon  
2. clash 本身提供了 rest api 接口，因此可以使用一些 dashboard 去管理，例如： 
	+ https://github.com/haishanh/yacd  
	+ https://github.com/Dreamacro/clash-dashboard
3. 教程：https://wmc1999.top/2020/08/21/linux-shi-yong-clash-dai-li/  
4. 也可试一下 GUI 版本： https://github.com/SpongeNobody/Clashy    

我这里部署的一个版本：[https://clash.justsong.cn/](https://clash.justsong.cn/)

## 设置环境变量
```sh
vi ~/.bashrc
export ALL_PROXY=socks5://127.0.0.1:7890 
export http_proxy=http://127.0.0.1:7890
export https_proxy=http://127.0.0.1:7890
```

Gnome 下代理的设置：`Settings -> Network -> Network Proxy -> Manual`

## APT 设置代理
```sh
sudo touch /etc/apt/apt.conf.d/proxy.conf
echo "Acquire::http::Proxy "http://localhost:7890/";" | sudo tee -a /etc/apt/apt.conf.d/proxy.conf
echo "Acquire::https::Proxy "http://localhost:7890/";" | sudo tee -a /etc/apt/apt.conf.d/proxy.conf
```