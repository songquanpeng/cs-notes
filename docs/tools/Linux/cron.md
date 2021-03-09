# Linux 定时任务
## 概述
在线编辑工具： https://crontab.guru/ 

`minute hour day(month) month day(week) `

基础命令：
1. 编辑：`crontab -e`
2. 列出：`contab -l`

规则： 
1. * 取值范围内的所有数字
2. / 每过多少个数字 
3. - 从 X 到 Z 
4. ，散列数字 
 

## 服务管理
注意 Ubuntu 16.04 下服务名称为 cron，一般无需我们设置。 
```sh
sudo service crond start     #启动服务 
sudo service crond stop      #关闭服务 
sudo service crond restart   #重启服务 
sudo service crond reload    #重新载入配置 
sudo service crond status    #查看服务状态
```

## 注意 
1. 工作目录是用户的家目录。 
2. 脚本运行时的环境和我们在 shell 中运行时的可能不太一样，例如 python，此外 conda 可能也没办法直接用，解决办法参考此处： https://unix.stackexchange.com/questions/454957/cron-job-to-run-under-conda-virtual-environment 
3. 运行失败 Ubuntu 会发邮件。 