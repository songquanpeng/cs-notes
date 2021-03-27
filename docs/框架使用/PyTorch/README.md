# PyTorch 概述

## 教程
+ [ ] [《动手学深度学习》(PyTorch版)](https://tangshusen.me/Dive-into-DL-PyTorch)
+ [ ] [《20 天吃掉那只 PyTorch》](https://github.com/lyhue1991/eat_pytorch_in_20_days)

## 安装
相关链接：
1. [PyTorch](https://pytorch.org/get-started/locally/)
2. [CUDA](https://developer.nvidia.com/cuda-toolkit-archive)
3. [cuDNN](https://developer.nvidia.com/cudnn)

```sh
conda create --name torch
conda install pytorch torchvision torchaudio cudatoolkit=11.0 -c pytorch
pip install tensorflow
```

使用 pip 安装的时候必须注意 CUDA 版本，直接 `pip install pytorch` 安装的版本没有 CUDA 支持。
在这里找支持你的 CUDA 的 PyTorch 版本：https://pytorch.org/get-started/previous-versions/

```
pip install torch==1.7.1+cu101 -f https://download.pytorch.org/whl/torch_stable.html
```

验证安装是否成功（使用 IPython 的话要确保当前环境里有安装 IPython）：
```python
import torch
print(torch.__version__)
print(torch.version.cuda)
print(torch.cuda.get_device_name(0))
```

## 推荐阅读
+ [深度学习框架 PyTorch 常用代码段](https://zhuanlan.zhihu.com/p/104019160)
+ [Installing the NVIDIA driver, CUDA and cuDNN on Linux (Ubuntu 20.04)](https://gist.github.com/kmhofmann/cee7c0053da8cc09d62d74a6a4c1c5e4)