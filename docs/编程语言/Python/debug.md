# Python 调试
## pdb

## 断言
```python
assert condition, "message"
```

注意：
1. 断言为假则抛出 `AssertionError`。
2. 启动 Python 解释器时可以用 -O 参数来关闭 assert
3. 判断变量的类型：isinstance(var, int)

## 断点
breakpoint() 函数