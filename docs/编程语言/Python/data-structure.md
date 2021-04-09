# Python 数据结构
## 通用
1. 长度：`len(a)`
2. 浅拷贝：`a.copy()` 或者 `copy.copy(a)`
3. 深拷贝：`copy.deepcopy(a)`
4. 成员检测运算符：`e in a` 也可 `e not in a`
5. 下标引用：`a[n]`
6. 清空：`clear()`


## 列表 / 数组
1. 创建	`a = []` 或者 `a = list()`。
2. 切片：`a[m:n]`，左闭右开，即 `a[n]` 不在里面。
3. 排序：`sort(*, key=None, reverse=False)`，原地排序，其中 key 是一个带有一个参数的函数。
4. 迭代：
   1. `for v in [1, 2, 3]`
   2. `for i, value in enumerate(['A', 'B', 'C'])`
5. 列表生成式 / 列表推导式：
   + 单层循环：
    ```python
    [x * x for x in range(1, 11) if x % 2 == 0]
    [4, 16, 36, 64, 100]
    ```
   + 双层循环：
    ```python
    [m + n for m in 'ABC' for n in 'XYZ']
    ['AX', 'AY', 'AZ', 'BX', 'BY', 'BZ', 'CX', 'CY', 'CZ']
    ```

## 元组
1. 不可变序列，通常用于储存异构数据的多项集，也被用于需要同构数据的不可变序列的情况。
2. 创建：
   1. 使用一对圆括号来表示空元组: `()`
   2. 使用一个后缀的逗号来表示单元组: `a,` 或 `(a,)`
   3. 使用以逗号分隔的多个项: `a, b, c` 或 `(a, b, c)`
   4. 使用内置的 `tuple()`: `tuple()` 或 `tuple(iterable)`


## 字典 / 哈希表
1. 获取值：
   1. 如果不存在抛出异常：`value = some_dict[key]`
   2. 如果不存在则返回给定的默认值：`value = some_dict.get(key, default_value)`
2. 设置默认值，这样不存在时会自动创建：
   1. 使用 `setdefault` 方法：`some_dict.setdefault(key, value).some_operations`
   2. 使用 `defaultdict`:
    ```python
    from collections import defaultdict
    list_dict = defaultdict(list)
    list_dict[key].append('可以直接访问，无须检查是否 key 存在')
    ```
3. 只有不可变对象才能作为 key，例如 list 不行，但是 tuple 可以，可以通过 `hash(key)` 来进行判断，可以哈希就可以做为 key。

## 集合
1. 创建：`some_set = set(list)`
2. 支持集合运算：
   1. 交：`a.intersection(b)` 或者 `a & b`
   2. 并：`a.union(b)` 或者 `a | b`

