# 进程守护工具

## pm2
不限于 Node.js 应用，二进制应用也是可以的。

```sh
# 自动检测环境，输出合适的命令，执行输出的命令后可以配置 pm2 自动启动
pm2 startup
# 保存当前正在运行的应用以便将来重启 pm2 时自动重启
pm2 save
# 重启之前保存的应用
pm2 resurrect
# 启动应用，并传递其命令行参数
pm2 start ./app --name service-name -- arg1 arg2 arg3
# 输出指定应用的日志
pm2 logs id|name
```

参考：
1. https://pm2.keymetrics.io/docs/usage/startup/
2. https://pm2.keymetrics.io/docs/usage/process-management/