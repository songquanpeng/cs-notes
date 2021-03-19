# PyTorch 数据处理
## 概述


## Dataset
```python
dataset = torch.utils.data.TensorDataset(features, labels)
```

## Data Loader
```python
data_iter = torch.utils.data.DataLoader(dataset, batch_size, shuffle=True)
```

注意，可以 `num_workers` 参数来使用多进行进行加载数据，可以提升训练速度。
但是对于 Windows，由于其不支持 fork 系统调用，因此会报错，解决方法：
```python
if sys.platform.startswith('win'):
    num_workers = 0
else:
    num_workers = 4
```

## 参考
https://tangshusen.me/Dive-into-DL-PyTorch/#/chapter03_DL-basics/3.5_fashion-mnist