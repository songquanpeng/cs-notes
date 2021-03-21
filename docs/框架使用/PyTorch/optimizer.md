# PyTorch 优化器
## 概述

一般模式：
```python
for epoch in range(num_epochs):
    # 每个 epoch 遍历一遍数据集
    for x, y in data_iter:
        output = model(x)
        # 调用优化器的 `zero_grad()` 函数来清空模型参数的梯度，等价于 net.zero_grad()
        optimizer.zero_grad() 
        # 根据模型的输出和真实值来构造 loss
        loss = calculate_loss(output, y)
        # 反向传播，该函数会为模型内的每一个 `requires_grad=True` 的参数更新其梯度：`x.grad += dloss / dx`
        loss.backward()
        # 根据各参数的梯度对其进行更新，
        # 例如对于 SGD 优化器，其通过以下规则来对模型参数：`x += -lr * x.grad`
        optimizer.step()
    print('epoch %d, loss: %f' % (epoch, l.item()))
```

总结一下就是：
1. 梯度归零。
2. 根据模型输出和真实标签来计算损失。
3. 反向传播，更新梯度。
4. 根据梯度，更新参数。

其中 1 和 2 的次序无所谓。

## 自己实现 SGD 优化器
```python
def sgd(params, lr, bs):
    for param in params:
        param.data -= lr * param.grad / bs

sgd(model.parameters(), lr, bs)
```

## 使用 PyTorch 提供的优化器
```python
optimizer = torch.optim.SGD(model.parameters(), lr=0.01, momentum=0.9, weight_decay=λ)
optimizer = torch.optim.Adam([var1, var2], lr=0.0001)

g_optimizer = torch.optim.Adam(self.G.parameters(), self.g_lr, (self.beta1, self.beta2))
```

## 为不同的网络层设置不同的学习率
```python
optimizer =optim.SGD([
                # 如果对某个参数不指定学习率，就使用最外层的默认学习率
                {'params': net.subnet1.parameters()}, # lr=0.03
                {'params': net.subnet2.parameters(), 'lr': 0.01}
            ], lr=0.03)
```

## 动态学习率
```python
for param_group in optimizer.param_groups:
    param_group['lr'] *= 0.1
```


## 参考
https://tangshusen.me/Dive-into-DL-PyTorch/#/chapter03_DL-basics/3.3_linear-regression-pytorch