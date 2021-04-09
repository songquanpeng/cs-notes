# Python 输入输出
## 标准输入输出
输入：`input("prompt")`

输出：`print(object(s), sep='', end='\n', file="filename", flush=False)`

读取标准输入：`sys.stdin.read()`

### 格式化输出输出
f-string 要求 python 版本大于 3.6，格式为 `f"***{var}***"`。

常用例子：
1. 保留小数点后两位：`{:.2f}`。
2. 百分比格式：`{:.2%}`。
3. 右对齐，填充 0：`{:0>10}`。

## 文件输入输出
### 文件操作模式
|模式|描述|
|:--|:--|
|r|只读|
|w|只写，存在同名文件的话将覆盖该文件|
|x|只写，存在同名文件的话将抛出异常|
|a|追加内容，不存在的话将创建|
|r+|读写|
|b|二进制模式，配合其他模式使用，如：'rb' 或者 'wb'|
|t|文本模式，配合其他模式使用，默认选项|

### 二进制文件处理
使用 struct 模块。
最主要的三个函数：
1. pack(fmt, v1, v2, ...)：按照给定的格式，把数据封装成字符串（实际上是类似于 c 结构体的字节流）。
2. unpack(fmt, string)：按照给定的格式解析字节流 string，返回解析出来的 tuple。
3. calcsize(fmt)：计算给定的格式占用多少字节的内存。

小端序和大端序：按照存储地址从低到高排序的字节中，如果最低有效字节（类似于最低有效位）在最高有效字节的前面，则称小端序；反之则称大端序。

### 通用文件输入输出
输入：
1. 读取 n 个字符 / n 个字节，未给定则读取所有：`f.read(n)`
2. 返回文件下一行：`f.next()`
3. 读取整行，包括 `\n`：`f.readline(n)`
4. 读取所有行，返回为一个列表：`f.readlines()`

输出：
1. 写入：f.write(str)
2. 写入行，需要自行换行：f.writelines(str_list)
3. StringIO, BytesIO：
    ```python
    from io import StringIO
    from io import BytesIO
    # 创建对象
    f = StringIO()
    f = BytesIO()
    # 获取值
    f.getvalue()
    f.read()
    ```

### JSON 文件输入输出
1. 编码（返回一个 string）：json.dumps(list or dict, sort_keys=True, indent=4, separators=(",",":"))
2. 解码：list or dict = json.loads(json_str)

### 简单的键值存储
```python
with shelve.open("filename") as db:
	db['key'] = 'value'
shelve.sync()
shelve.close()
```

## 参考
1. https://www.cnblogs.com/gala/archive/2011/09/22/2184801.html
2. http://www.runoob.com/python/att-string-format.html
3. https://zhuanlan.zhihu.com/p/39128162