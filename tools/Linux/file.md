# Linux 文件相关的操作
## 传输文件

`scp -P port usename@ip:/path/to/file ./`

可以直接传文件夹，加一个 -r 就好。 

## 解压缩
``` sh
# 解压缩到指定目录(注意后面有个点)
tar czf name.tar.gz -C /path/to/dir .   
tar xf name.tar.gz -C target_dir 
tar -zcvf /tmp/bin-backup.tar.gz /home/vivek/bin/ 
```

## 删除早于某个时间点的文件
`find /path/to/files* -mtime +5 -exec rm {} \;`

这里的 5 表示 5 天前。 

## 权限设置
```sh
# 更改目录所有者为当前用户
chown -R $USER path
# 使当前用户可执行该文件
chmod u+x ./file
```