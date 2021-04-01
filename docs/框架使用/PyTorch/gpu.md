# 使用 GPU 加速计算
## 概述
默认情况下，PyTorch 中的 GPU 操作是异步的。
当调用一个使用 GPU 的函数时，这些操作会在特定的设备上排队但不一定会在稍后立即执行。

使用 `nvidia-smi` 查看 GPU 使用情况，由于此命令非常常用，建议设置 alias：`alias ns=nvidia-smi`。

## 常用函数
1. `torch.cuda.is_available()`：有无可用的 GPU 设备。
2. `torch.cuda.device_count()`：可用的 GPU 设备数量。
3. `torch.cuda.current_device()`：当前 GPU 设备索引。
4. `torch.cuda.get_device_name(index)`：根据索引查询 GPU 的名字。

## 设备
1. 可与使用字符串，例如：`"cuda:1"`，`cpu`。
2. 也可以使用 `torch.device` 对象：
   1. CPU：`torch.device('cpu')`
   2. 当前 cuda 设备：`torch.device('cuda')`
   3. 指定 cuda 设备：`torch.device('cuda:0')`

## Tensor
默认情况下存储在内存中。
```python
# 创建时指定设备
x = torch.tensor([1, 2, 3], device=device)
x = torch.tensor([1, 2, 3]).to(device)

# 将 x 复制到第 i 个 GPU 设备上
x = x.cuda(i)
# 查看 x 在哪一个设备上
print(x.device)
```

运算的规则：
1. 参与运算的 Tensor 必须在同一个设备上。
2. 产生的结果存储在与原 Tensor 相同的设备上。

## Model
模型也必须先转换到 GPU 上才能使用 GPU 计算。

```python
# 注意这里和 Tensor 的 cuda() 方法有所区别，这里是 in place 的
model.cuda('cuda:1')
# 查看模型在哪一个设备上
print(model.device)
```

输入模型的 Tensor 必须和模型在同一个设备上。

## 单机多 GPU 计算
使用 torch.nn.DataParallel 将模型包装一下即可：
```python
# 默认使用所有 GPU
net = torch.nn.DataParallel(net)
# 可以设置只使用指定的 GPU，例如 0 和 3 号 GPU
net = torch.nn.DataParallel(net, device_ids=[0, 3])
```

关于模型的保存：`DataParallel` 实际上也是一个 `nn.Module`，其中有一个 `module` 就是我们的实际模型，
保存的时候只保存 `net.module` 就好：
```python
torch.save(net.module.state_dict(), "./model.pt")
new_net.load_state_dict(torch.load("./model.pt")) 
```

或者就先给 net 包装一下，再去加载，不推荐这种方式：
```python
net = torch.nn.DataParallel(net)
net.load_state_dict(torch.load("./model.pt"))
```

## 分布式计算
https://pytorch.org/tutorials/intermediate/dist_tuto.html

## 参考
1. https://tangshusen.me/Dive-into-DL-PyTorch/#/chapter04_DL_computation/4.6_use-gpu
2. https://tangshusen.me/Dive-into-DL-PyTorch/#/chapter08_computational-performance/8.2_async-computation
3. https://tangshusen.me/Dive-into-DL-PyTorch/#/chapter08_computational-performance/8.4_multiple-gpus