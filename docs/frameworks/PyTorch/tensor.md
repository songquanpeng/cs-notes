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
3. 设备：`device='cpu'` 或者 `device=torch.device('cuda')`：
   1. CPU：`torch.device('cpu')`
   2. 当前 cuda 设备：`torch.device('cuda')`
   3. 指定 cuda 设备：`torch.device('cuda:0')`

也可之后在设备间移动 Tensor：`x = x.to(device)`   

注意，这种直接创建的 tensor 为叶子节点：`x.is_leaf = True`。

## Tensor 的操作
### 获取 Tensor 的属性
获取形状：
1. `x.size()`
2. `x.shape`
返回值为形状元组。

获取维度：`x.dim()`，返回值为 int。

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

## 参考
1. [https://tangshusen.me/Dive-into-DL-PyTorch/#/chapter02_prerequisite/2.2_Tensor](https://tangshusen.me/Dive-into-DL-PyTorch/#/chapter02_prerequisite/2.2_Tensor)
2. [PyTorch 的 backward 为什么有一个 grad_variables 参数 ？](https://zhuanlan.zhihu.com/p/29923090)
3. [‘model.eval()’ vs ‘with torch.no_grad()’](https://discuss.pytorch.org/t/model-eval-vs-with-torch-no-grad/19615/2?u=justsong)
4. [What step(), backward(), and zero_grad() do](https://discuss.pytorch.org/t/what-step-backward-and-zero-grad-do/33301)