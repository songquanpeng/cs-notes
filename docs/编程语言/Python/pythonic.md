# Python 代码例子
## 数据结构相关
创建双向索引：
```python
idx_to_char = list(set(chars))
char_to_idx = dict([(char, i) for i, char in enumerate(idx_to_char)])
```