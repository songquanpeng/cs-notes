# NumPy 笔记
## 概念
### 轴 axis
设 axis=i，则 Numpy 沿着第 i 个下标变化的方向进行操作，也就是说，只操作该维度。

例如按垂直方向求和：`A.sum(axis=0)` 。

和 PyTorch 里的 dim 是一回事。

在数学或者物理的概念中，dimensions 被认为是在空间中表示一个点所需要的最少坐标个数。
但是在 Numpy 中，dimensions 指代的是数组的维数，也即数组所需要的的下标个数。

### (n)，(n,) 与 (n,1)
前两者（没有区别）是一个维度为 1 的数组，后者是一个 n*1 的矩阵（维度为 2）。

## 复制相关问题
1. 浅拷贝（浅拷贝只复制指向某个对象的指针，而不复制对象本身，新旧对象还是共享同一块内存）：例如通过切片操作返回的视图都是浅拷贝，虽然会创建新的对象，但是内存共享，例如 `b = a[:]`。要注意，**这点和 Python 的内置列表的表现不同**，Python 列表里这样做是深复制。
2. 深拷贝（深拷贝会另外创造一个一模一样的对象，新对象跟原对象不共享内存）：使用 `copy()` 成员函数即可：`b = a.copy()`。

## NumPy 数组的创建
1. 创建未初始化的数组：`np.empty(shape)` 或者 `np.empty_like(A)`
2. 创建随机初始化的数组（详见下面其主条目）：`np.random.rand(m, n)`
3. 创建指定值的数组：
   1. 全 0：`np.zeros(shape)` 或者 
   2. 全 1：`np.ones(shape)` 或者 
   3. 全 n：`np.full(shape, n)` 或者 `np.full_like(A, n)`
   4. 对角线为 1，其余为 0：`np.eye(m, n)`
   5. 等宽数列：
      1. 定步长：`np.arange(start, end, step)`
      2. 定个数：`np.linspace(start, end, num)`
4. 从数据创建：从 Python 序列类型：`np.array(seq)`

## 随机数生成
设置随机数种子：`np.random.seed(n)`

1. 均匀分布（范围 0~1）：`np.random.rand(m, n)`
2. 正态分布：
   1. 标准正态分布：`np.random.randn(m, n)`
   2. 更多参数控制：`np.random.normal(loc=mean, scale=std, size=(m, n))`

## NumPy 数组的属性
1. 形状：`a.shape`
2. 维度数目：`a.ndim`
3. 元素类型：`a.dtype`
4. 转置：`a.T`

其中类型的改变：`a.astype(np.float64)`

## NumPy 数组的索引与切片
注意，NumPy 里的切片返回的只是一个 view，内存共享。

### 基础切片和索引方法
```python
a[:, :, 1]
a[:2, 1:]
```
用逗号分隔不同维度。

### 布尔索引
```python
data[names == value, 2:]
data[~(names == 'Bob')]
data[(names == 'Bob') | (names == 'Will')]
data[data < 0] = 0
```

### 利用数组来进行索引（fancy indexing）
注意该方法返回的结果是深拷贝过的。

```python
# 原数组
array([[ 0., 0., 0., 0.],
      [ 1., 1., 1., 1.],
      [ 2., 2., 2., 2.],
      [ 3., 3., 3., 3.],
      [ 4., 4., 4., 4.],
      [ 5., 5., 5., 5.],
      [ 6., 6., 6., 6.],
      [ 7., 7., 7., 7.]])

# 传入一个数组
arr[[4, 3, 0, 6]]

array([[ 4., 4., 4., 4.],
      [ 3., 3., 3., 3.],
      [ 0., 0., 0., 0.],
      [ 6., 6., 6., 6.]])

# 原数组
array([[ 0, 1, 2, 3],
      [ 4, 5, 6, 7],
      [ 8, 9, 10, 11],
      [12, 13, 14, 15],
      [16, 17, 18, 19],
      [20, 21, 22, 23],
      [24, 25, 26, 27],
      [28, 29, 30, 31]])

# 传入两个数组
arr[[1, 5, 7, 2], [0, 3, 1, 2]]
# 结果：
array([ 4, 23, 29, 10])

arr[[1, 5, 7, 2]][:, [0, 3, 1, 2]]
# 结果：
array([[ 4, 7, 5, 6],
      [20, 23, 21, 22],
      [28, 31, 29, 30],
      [ 8, 11, 9, 10]])

```

## 线性代数相关操作
1. 按元素相乘：`a * b`
2. 矩阵乘法 / 点积：`np.dot(a, b)` 或 `a.dot(b)` 或 `a @ b`

## 统计相关方法
以下函数都可以通过两种方式调用，以求均值为例：
1. `np.mean(a)`
2. `a.mean()`

常用方法列表：
1. 和：`a.sum()`
2. 乘积：`a.prod()`
3. 累积和（从第一个元素开始逐渐累加）：`a.cumsum()`
4. 累积乘积：`a.cumprod()`
5. 均值：`a.mean()`
6. 标准差：`a.std()`
7. 方差：`a.var()`
8. 最小值：`a.min()`
9. 最大值：`a.max()`
10. 最小值的索引：`a.argmax()`
11. 最大值的索引：`a.argmin()`


## 针对布尔数组的操作
1. 数组中是否有任何 true 项：`bools.any()`
2. 数组中是否都是 true 项：`bools.all()`

## 集合操作
1. 取其中出现的值（剔除重复项）：`np.unique(a)`
2. 交集：`np.intersect1d(x, y)`
3. 并集：`np.union1d(x, y)`
4. 计算 x 中哪些元素 y 中有（返回一个与 x 形状相同的布尔数组）：`np.in1d(x, y)`
5. 计算 x 中哪些元素 y 中没有：`setdiff1d(x, y)`
6. 计算异或：`setxor1d(x, y)`

## NumPy 数组其他操作
1. 交换 axis：`arr.swapaxes(1, 2)`
2. true 时值取 x，false 时取 y：`np.where(condition, x, y)`

## NumPy 数组保存与加载

## 参考
[【Python】numpy 中的 copy 问题详解](https://blog.csdn.net/u010099080/article/details/59111207)