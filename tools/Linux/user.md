# Linux 用户管理
## 创建用户
```
sudo useradd -m -s /bin/bash ubuntu # 创建用户以及家目录，并设置 shell 为 bash（默认为 sh） 
passwd ubuntu # 为 ubuntu 设置密码 
su ubuntu # 切换至 ubuntu 
chsh ubuntu -s /bin/bash # 更改 ubuntu 的默认 shell 
usermod -aG sudo ubuntu # 将 ubuntu 添加到 sudo 用户组 
```

## 管理用户
|命令|作用|
|:--|:--|
|who|查看当前登录用户 |
|su|切换用户|
|useradd|仅创建用户（未设置密码，未为用户创建家目录）|
|adduser|新建用户|
|deluser|删除用户|
|passwd|修改用户密码|
|groups|查看用户所属的组|
|usermod|为用户添加用户组|

