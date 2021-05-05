# Pandas 笔记

## 文件的读取与保存
```python
data = pd.read_csv("path/to/csv")
data.to_csv(filename, index=False)
```

## 数据预处理
### 连续值的处理
1. 归一化：
```python
all_features[numeric_features] = all_features[numeric_features].apply(lambda x: (x - x.mean()) / (x.std()))
```

对于其中的缺失值：
1. 将缺失值直接替换为均值：
```python
all_features[numeric_features] = all_features[numeric_features].fillna(0)
```

### 离散值的处理
1. 将离散值转换为指示特征（按可能的选择分解为对应数目的新特征，其值只有 0 或 1）：
```python
all_features = pd.get_dummies(all_features, dummy_na=True)
```





## 常用操作
将生成的预测值与原 Id 列合并生成一个新的 DataFrame，之后生成提交文件：
```python
submit_df = test_data[['Id']].copy()
submit_df['label'] = pd.Series(preds.reshape(1, -1)[0])
submit_df.to_csv(filename, index=False)
```