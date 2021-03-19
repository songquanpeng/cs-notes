# 知识积累
## sudo echo sth > /sys/sth 

上面的命令会报访问禁止的错误，因为 echo 本身是 shell 中内置命令，这里的 sudo 是无效的，shell 本身依然没有管理员权限。 