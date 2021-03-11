(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{369:function(e,t,v){"use strict";v.r(t);var o=v(45),_=Object(o.a)({},(function(){var e=this,t=e.$createElement,v=e._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("h1",{attrs:{id:"pytorch-tensor-操作"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#pytorch-tensor-操作"}},[e._v("#")]),e._v(" PyTorch tensor 操作")]),e._v(" "),v("h2",{attrs:{id:"概述"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[e._v("#")]),e._v(" 概述")]),e._v(" "),v("p",[v("code",[e._v("torch.Tensor")]),e._v(" 与 NumPy 的多维数组非常类似，区别在于：")]),e._v(" "),v("ol",[v("li",[e._v("GPU 计算。")]),e._v(" "),v("li",[e._v("自动求梯度。")])]),e._v(" "),v("h2",{attrs:{id:"tensor-的创建"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#tensor-的创建"}},[e._v("#")]),e._v(" tensor 的创建")]),e._v(" "),v("ol",[v("li",[v("p",[e._v("创建未初始化的 tensor："),v("code",[e._v("torch.empty(*sizes)")])])]),e._v(" "),v("li",[v("p",[e._v("创建随机初始化的 tensor：")]),e._v(" "),v("ol",[v("li",[e._v("均匀分布（从区间 [0, 1) 中均匀取样）："),v("code",[e._v("torch.rand(*sizes)")])]),e._v(" "),v("li",[e._v("标准正态分布（均值为 0，方差为 1）："),v("code",[e._v("torch.randn(*sizes)")])]),e._v(" "),v("li",[e._v("离散正态分布（可以分别为每个量指定 mean 和 std）：\n"),v("ol",[v("li",[v("code",[e._v("torch.normal(mean, std, sizes)")])]),e._v(" "),v("li",[v("code",[e._v("torch.normal(means, stds)")])]),e._v(" "),v("li",[v("code",[e._v("torch.normal(means, std)")])]),e._v(" "),v("li",[v("code",[e._v("torch.normal(mean, stds)")])])])])])]),e._v(" "),v("li",[v("p",[e._v("创建指定值的 tensor：")]),e._v(" "),v("ol",[v("li",[e._v("全 0："),v("code",[e._v("torch.zeros(x, y)")])]),e._v(" "),v("li",[e._v("全 1："),v("code",[e._v("torch.ones(x, y)")])]),e._v(" "),v("li",[e._v("全 n："),v("code",[e._v("torch.ones(x, y) * n")])]),e._v(" "),v("li",[e._v("对角线为 1，其余为 0："),v("code",[e._v("torch.eye(x, y)")])]),e._v(" "),v("li",[e._v("等宽数列：\n"),v("ol",[v("li",[e._v("定步长："),v("code",[e._v("torch.arange(s, e, step)")])]),e._v(" "),v("li",[e._v("定个数："),v("code",[e._v("torch.linspace(s, e, steps)")])])])])])]),e._v(" "),v("li",[v("p",[e._v("从数据创建：")]),e._v(" "),v("ol",[v("li",[e._v("从 Python 列表或 Numpy 数组："),v("code",[e._v("torch.tensor([a, b, c])")])]),e._v(" "),v("li",[e._v("从已有的 tensor：\n"),v("ol",[v("li",[v("code",[e._v("x = x.new_ones()")])])])])])])]),e._v(" "),v("p",[e._v("创建时可指定：")]),e._v(" "),v("ol",[v("li",[e._v("数据类型："),v("code",[e._v("dtype=torch.float")]),e._v("，具体参见"),v("a",{attrs:{href:"https://pytorch.org/docs/stable/tensors.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("官网上的类型列表"),v("OutboundLink")],1),e._v("。")]),e._v(" "),v("li",[e._v("设备："),v("code",[e._v("device='cpu'")]),e._v(" 或者 "),v("code",[e._v("device=torch.device('cuda')")]),e._v("：\n"),v("ol",[v("li",[e._v("CPU："),v("code",[e._v("torch.device('cpu')")])]),e._v(" "),v("li",[e._v("当前 cuda 设备："),v("code",[e._v("torch.device('cuda')")])]),e._v(" "),v("li",[e._v("指定 cuda 设备："),v("code",[e._v("torch.device('cuda:0')")])])])])]),e._v(" "),v("h2",{attrs:{id:"tensor-的操作"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#tensor-的操作"}},[e._v("#")]),e._v(" tensor 的操作")]),e._v(" "),v("h3",{attrs:{id:"获取-tensor-的属性"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#获取-tensor-的属性"}},[e._v("#")]),e._v(" 获取 tensor 的属性")]),e._v(" "),v("p",[e._v("获取形状：")]),e._v(" "),v("ol",[v("li",[v("code",[e._v("x.size()")])]),e._v(" "),v("li",[v("code",[e._v("x.shape")]),e._v("\n返回值为形状元组。")])]),e._v(" "),v("p",[e._v("获取维度："),v("code",[e._v("x.dim()")]),e._v("，返回值为 int。")]),e._v(" "),v("h3",{attrs:{id:"算数操作"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#算数操作"}},[e._v("#")]),e._v(" 算数操作")]),e._v(" "),v("p",[e._v("所有后面带有下划线的函数君表示该操作直接作用于当前矩阵。")])])}),[],!1,null,null,null);t.default=_.exports}}]);