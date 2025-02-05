# PyTorch Tensor
## 概述
`torch.Tensor` 与 NumPy 的多维数组非常类似，区别在于：
1. GPU 计算。
2. 自动求梯度。

## Tensor 的创建
1. 创建未初始化的 Tensor：`torch.empty(*sizes)`
2. 创建随机初始化的 Tensor：
   1. 均匀分布（从区间 [0, 1) 中均匀取样）：`torch.rand(*sizes)`
   2. 标准正态分布（均值为 0，方差为 1）：`torch.randn(*sizes)`
   3. 离散正态分布（可以分别为每个量指定 mean 和 std）：
      1. `torch.normal(mean, std, sizes)`
      2. `torch.normal(means, stds)`
      3. `torch.normal(means, std)`
      4. `torch.normal(mean, stds)`

3. 创建指定值的 Tensor：
   1. 全 0：`torch.zeros(x, y)`
   2. 全 1：`torch.ones(x, y)`
   3. 全 n：`torch.ones(x, y) * n`
   4. 对角线为 1，其余为 0：`torch.eye(x, y)`
   5. 等宽数列：
      1. 定步长：`torch.arange(s, e, step)`
      2. 定个数：`torch.linspace(s, e, steps)`
4. 从数据创建：
   1. 从 Python 列表或 Numpy 数组：`torch.Tensor([a, b, c])`
   2. 从已有的 Tensor：
      1. `x = x.new_ones()`

