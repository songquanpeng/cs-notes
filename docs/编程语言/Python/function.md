# Python 函数

## 匿名函数 / lambda 函数
```python
plus = lambda x,y : x + y
```

## 偏函数
免去每次都要输入一堆不变的参数的麻烦。

```python
from functools import partial

def add(x, y):
    return x + y

add_five = partial(add, 5)
a = add_five(6)
```

## 生成器
```python
def squares(n=10):
    for i in range(1, n + 1):
        yield i ** 2
```

## 装饰器
装饰器返回了一个函数，其内有我们加入的逻辑，一般会执行原函数（可选）并返回原函数的返回值（可选，我们也可以进行修改后再返回）。

我们是在函数的定义处加入装饰器，实际上我们是将指向原函数的变量修改为执行 wrapper。

不需要参数的装饰器：
```python
import functools

def log(func):
    @functools.wraps(func) # 用于修改函数签名：wrapper.__name__ = func.__name__
    def wrapper(*args, **kw):
        print('before %s() call' % func.__name__)
        res = func(*args, **kw)
        print('after %s() call' % func.__name__)
        return res
    return wrapper

@log
def foo():
    print('Hi, i am foo()!')

foo()
"""
before foo() call
Hi, i am foo()!
after foo() call
"""
```

需要参数的装饰器：
```python
def log(start_text, end_text):
    def decorator(func):
        def wrapper(*args, **kw):
            print('%s %s() call' % (start_text, func.__name__))
            res =  func(*args, **kw)
            print('%s %s() call' % (end_text, func.__name__))
            return res
        return wrapper
    return decorator

@log("start", "end")
def foo():
    print('Hi, i am foo()!')

foo()
"""
start foo() call
Hi, i am foo()!
end foo() call
"""
```

## 内置函数
## 序列相关的内置函数
1. 枚举：`for i, value in enumerate(collection):`
2. 组合：`zipped = zip(seq1, seq2)`
3. 列表化：`list(zipped)`
4. 翻转：`reversed(range(10))`


## 参考
https://www.liaoxuefeng.com/wiki/1016959663602400/1017451662295584