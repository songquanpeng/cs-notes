(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{371:function(e,r,_){"use strict";_.r(r);var v=_(45),o=Object(v.a)({},(function(){var e=this,r=e.$createElement,_=e._self._c||r;return _("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[_("h1",{attrs:{id:"pytorch-tensor"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#pytorch-tensor"}},[e._v("#")]),e._v(" PyTorch Tensor")]),e._v(" "),_("h2",{attrs:{id:"概述"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[e._v("#")]),e._v(" 概述")]),e._v(" "),_("p",[_("code",[e._v("torch.Tensor")]),e._v(" 与 NumPy 的多维数组非常类似，区别在于：")]),e._v(" "),_("ol",[_("li",[e._v("GPU 计算。")]),e._v(" "),_("li",[e._v("自动求梯度。")])]),e._v(" "),_("h2",{attrs:{id:"tensor-的创建"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#tensor-的创建"}},[e._v("#")]),e._v(" Tensor 的创建")]),e._v(" "),_("ol",[_("li",[_("p",[e._v("创建未初始化的 Tensor："),_("code",[e._v("torch.empty(*sizes)")])])]),e._v(" "),_("li",[_("p",[e._v("创建随机初始化的 Tensor：")]),e._v(" "),_("ol",[_("li",[e._v("均匀分布（从区间 [0, 1) 中均匀取样）："),_("code",[e._v("torch.rand(*sizes)")])]),e._v(" "),_("li",[e._v("标准正态分布（均值为 0，方差为 1）："),_("code",[e._v("torch.randn(*sizes)")])]),e._v(" "),_("li",[e._v("离散正态分布（可以分别为每个量指定 mean 和 std）：\n"),_("ol",[_("li",[_("code",[e._v("torch.normal(mean, std, sizes)")])]),e._v(" "),_("li",[_("code",[e._v("torch.normal(means, stds)")])]),e._v(" "),_("li",[_("code",[e._v("torch.normal(means, std)")])]),e._v(" "),_("li",[_("code",[e._v("torch.normal(mean, stds)")])])])])])]),e._v(" "),_("li",[_("p",[e._v("创建指定值的 Tensor：")]),e._v(" "),_("ol",[_("li",[e._v("全 0："),_("code",[e._v("torch.zeros(x, y)")])]),e._v(" "),_("li",[e._v("全 1："),_("code",[e._v("torch.ones(x, y)")])]),e._v(" "),_("li",[e._v("全 n："),_("code",[e._v("torch.ones(x, y) * n")])]),e._v(" "),_("li",[e._v("对角线为 1，其余为 0："),_("code",[e._v("torch.eye(x, y)")])]),e._v(" "),_("li",[e._v("等宽数列：\n"),_("ol",[_("li",[e._v("定步长："),_("code",[e._v("torch.arange(s, e, step)")])]),e._v(" "),_("li",[e._v("定个数："),_("code",[e._v("torch.linspace(s, e, steps)")])])])])])]),e._v(" "),_("li",[_("p",[e._v("从数据创建：")]),e._v(" "),_("ol",[_("li",[e._v("从 Python 列表或 Numpy 数组："),_("code",[e._v("torch.Tensor([a, b, c])")])]),e._v(" "),_("li",[e._v("从已有的 Tensor：\n"),_("ol",[_("li",[_("code",[e._v("x = x.new_ones()")])])])])])])]),e._v(" "),_("p",[e._v("创建时可指定：")]),e._v(" "),_("ol",[_("li",[e._v("数据类型："),_("code",[e._v("dtype=torch.float")]),e._v("，具体参见"),_("a",{attrs:{href:"https://pytorch.org/docs/stable/Tensors.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("官网上的类型列表"),_("OutboundLink")],1),e._v("。")]),e._v(" "),_("li",[e._v("是否需要梯度更新："),_("code",[e._v("requires_grad=True")])]),e._v(" "),_("li",[e._v("设备："),_("code",[e._v("device='cpu'")]),e._v(" 或者 "),_("code",[e._v("device=torch.device('cuda')")]),e._v("：\n"),_("ol",[_("li",[e._v("CPU："),_("code",[e._v("torch.device('cpu')")])]),e._v(" "),_("li",[e._v("当前 cuda 设备："),_("code",[e._v("torch.device('cuda')")])]),e._v(" "),_("li",[e._v("指定 cuda 设备："),_("code",[e._v("torch.device('cuda:0')")])])])])]),e._v(" "),_("p",[e._v("也可之后在设备间移动 Tensor："),_("code",[e._v("x = x.to(device)")])]),e._v(" "),_("p",[e._v("注意，这种直接创建的 tensor 为叶子节点："),_("code",[e._v("x.is_leaf = True")]),e._v("。")]),e._v(" "),_("h2",{attrs:{id:"tensor-的操作"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#tensor-的操作"}},[e._v("#")]),e._v(" Tensor 的操作")]),e._v(" "),_("h3",{attrs:{id:"获取-tensor-的属性"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#获取-tensor-的属性"}},[e._v("#")]),e._v(" 获取 Tensor 的属性")]),e._v(" "),_("p",[e._v("获取形状：")]),e._v(" "),_("ol",[_("li",[_("code",[e._v("x.size()")])]),e._v(" "),_("li",[_("code",[e._v("x.shape")]),e._v("\n返回值为形状元组。")])]),e._v(" "),_("p",[e._v("获取维度："),_("code",[e._v("x.dim()")]),e._v("，返回值为 int。")]),e._v(" "),_("h3",{attrs:{id:"算数操作"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#算数操作"}},[e._v("#")]),e._v(" 算数操作")]),e._v(" "),_("p",[e._v("一般而言，有以下形式：")]),e._v(" "),_("ol",[_("li",[e._v("用 Python 的运算符：\n"),_("ol",[_("li",[_("code",[e._v("y = x + y")]),e._v("（开辟了新内存，并将 y 指向新内存）")]),e._v(" "),_("li",[_("code",[e._v("y[:] = x + y")]),e._v("（没有开辟新内存）")])])]),e._v(" "),_("li",[e._v("用 PyTorch 提供的函数：\n"),_("ol",[_("li",[_("code",[e._v("y = torch.add(x, y)")]),e._v("（开辟了新内存，并将 y 指向新内存）")]),e._v(" "),_("li",[_("code",[e._v("torch.add(x, y, out=y)")]),e._v("（没有开辟新内存）")]),e._v(" "),_("li",[_("code",[e._v("y.add_(x)")]),e._v("（没有开辟新内存）")])])])]),e._v(" "),_("p",[e._v("注意所有后面带有下划线的函数均表示该操作直接作用于当前矩阵（inplace）。")]),e._v(" "),_("h3",{attrs:{id:"索引操作"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#索引操作"}},[e._v("#")]),e._v(" 索引操作")]),e._v(" "),_("p",[e._v("类似 NumPy。\n例子：\n取 x 的第一行的元素："),_("code",[e._v("y = x[0, :]")]),e._v("。")]),e._v(" "),_("p",[e._v("注意： x 和 y 是共享内存的。")]),e._v(" "),_("h3",{attrs:{id:"改变形状"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#改变形状"}},[e._v("#")]),e._v(" 改变形状")]),e._v(" "),_("p",[_("code",[e._v("y = x.view(sizes*)")])]),e._v(" "),_("p",[e._v("注意：x 和 y 同样是共享内存的，如果不想共享内存，则 "),_("code",[e._v("y = x.clone().view(sizes*)")]),e._v("。")]),e._v(" "),_("h3",{attrs:{id:"线性代数"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#线性代数"}},[e._v("#")]),e._v(" 线性代数")]),e._v(" "),_("p",[e._v("随用随查就好。")]),e._v(" "),_("h3",{attrs:{id:"其他操作"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#其他操作"}},[e._v("#")]),e._v(" 其他操作")]),e._v(" "),_("h4",{attrs:{id:"x-clone-或者-torch-clone-x"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#x-clone-或者-torch-clone-x"}},[e._v("#")]),e._v(" "),_("code",[e._v("x.clone()")]),e._v(" 或者 "),_("code",[e._v("torch.clone(x)")])]),e._v(" "),_("p",[e._v("拷贝 x 的一个副本，注意该操作会被记录在计算图中，梯度回传到副本时也会传到源 Tensor。")]),e._v(" "),_("h4",{attrs:{id:"x-detach"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#x-detach"}},[e._v("#")]),e._v(" "),_("code",[e._v("x.detach()")])]),e._v(" "),_("p",[e._v("返回一个新的 Tensor，其从当前计算图中剥离，但是注意内存是共享的，如果对其进行修改将出发错误。")]),e._v(" "),_("h4",{attrs:{id:"x-detach-2"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#x-detach-2"}},[e._v("#")]),e._v(" "),_("code",[e._v("x.detach_()")])]),e._v(" "),_("p",[e._v("将当前 Tensor 从计算图中剥离，使其成为叶子节点，注意不能对 view 使用该函数。")]),e._v(" "),_("h2",{attrs:{id:"梯度的计算"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#梯度的计算"}},[e._v("#")]),e._v(" 梯度的计算")]),e._v(" "),_("ol",[_("li",[e._v("Tensor 的属性 "),_("code",[e._v("requires_grad")]),e._v(" 若为 "),_("code",[e._v("True")]),e._v("，则 PyTorch 将追踪其上的操作。")]),e._v(" "),_("li",[e._v("通过 inpalce 函数 "),_("code",[e._v("x.requires_grad_(boolean)")]),e._v(" 可设置该属性。")]),e._v(" "),_("li",[e._v("使用 "),_("code",[e._v("with torch.no_grad()")]),e._v(" 可禁用一整块的代码中的 Tensor 中的梯度计算。\n"),_("blockquote",[_("ul",[_("li",[_("code",[e._v("model.eval()")]),e._v(" will notify all your layers that you are in eval mode, that way, batchnorm or dropout layers will work in eval mode instead of training mode.")]),e._v(" "),_("li",[_("code",[e._v("torch.no_grad()")]),e._v(" impacts the autograd engine and deactivate it. It will reduce memory usage and speed up computations but you won’t be able to backprop.")])])])]),e._v(" "),_("li",[e._v("Tensor 的 "),_("code",[e._v("grad_fn")]),e._v(" 属性记录了该 Tensor 是由什么操作产生的。")]),e._v(" "),_("li",[e._v("之后调用 "),_("code",[e._v("x.backward()")]),e._v(" 进行反向传播，梯度将记录在 Tensor 的 "),_("code",[e._v("grad")]),e._v(" 属性中。")])]),e._v(" "),_("p",[e._v("一般流程：")]),e._v(" "),_("ol",[_("li",[_("code",[e._v("optimizer.zero_grad()")]),e._v("：清空梯度。")]),e._v(" "),_("li",[_("code",[e._v("loss.backward()")]),e._v("：反向传播，计算新的梯度。")]),e._v(" "),_("li",[_("code",[e._v("optimizer.step()")]),e._v("：根据梯度对 Tensor（参数）进行更新。")])]),e._v(" "),_("p",[e._v("注意，对于标量，直接调用 "),_("code",[e._v("x.backward()")]),e._v(" 即可，否则需要传入一个同形状的权重："),_("code",[e._v("x.backward(w)")]),e._v("。\n这样做的目的是避免 Tensor 对 Tensor 求导，实际上可以理解为 "),_("code",[e._v("l = torch.sum(x*w)")]),e._v("，具体参见"),_("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/29923090",target:"_blank",rel:"noopener noreferrer"}},[e._v("这里的解释"),_("OutboundLink")],1),e._v("。")]),e._v(" "),_("p",[e._v("一般情况下最终的 loss 都是标量。")]),e._v(" "),_("h2",{attrs:{id:"参考"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[e._v("#")]),e._v(" 参考")]),e._v(" "),_("ol",[_("li",[_("a",{attrs:{href:"https://tangshusen.me/Dive-into-DL-PyTorch/#/chapter02_prerequisite/2.2_Tensor",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://tangshusen.me/Dive-into-DL-PyTorch/#/chapter02_prerequisite/2.2_Tensor"),_("OutboundLink")],1)]),e._v(" "),_("li",[_("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/29923090",target:"_blank",rel:"noopener noreferrer"}},[e._v("PyTorch 的 backward 为什么有一个 grad_variables 参数 ？"),_("OutboundLink")],1)]),e._v(" "),_("li",[_("a",{attrs:{href:"https://discuss.pytorch.org/t/model-eval-vs-with-torch-no-grad/19615/2?u=justsong",target:"_blank",rel:"noopener noreferrer"}},[e._v("‘model.eval()’ vs ‘with torch.no_grad()’"),_("OutboundLink")],1)]),e._v(" "),_("li",[_("a",{attrs:{href:"https://discuss.pytorch.org/t/what-step-backward-and-zero-grad-do/33301",target:"_blank",rel:"noopener noreferrer"}},[e._v("What step(), backward(), and zero_grad() do"),_("OutboundLink")],1)])])])}),[],!1,null,null,null);r.default=o.exports}}]);