创建时可指定：
1. 数据类型：`dtype=torch.float`，具体参见[官网上的类型列表](https://pytorch.org/docs/stable/Tensors.html)。
2. 是否需要梯度更新：`requires_grad=True`
3. 设备：`device='cpu'` 或者 `device=torch.device('cuda')`。

也可之后在设备间移动 Tensor：`x = x.to(device)`   

注意，这种直接创建的 tensor 为叶子节点：`x.is_leaf = True`。


## Tensor 的读取与存储
与模型的读取与存储一样：
1. 读取：`x = torch.load('x.pt')`
2. 存储：`torch.save(x, 'x.pt')`

可以存储一个字典：
```python
torch.save({'x': x, 'y': y}, 'xy_dict.pt')
```

看到这里是不是发现和模型的保存（`torch.save(model.state_dict())` ）是一回事。

## Tensor 的操作
### 获取 Tensor 的属性
获取形状：
1. `x.size()`
2. `x.shape`
返回值为形状元组。

获取维度：`x.dim()`，返回值为 int。

可直接操作的属性：
1. `x.data` ：该 Tensor 的数据，对其的操作不会被自动求导机制记录。
2. `x.grad`：梯度信息。

### 算数操作
一般而言，有以下形式：
1. 用 Python 的运算符：
   1. `y = x + y`（开辟了新内存，并将 y 指向新内存）
   2. `y[:] = x + y`（没有开辟新内存）
2. 用 PyTorch 提供的函数：
   1. `y = torch.add(x, y)`（开辟了新内存，并将 y 指向新内存）
   2. `torch.add(x, y, out=y)`（没有开辟新内存）
   3. `y.add_(x)`（没有开辟新内存）

注意所有后面带有下划线的函数均表示该操作直接作用于当前矩阵（inplace）。

### 索引操作
类似 NumPy。
例子：
取 x 的第一行的元素：`y = x[0, :]`。

注意： x 和 y 是共享内存的。

### 改变形状
`y = x.view(sizes*)`

注意：x 和 y 同样是共享内存的，如果不想共享内存，则 `y = x.clone().view(sizes*)`。

可以有一个值为 -1，这样 PyTorch 会自动推断该值。

例子：
1. 将图片输入全连接层：`linear(x.view(x.shape[0], -1))`，shape 的第一个值是 batch size。

### 禁用梯度计算
可以节省大量内存空间，因为省去了没有用的中间变量的保存。

可以使用 with 方式：
```python
with torch.no_grad():
   y = x * 2
```
也可以使用装饰器的方式：

```python
@torch.no_grad()
def foo():
   pass
```


### 其他操作
|操作|描述|
|:--|:--|
|`x.clone()` 或 `torch.clone(x)`|拷贝 x 的一个副本，注意该操作会被记录在计算图中，梯度回传到副本时也会传到源 Tensor|
|`x.detach()`|返回一个新的 Tensor，其从当前计算图中剥离，但是注意内存是共享的，如果对其进行修改将出发错误|
|`x.detach_()`|将当前 Tensor 从计算图中剥离，使其成为叶子节点，注意不能对 view 使用该函数|
|`x.requires_grad_(requires_grad=True)`|设置 x 为需要梯度信息|
|`x.item()`|x 必须为 0 维度，返回其值，类型为 Python 内置类型|
|`x.float()`|返回一个新的指定类型的张量|
|`x.mean()`|返回一个张量，其为 x 的均值，注意 x 必须是浮点类型|
|`x.gather(dim, index)`||
|`x.argmax(dim)`|返回指定维度上最大值的索引|
|`x.numpy()`|返回张量 x 的 numpy 数据形式，注意内存是共享的|
|`x.sum(dim)`|在指定维度求和，如果不给定维度，则返回所有元素的值的和|

|操作|描述|
|:--|:--|
|`torch.cat((a, b, c), dim=d)`|在维度 d 上把这三个张量拼接起来|

重点详解：
`x.scatter_(dim, index, src)`

根据索引 index，在维度 dim 上把 x 的值更新为 src 上的对应值。
例子：生成 One Hot 向量

```python
res = torch.zeros(x.shape[0], n_class, dtype=dtype, device=x.device)
res.scatter_(1, x.view(-1, 1), 1)
```

1. [官方文档](https://pytorch.org/docs/master/tensors.html#torch.Tensor.scatter_)
2. [一个教程](https://yuyangyy.medium.com/understand-torch-scatter-b0fd6275331c)

## 梯度的计算
1. Tensor 的属性 `requires_grad` 若为 `True`，则 PyTorch 将追踪其上的操作。
2. 通过 inpalce 函数 `x.requires_grad_(boolean)` 可设置该属性。
3. 使用 `with torch.no_grad()` 可禁用一整块的代码中的 Tensor 中的梯度计算。
   > + `model.eval()` will notify all your layers that you are in eval mode, that way, batchnorm or dropout layers will work in eval mode instead of training mode. 
   > + `torch.no_grad()` impacts the autograd engine and deactivate it. It will reduce memory usage and speed up computations but you won’t be able to backprop.
4. Tensor 的 `grad_fn` 属性记录了该 Tensor 是由什么操作产生的。
5. 之后调用 `x.backward()` 进行反向传播，梯度将记录在 Tensor 的 `grad` 属性中。

一般流程：
1. `optimizer.zero_grad()`：清空梯度，或者遍历所有参数，通过 `param.grad.data.zero_()` 手动清空。
2. `loss.backward()`：反向传播，计算新的梯度。
3. `optimizer.step()`：根据梯度对 Tensor（参数）进行更新。

注意，对于标量，直接调用 `x.backward()` 即可，否则需要传入一个同形状的权重：`x.backward(w)`。
这样做的目的是避免 Tensor 对 Tensor 求导，实际上可以理解为 `l = torch.sum(x*w)`，具体参见[这里的解释](https://zhuanlan.zhihu.com/p/29923090)。

一般情况下最终的 loss 都是标量。


## Tensor 的维度
我们以求和为例，首先创建一个形状为 `(2, 3, 4, 5)` 的张量：
```python
a = torch.randn(2,3,4,5)
tensor([[[[-1.2746e+00,  9.4579e-01,  1.6964e+00,  1.7108e+00, -5.2078e-01],
          [ 1.2146e+00, -9.6105e-01,  5.4967e-01,  7.6222e-02, -1.3477e+00],
          [-9.2304e-02,  1.1924e+00,  9.0743e-01, -9.2746e-02, -1.2672e-01],
          [-3.8137e-01, -5.0026e-01, -9.6745e-02,  2.2675e+00,  9.3933e-01]],

         [[ 2.1660e+00, -7.8956e-01,  3.1534e-01, -1.3994e+00, -6.9351e-01],
          [ 1.2564e+00,  3.8183e-01,  1.4704e+00, -1.9463e+00,  1.8061e-01],
          [ 1.1230e+00,  5.9794e-01, -1.9380e+00, -1.5386e-01,  6.1002e-01],
          [ 8.6600e-01, -5.4200e-01,  5.3109e-01, -3.3880e-01,  1.0513e+00]],

         [[ 2.2685e+00,  1.5996e-01,  2.1415e-01, -8.0140e-01,  1.5485e-01],
          [-1.2627e+00,  3.3279e-01, -7.0145e-01, -7.9849e-01, -1.1547e+00],
          [-6.2403e-01,  1.1128e+00, -8.4175e-01,  7.5590e-01,  1.3277e+00],
          [ 1.3062e+00, -2.9533e-01,  1.8625e+00, -2.4466e+00, -1.0042e-01]]],


        [[[ 6.3783e-01, -4.0830e-01,  5.2721e-01, -1.6377e+00,  1.8268e+00],
          [-5.5396e-02,  2.8299e+00, -2.5214e+00, -2.9159e-01, -5.6524e-01],
          [ 6.3573e-01,  2.2495e+00, -4.1573e-01, -4.1093e-01,  1.5515e+00],
          [-6.7659e-01, -1.4087e-01,  7.2113e-01,  1.2728e-01, -1.5104e+00]],

         [[ 1.4417e+00, -1.0893e+00,  9.4346e-01,  8.9341e-01, -1.3597e-01],
          [ 1.2500e+00, -2.6341e-03,  2.1313e-01,  9.0191e-01, -7.2716e-01],
          [ 5.9710e-01, -3.9374e-02, -3.7236e-02, -1.3946e+00,  1.4514e+00],
          [-1.7948e+00,  3.8287e-01,  1.5575e-01, -1.1133e+00,  6.8300e-01]],

         [[-7.0522e-01, -2.7154e+00,  3.0693e-01,  3.3656e-01,  8.4110e-01],
          [-9.5167e-01, -1.6524e+00, -1.4965e+00, -9.7646e-01,  4.4489e-01],
          [ 1.1324e+00, -1.1026e+00, -7.0591e-01,  7.0250e-01,  2.5926e-01],
          [-6.3822e-02, -1.9037e+00,  9.6132e-01, -1.0421e+00, -2.9982e-01]]]])
```
观察输出结果，我们发现最内侧的基本单元为类似 `[-6.3822e-02, -1.9037e+00,  9.6132e-01, -1.0421e+00, -2.9982e-01]` 的含有 5 个元素的向量。
再往上进一层，发现由 4 个这样的 5 元素向量组成更高维度的基本单元。
依次类推。

对于形状为 `(2, 3, 4, 5)` 的张量，我们可以将其理解为一个 `(2, 3)` 的张量，但是其中每一个元素都是一个 `(4, 5)` 的张量。

分别在不同维度求和：
```python
a.sum(0)
tensor([[[-0.6368,  0.5375,  2.2236,  0.0731,  1.3060],
         [ 1.1592,  1.8688, -1.9718, -0.2154, -1.9129],
         [ 0.5434,  3.4420,  0.4917, -0.5037,  1.4248],
         [-1.0580, -0.6411,  0.6244,  2.3948, -0.5711]],

        [[ 3.6077, -1.8789,  1.2588, -0.5060, -0.8295],
         [ 2.5064,  0.3792,  1.6835, -1.0444, -0.5465],
         [ 1.7201,  0.5586, -1.9752, -1.5484,  2.0614],
         [-0.9288, -0.1591,  0.6868, -1.4521,  1.7343]],

        [[ 1.5633, -2.5555,  0.5211, -0.4648,  0.9959],
         [-2.2144, -1.3196, -2.1980, -1.7749, -0.7098],
         [ 0.5084,  0.0102, -1.5477,  1.4584,  1.5870],
         [ 1.2424, -2.1990,  2.8239, -3.4888, -0.4002]]])

a.sum(1)
tensor([[[ 3.1599,  0.3162,  2.2259, -0.4900, -1.0594],
         [ 1.2083, -0.2464,  1.3186, -2.6686, -2.3217],
         [ 0.4066,  2.9031, -1.8723,  0.5093,  1.8110],
         [ 1.7908, -1.3376,  2.2969, -0.5179,  1.8902]],

        [[ 1.3743, -4.2130,  1.7776, -0.4077,  2.5319],
         [ 0.2429,  1.1748, -3.8048, -0.3661, -0.8475],
         [ 2.3652,  1.1075, -1.1589, -1.1030,  3.2622],
         [-2.5352, -1.6617,  1.8382, -2.0282, -1.1272]]])

a.sum(2)
tensor([[[-0.5337,  0.6769,  3.0568,  3.9618, -1.0558],
         [ 5.4113, -0.3518,  0.3788, -3.8384,  1.1484],
         [ 1.6879,  1.3102,  0.5335, -3.2906,  0.2275]],

        [[ 0.5416,  4.5302, -1.6888, -2.2130,  1.3026],
         [ 1.4941, -0.7485,  1.2751, -0.7126,  1.2713],
         [-0.5883, -7.3742, -0.9342, -0.9795,  1.2454]]])

a.sum(3)
tensor([[[ 2.5576, -0.4682,  1.7881,  2.2285],
         [-0.4012,  1.3429,  0.2391,  1.5675],
         [ 1.9961, -3.5845,  1.7306,  0.3263]],

        [[ 0.9458, -0.6038,  3.6101, -1.4795],
         [ 2.0533,  1.6353,  0.5773, -1.6865],
         [-1.9360, -4.6322,  0.2856, -2.3482]]])
```

## 参考
1. [https://tangshusen.me/Dive-into-DL-PyTorch/#/chapter02_prerequisite/2.2_Tensor](https://tangshusen.me/Dive-into-DL-PyTorch/#/chapter02_prerequisite/2.2_Tensor)
2. [PyTorch 的 backward 为什么有一个 grad_variables 参数 ？](https://zhuanlan.zhihu.com/p/29923090)
3. [‘model.eval()’ vs ‘with torch.no_grad()’](https://discuss.pytorch.org/t/model-eval-vs-with-torch-no-grad/19615/2?u=justsong)
4. [What step(), backward(), and zero_grad() do](https://discuss.pytorch.org/t/what-step-backward-and-zero-grad-do/33301)