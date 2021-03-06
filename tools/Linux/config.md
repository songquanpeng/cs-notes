# Linux 基本配置

## 设置时区
```sh
# 查询时区
timedatectl list-timezones | gerp Shang
# 设置时区为 Asia/Shanghai
sudo timedatectl set-timezone Asia/Shanghai
# 验证设置
timedatectl
date
```

## 会话管理
```sh
# 新建会话
screen -S session_name
# 离开会话
Ctrl + A, D
# 删除当前会话
Ctrl + A, K
# 列出所有会话
screen -ls
# 重新连接会话
screen -r session_name
# 删除指定会话
screen -X -S session_name quit
```