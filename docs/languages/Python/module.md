# Python 模块

## 导入其他目录的文件
```python
import sys
sys.path.append("./relative/path")
import my.own.file
```
注意这里的相对路径是相对于工作目录，而非文件所在目录。


## 参考
https://docs.python.org/3/tutorial/modules.html