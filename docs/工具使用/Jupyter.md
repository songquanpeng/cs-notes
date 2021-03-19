# Jupyter 使用笔记
## 配置
### 添加 conda 环境到 Jupyter
```sh
conda install -c anaconda ipykernel
python -m ipykernel install --user --name=envName
```
然后为 Notebook 选择 kernel 就好.

## 启动
```sh
jupyter lab ./working/dir
```

## 快捷键
1. `Shift + Enter`：执行当前单元，并选择下一个单元。
2. `Ctrl + Enter` ：执行当前单元。
3. `Alt + Enter`：执行当前单元，并插入一个新单元。
