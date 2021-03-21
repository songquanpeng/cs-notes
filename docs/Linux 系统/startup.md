# 开机启动
## Gnome
有一个应用 `Startup Application Preference`，在里面添加即可。

## systemctl
配置文件地址：`/etc/systemd/system/name.service`
```ini
[Unit]
Description=My Service Daemon

[Service]
ExecStart=command here

[Install]
WantedBy=multi-user.target
```
```sh
# 设置开机启动
systemctl enable name
# 立刻启动
systemctl start name
# 查看状态
systemctl status name
```

## pm2
`pm2 start command`

## 参考
https://github.com/Dreamacro/clash/wiki/clash-as-a-daemon