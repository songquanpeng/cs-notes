# PyTorch 模型
## 模型的构建
实际上模型层和模型没有本质区别，其对外提供的接口一致。

### 通过继承 `nn.module` 来进行构建
```python
class MyNet(nn.Module):
    def __init__(self, num_feature):
        super(MyNet, self).__init__()
        self.linear = nn.Linear(num_feature, 1)
    
    def forward(self, x):
        y = self.linear(x)
        return y

net = MyNet(num_feature)
print(net)
```

### 使用 `nn.Sequelize` 的构造函数来进行构建
```python
net = nn.Sequential(
    nn.Linear(num_inputs, 1)
    pass
    )

# 使用列表：
layers = []
layers.append(nn.ConvTranspose2d(curr_dim, curr_dim // 2, kernel_size=4, stride=2, padding=1, bias=False))
layers.append(nn.InstanceNorm2d(curr_dim // 2, affine=True, track_running_stats=True))
layers.append(nn.ReLU(inplace=True))
net = nn.Sequential(*layers)

# 使用有序字典，刻意指定网络层名字：
from collections import OrderedDict
net = nn.Sequential(OrderedDict([
          ('linear', nn.Linear(num_inputs, 1))
          pass
        ]))
```

### 使用 `nn.ModuleList()` 的 add_module 来进行构建
```python
net = nn.Sequential()
net.add_module("linear1",nn.Linear(15,20))
net.add_module("relu1",nn.ReLU())
net.add_module("linear2",nn.Linear(20,15))
net.add_module("relu2",nn.ReLU())
net.add_module("linear3",nn.Linear(15,1))
net.add_module("sigmoid",nn.Sigmoid())
```

### 使用 `nn.ModuleList()` 来进行构建
```python
self.encode = nn.ModuleList()
self.decode = nn.ModuleList()
self.encode.append(ResBlk(dim_in, dim_out))
self.decode.insert(0, AdainResBlk(dim_out, dim_in))
```
与 `nn.Sequelize` 的区别：`nn.Sequential` 是一个 module，其有 forward 函数，因此可以拿来直接输入。

`nn.ModuleList()` 相当于一个 Python 列表，但是其中的网络层参数可以被优化器发现和训练。


### 查看模型结构
```python
print(net)
print(net[0])
```



## 模型的参数初始化
### 对于单个网络层
#### 直接初始化为指定值
```python
module.weight.data.fill_(0)
```

#### 使用 `torch.nn.init` 中的方法
```python
nn.init.xavier_uniform(conv1.weight)
nn.init.constant_(module.bias, 0)
```

### 对于 `nn.Module`（包括 `nn.Sequential`）
```python
def init_weights(module):
    # 判断 module 类型
    if type(module) == nn.Linear:
        nn.init.xavier_uniform(m.weight)
        # or
        m.bias.data.fill_(0.01)
    # 也可以这样判断 module 类型
    if isinstance(module, nn.Conv2d):
        nn.init.kaiming_normal_(module.weight, mode='fan_in', nonlinearity='relu')
        if module.bias is not None:
            nn.init.constant_(module.bias, 0)

net = nn.Sequential(nn.Linear(2, 2), nn.Linear(2, 2))
net.apply(init_weights)
```

## 模型的评估
1. 加载模型：`model.load_state_dict(torch.load("the path of model's pth file"))`
2. 切换到评估模式：`model.eval()` （为什么要手动指明模型？因为有些东西在训练模式和评估模式下表现不同，例如 Batch Normalization，Dropout）。
3. 关闭模型参数的 `requires_grad`：
```python
def toggle_grad(model, on_or_off):
    for param in model.parameters():
    param.requires_grad = on_or_off
```
4. 准备相应的特征和标签，注意要指明放到 GPU 的内存里，例如 `x = torch.randn(10, 128).cuda()`。
5. 使用模型进行预测，例如：`predict = model(x)`。
6. 最后如果还要继续训练，记得开启模型参数的 `requires_grad`。

## 模型的保存与加载
### 保存模型
1. 只保存模型参数：torch.save(net.state_dict(), "./data/net_parameter.pth")
2. 保存完整的模型（可能会由于设备和目录的改变而出问题）：torch.save(net, './data/net_model.pth')
3. 注意还需要保存 optimizer 的 state_dict。

### 加载模型
1. 加载模型参数：net_clone.load_state_dict(torch.load("./data/net_parameter.pth"))
2. 加载完整的模型：net_loaded = torch.load('./data/net_model.pth')
3. 如果还要继续训练,则还需要加载 optimizer 的参数，当然如果只是使用训练好的模型的话就不需要了。

## 参考
1. https://tangshusen.me/Dive-into-DL-PyTorch/#/chapter03_DL-basics/3.3_linear-regression-pytorch
2. https://discuss.pytorch.org/t/saving-and-loading-a-model-in-pytorch/2610/2
3. https://stackoverflow.com/questions/49433936/how-to-initialize-weights-in-pytorch