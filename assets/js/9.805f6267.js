(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{367:function(s,t,a){"use strict";a.r(t);var n=a(45),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"常用命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用命令"}},[s._v("#")]),s._v(" 常用命令")]),s._v(" "),a("h2",{attrs:{id:"任务执行相关"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#任务执行相关"}},[s._v("#")]),s._v(" 任务执行相关")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 10 分钟后执行某个命令")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sleep")]),s._v(" 10m "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" a_command_will_run\n")])])]),a("h2",{attrs:{id:"网络相关"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#网络相关"}},[s._v("#")]),s._v(" 网络相关")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看本机网络")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ifconfig")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看局域网下所有 ip 和 mac 地址（arp 表）")]),s._v("\narp -a\n")])])]),a("h2",{attrs:{id:"磁盘管理相关"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#磁盘管理相关"}},[s._v("#")]),s._v(" 磁盘管理相关")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 通过网络复制磁盘")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 接收端先运行以下命令")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("nc")]),s._v(" -l -p xxx "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("dd")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("of")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/dev/sdb\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 发送端之后运行以下命令")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("dd")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("if")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/dev/sda "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("nc")]),s._v(" x.x.x.x xxx\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 列出所有分区")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("fdisk")]),s._v(" -l\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 取消挂载 U 盘")]),s._v("\ndiskutil unmount /dev/sdb\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 烧录 iso 镜像，之后运行 sync 同步磁盘缓存")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("dd")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("bs")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("4M "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("if")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("~/xxx.iso "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("of")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/dev/sdb "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sync")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 弹出 U　盘")]),s._v("\ndiskutil "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("eject")]),s._v(" /dev/sdb\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);