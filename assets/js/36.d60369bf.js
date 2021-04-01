(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{394:function(t,a,s){"use strict";s.r(a);var n=s(45),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"使用-gpu-加速计算"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-gpu-加速计算"}},[t._v("#")]),t._v(" 使用 GPU 加速计算")]),t._v(" "),s("h2",{attrs:{id:"概述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),s("p",[t._v("默认情况下，PyTorch 中的 GPU 操作是异步的。\n当调用一个使用 GPU 的函数时，这些操作会在特定的设备上排队但不一定会在稍后立即执行。")]),t._v(" "),s("p",[t._v("使用 "),s("code",[t._v("nvidia-smi")]),t._v(" 查看 GPU 使用情况，由于此命令非常常用，建议设置 alias："),s("code",[t._v("alias ns=nvidia-smi")]),t._v("。")]),t._v(" "),s("h2",{attrs:{id:"常用函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常用函数"}},[t._v("#")]),t._v(" 常用函数")]),t._v(" "),s("ol",[s("li",[s("code",[t._v("torch.cuda.is_available()")]),t._v("：有无可用的 GPU 设备。")]),t._v(" "),s("li",[s("code",[t._v("torch.cuda.device_count()")]),t._v("：可用的 GPU 设备数量。")]),t._v(" "),s("li",[s("code",[t._v("torch.cuda.current_device()")]),t._v("：当前 GPU 设备索引。")]),t._v(" "),s("li",[s("code",[t._v("torch.cuda.get_device_name(index)")]),t._v("：根据索引查询 GPU 的名字。")])]),t._v(" "),s("h2",{attrs:{id:"设备"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设备"}},[t._v("#")]),t._v(" 设备")]),t._v(" "),s("ol",[s("li",[t._v("可与使用字符串，例如："),s("code",[t._v('"cuda:1"')]),t._v("，"),s("code",[t._v("cpu")]),t._v("。")]),t._v(" "),s("li",[t._v("也可以使用 "),s("code",[t._v("torch.device")]),t._v(" 对象：\n"),s("ol",[s("li",[t._v("CPU："),s("code",[t._v("torch.device('cpu')")])]),t._v(" "),s("li",[t._v("当前 cuda 设备："),s("code",[t._v("torch.device('cuda')")])]),t._v(" "),s("li",[t._v("指定 cuda 设备："),s("code",[t._v("torch.device('cuda:0')")])])])])]),t._v(" "),s("h2",{attrs:{id:"tensor"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tensor"}},[t._v("#")]),t._v(" Tensor")]),t._v(" "),s("p",[t._v("默认情况下存储在内存中。")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 创建时指定设备")]),t._v("\nx "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" torch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tensor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" device"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("device"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nx "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" torch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tensor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("to"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("device"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 将 x 复制到第 i 个 GPU 设备上")]),t._v("\nx "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cuda"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看 x 在哪一个设备上")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("device"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("运算的规则：")]),t._v(" "),s("ol",[s("li",[t._v("参与运算的 Tensor 必须在同一个设备上。")]),t._v(" "),s("li",[t._v("产生的结果存储在与原 Tensor 相同的设备上。")])]),t._v(" "),s("h2",{attrs:{id:"model"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#model"}},[t._v("#")]),t._v(" Model")]),t._v(" "),s("p",[t._v("模型也必须先转换到 GPU 上才能使用 GPU 计算。")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 注意这里和 Tensor 的 cuda() 方法有所区别，这里是 in place 的")]),t._v("\nmodel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cuda"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'cuda:1'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看模型在哪一个设备上")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("model"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("device"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("输入模型的 Tensor 必须和模型在同一个设备上。")]),t._v(" "),s("h2",{attrs:{id:"单机多-gpu-计算"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#单机多-gpu-计算"}},[t._v("#")]),t._v(" 单机多 GPU 计算")]),t._v(" "),s("p",[t._v("使用 torch.nn.DataParallel 将模型包装一下即可：")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 默认使用所有 GPU")]),t._v("\nnet "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" torch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DataParallel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("net"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 可以设置只使用指定的 GPU，例如 0 和 3 号 GPU")]),t._v("\nnet "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" torch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DataParallel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("net"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" device_ids"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("关于模型的保存："),s("code",[t._v("DataParallel")]),t._v(" 实际上也是一个 "),s("code",[t._v("nn.Module")]),t._v("，其中有一个 "),s("code",[t._v("module")]),t._v(" 就是我们的实际模型，\n保存的时候只保存 "),s("code",[t._v("net.module")]),t._v(" 就好：")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("torch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("save"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("net"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state_dict"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./model.pt"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nnew_net"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("load_state_dict"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("torch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("load"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./model.pt"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n")])])]),s("p",[t._v("或者就先给 net 包装一下，再去加载，不推荐这种方式：")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("net "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" torch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DataParallel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("net"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nnet"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("load_state_dict"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("torch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("load"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./model.pt"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"分布式计算"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分布式计算"}},[t._v("#")]),t._v(" 分布式计算")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://pytorch.org/tutorials/intermediate/dist_tuto.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://pytorch.org/tutorials/intermediate/dist_tuto.html"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"参考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),s("ol",[s("li",[s("a",{attrs:{href:"https://tangshusen.me/Dive-into-DL-PyTorch/#/chapter04_DL_computation/4.6_use-gpu",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://tangshusen.me/Dive-into-DL-PyTorch/#/chapter04_DL_computation/4.6_use-gpu"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://tangshusen.me/Dive-into-DL-PyTorch/#/chapter08_computational-performance/8.2_async-computation",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://tangshusen.me/Dive-into-DL-PyTorch/#/chapter08_computational-performance/8.2_async-computation"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://tangshusen.me/Dive-into-DL-PyTorch/#/chapter08_computational-performance/8.4_multiple-gpus",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://tangshusen.me/Dive-into-DL-PyTorch/#/chapter08_computational-performance/8.4_multiple-gpus"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=e.exports}}]);