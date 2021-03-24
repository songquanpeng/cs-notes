# PyTorch 模型
## 模型的构建
实际上模型层和模型没有本质区别，其对外提供的接口一致。

`nn.module` 实现了 `__call__` 函数，因此我们可以直接通过模型来调用，无须手动调用 `forward()` 函数。

继承自 `Module` 的类还有：`Sequential`，`ModuleList` 以及 `ModuleDict`。

### 使用 `nn.module` 进行构建
这是通过继承 `nn.module` 来构造网络。

该方式的最大优点是灵活，比如说可以自由地复用网络层。

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

### 使用 `nn.Sequelize` 进行构建
nn.Sequelize 内置了一个有序字典，因此前向传播时模块的执行顺序与加入的顺序相同。

```python
# 使用构造函数
net = nn.Sequential(
    nn.Linear(...),
    nn.Linear(...),
    nn.Linear(...)
    )

# 使用列表
layers = []
layers.append(nn.ConvTranspose2d(...))
layers.append(nn.InstanceNorm2d(...))
net = nn.Sequential(*layers)

# 使用有序字典，可以指定网络层名字
from collections import OrderedDict
net = nn.Sequential(OrderedDict([
          ('linear', nn.Linear(...)),
          ('linear', nn.Linear(...)),
          ('linear', nn.Linear(...)),
        ]))

# 使用 add_module 来进行构建
net = nn.Sequential()
net.add_module("linear1",nn.Linear(15,20))
net.add_module("relu1",nn.ReLU())
net.add_module("linear2",nn.Linear(20,15))
net.add_module("relu2",nn.ReLU())
net.add_module("linear3",nn.Linear(15,1))
net.add_module("sigmoid",nn.Sigmoid())
```

### 使用 `nn.ModuleList()` 进行构建
```python
self.encode = nn.ModuleList()
self.decode = nn.ModuleList()
self.encode.append(ResBlk(dim_in, dim_out))
self.decode.insert(0, AdainResBlk(dim_out, dim_in))
```
与 `nn.Sequelize` 的区别：`nn.Sequential` 是一个 module，其有 forward 函数，因此可以拿来直接输入。

`nn.ModuleList()` 相当于一个列表，其中的网络层之间没有联系，不保证次序。

不同于直接使用列表的方式，ModuleList 中的所有模块参数会被自动加入到网络中，可以被优化器发现和训练。

### 使用 `nn.ModuleDict()` 进行构建
与 `ModuleList` 类似，同样没有实现 `forward` 函数，不过这里换成了字典：
```python
net = nn.ModuleDict({
    'linear': nn.Linear(784, 256),
    'act': nn.ReLU(),
})

# 可以像字典那样添加元素
net['output'] = nn.Linear(256, 10)
```

### 构建自定义网络层
虽说模型和模型层没有本质确保，都是 `Module`，但是对于模型层，构建的时候我们要注意参数的声明和使用。

为什么构建模型时不用管呢？因为模型里用的都是现有的模型层，其参数已经声明好了（可能也已经初始化好了）。

注意有的层不需要参数，自然也不用管。

模型参数的类型可以为：
1. `nn.Parameter`：单个参数，通过参数名访问。
2. `nn.ParameterList`：参数列表，通过索引访问。
```python
self.params = nn.ParameterList([nn.Parameter(torch.randn(4, 4)) for i in range(3)])
```
3. `nn.ParameterDict`：参数字典，通过 key 访问。
```python
self.params = nn.ParameterDict({
                'linear1': nn.Parameter(torch.randn(4, 4)),
                'linear2': nn.Parameter(torch.randn(4, 1))
                })
```

至于参数的使用，无非是与输入等做一些计算。

### 常用网络层
```python
nn.Linear(num_inputs, num_outputs)
nn.ReLU()
```

### 查看模型结构
```python
print(net)
print(net[0])
```

## 模型的参数
`Module` 类实现了两个相关的函数：
1. `parameters()`：返回参数迭代器。
2. `named_parameters()`：返回 (名字, 参数) 元组迭代器，名字即参数的变量名。

参数的类型为 `torch.nn.Parameter`，其是 Tensor 的子类，特殊之处在于其内的值会自动加入到参数列表。


### 对于单个网络层的参数初始化
#### 直接初始化为指定值
```python
module.weight.data.fill_(0)
```

#### 使用 `torch.nn.init` 中的方法
```python
nn.init.xavier_uniform(conv1.weight)
nn.init.constant_(module.bias, val=0)
nn.init.norm_(module.weight, mean=0, std=0.01)
```

### 对于 `nn.Module`的参数初始化
包括 `nn.Sequential`。

```python
# 使用内置的初始化方法
for name, param in net.named_parameters():
    if 'weight' in name:
        init.normal_(param, mean=0, std=0.01)
    elif 'bias' in name:
        init.constant_(param, val=0)


# 自定义参数初始化方法
@torch.no_grad()
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

要注意，要么在 `with torch.no_grad()` 里进行参数的初始化操作，要么加上 `@torch.no_grad()` 注解。

当然，如果是直接操作 `.data` 属性，那 `no_grad` 不是必须的（因为这样的话本来就不会被自动求导机制记录）。

### 模型参数的共享
直接使用同一个 `Module` 实例就好。

反向传播时梯度会累加。

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
参数后缀任意，一般为 `pt` 或 `pth`。
注意，有时参数的后缀为 `ckpt`，即 checkpoint 的缩写。

两种类型，第一种是通过 `state_dict`。

该方式和 Tensor 的保存与加载没有本质区别。

用到两个函数：
1. `model.state_dict()` ：返回一个映射参数名称到对应 Tensor 的字典对象。
2. `model.load_state_dict(dict)` ：接受一个字典，使用其内的值初始化模型参数。

自然，只有有可学习的参数（`nn.Parameter`）的网络层有这两个方法。

另外，优化器也有这两个方法，用以存储其状态和所使用的超参数。

这里并没有魔法，只是 Tensor 的存储与加载罢了。

第二种是通过以下两个函数：
```python
torch.save(model, PATH)
model = torch.load(PATH)
```
这种看起来更加方便，我们取回的时候甚至都不用实现准备模型实例，但是，貌似有些问题？待补充。

### 保存模型
1. 只保存模型参数：torch.save(net.state_dict(), "./data/net_parameter.pth")
2. 保存完整的模型（可能会由于设备和目录的改变而出问题）：torch.save(net, './data/net_model.pth')
3. 注意如果还要继续训练的话，还需要保存 optimizer 的 state_dict。

### 加载模型
1. 加载模型参数：net_clone.load_state_dict(torch.load("./data/net_parameter.pth"))
2. 加载完整的模型（区别在于这里的返回值直接是模型，我们不需要事先构造模型）：net_loaded = torch.load('./data/net_model.pth')
3. 如果还要继续训练,则还需要加载 optimizer 的参数，当然如果只是使用训练好的模型的话就不需要了。

## 参考
1. https://tangshusen.me/Dive-into-DL-PyTorch/#/chapter03_DL-basics/3.3_linear-regression-pytorch
2. https://discuss.pytorch.org/t/saving-and-loading-a-model-in-pytorch/2610/2
3. https://stackoverflow.com/questions/49433936/how-to-initialize-weights-in-pytorch
4. https://tangshusen.me/Dive-into-DL-PyTorch/#/chapter04_DL_computation/4.1_model-construction
5. https://tangshusen.me/Dive-into-DL-PyTorch/#/chapter04_DL_computation/4.2_parameters
6. https://tangshusen.me/Dive-into-DL-PyTorch/#/chapter04_DL_computation/4.4_custom-layer