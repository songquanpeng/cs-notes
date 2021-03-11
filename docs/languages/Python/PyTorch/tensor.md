# PyTorch tensor 操作
## 概述
`torch.Tensor` 与 NumPy 的多维数组非常类似，区别在于：
1. GPU 计算。
2. 自动求梯度。

## tensor 的创建
1. 创建未初始化的 tensor：`torch.empty(*sizes)`
2. 创建随机初始化的 tensor：
   1. 均匀分布（从区间 [0, 1) 中均匀取样）：`torch.rand(*sizes)`
   2. 标准正态分布（均值为 0，方差为 1）：`torch.randn(*sizes)`
   3. 离散正态分布（可以分别为每个量指定 mean 和 std）：
      1. `torch.normal(mean, std, sizes)`
      2. `torch.normal(means, stds)`
      3. `torch.normal(means, std)`
      4. `torch.normal(mean, stds)`

3. 创建指定值的 tensor：
   1. 全 0：`torch.zeros(x, y)`
   2. 全 1：`torch.ones(x, y)`
   3. 全 n：`torch.ones(x, y) * n`
   4. 对角线为 1，其余为 0：`torch.eye(x, y)`
   5. 等宽数列：
      1. 定步长：`torch.arange(s, e, step)`
      2. 定个数：`torch.linspace(s, e, steps)`
4. 从数据创建：
   1. 从 Python 列表或 Numpy 数组：`torch.tensor([a, b, c])`
   2. 从已有的 tensor：
      1. `x = x.new_ones()`

创建时可指定：
1. 数据类型：`dtype=torch.float`，具体参见[官网上的类型列表](https://pytorch.org/docs/stable/tensors.html)。
2. 设备：`device='cpu'` 或者 `device=torch.device('cuda')`：
   1. CPU：`torch.device('cpu')`
   2. 当前 cuda 设备：`torch.device('cuda')`
   3. 指定 cuda 设备：`torch.device('cuda:0')`

## tensor 的操作
### 获取 tensor 的属性
获取形状：
1. `x.size()`
2. `x.shape`
返回值为形状元组。

获取维度：`x.dim()`，返回值为 int。

### 算数操作

所有后面带有下划线的函数君表示该操作直接作用于当前矩阵。