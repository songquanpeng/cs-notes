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