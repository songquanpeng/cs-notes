# 常用命令

## 任务执行相关
```sh
# 10 分钟后执行某个命令
sleep 10m && a_command_will_run
```

## 网络相关
```sh
# 查看本机网络
ifconfig
# 查看局域网下所有 ip 和 mac 地址（arp 表）
arp -a
```

## 磁盘管理相关
```sh
# 通过网络复制磁盘
# 接收端先运行以下命令
nc -l -p xxx | dd of=/dev/sdb
# 发送端之后运行以下命令
dd if=/dev/sda | nc x.x.x.x xxx

# 列出所有分区
sudo fdisk -l
# 取消挂载 U 盘
diskutil unmount /dev/sdb
# 烧录 iso 镜像，之后运行 sync 同步磁盘缓存
dd bs=4M if=~/xxx.iso of=/dev/sdb && sync
# 弹出 U　盘
diskutil eject /dev/sdb
```