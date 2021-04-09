# Python 异常处理
## 抛出异常
```python
raise Exception("I just want to raise a exception...")
```

## 捕获异常
```python
try:
    pass
except OSError as err:
    print("OS error: {0}".format(err))
except (TypeError, ValueError):
    print("Failed")
else:
    print("Succeeded")
finally:
    pass
```

注意：
try finally 语句中 try 中执行 return 后 finally 子句依然会执行，函数的返回值由最后执行的 return 语句决定。