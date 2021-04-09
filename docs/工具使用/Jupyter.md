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

## 基本使用
1. 运行 shell 命令：`!command`
2. 运行 Python 文件：`!run foo.py`
3. 加载 Python 文件到 Cell：`!load foo.py`
4. 后加 `?` 可以获取帮助，加 `??` 可以获取更加详细的帮助。

## 魔法
1. 启用行内 Matplotlib 支持：`%matplotlib inline`
2. 报告运行时间：
   1. 运行一次：`%time statement`
   2. 运行多次：`%timeit statement`


## 快捷键
1. `Shift + Enter`：执行当前单元，并选择下一个单元。
2. `Ctrl + Enter` ：执行当前单元。
3. `Alt + Enter`：执行当前单元，并插入一个新单元。
