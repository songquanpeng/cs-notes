# Pandas 数据结构
## 概述

```python
import pandas as pd
from pandas import Series, DataFrame
```

## Series
Series 是一种一维的类似数组的数据结构，其包含了一系列值，并有一个与之关联的数据标签，即其索引（index）。
可以在构造时传入一个 index 数组来手动指定 index。
由于 index 不只限于数值类型，因此 Series 也可以当成一个固定尺寸的有序字典来用。


### Series 的构造
1. 传入列表：`s = pd.Series([4, 7, -5, 3], index=['d', 'b', 'a', 'c'])`
2. 传入字典：`s = pd.Series(a_dict, index=[...])`

### Series 的属性
```python
s = pd.Series([1, 2, 3, 4])
s.values
# array([1, 2, 3, 4], dtype=int64)
s.index
# RangeIndex(start=0, stop=4, step=1)
```

Series 和其索引都分别有一个 name 属性：
```python
obj4.name = 'population'
obj4.index.name = 'state'
```

### Series 相关的函数
```python
pd.isnull(obj4)
obj4.isnull()
pd.notnull(obj4)
```

## DataFrame
1. DataFrame 表示了一个长方形的表格，其包含了一组有序的列，每一列可以有一个不同的数据类型。
2. DataFrame 有一个行索引和一个列索引。
3. DataFrame 可被认为是一组共享 index 的 Series 的字典。
4. 可以通过直接赋值来修改其属性。
5. 直接 `df['new_col'] = ...` 即可创建新的列，使用 del 进行删除。

### DataFrame 相关的属性
```python
# 所有列的名字列表
df.columns
# 某个列
df.col_name
# 使用 loc 属性
df.loc[]
# 交换行和列
df.T
# 名字属性
df.index.name = 'year'
df.columns.name = 'state'
# 获取索引
df.index
# 获取其值
df.values
```

### DataFrame 相关的函数
```python
df.head()

```