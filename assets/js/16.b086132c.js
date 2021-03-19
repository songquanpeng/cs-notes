(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{380:function(t,a,s){"use strict";s.r(a);var r=s(25),e=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"linux-下代理的设置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#linux-下代理的设置"}},[t._v("#")]),t._v(" Linux 下代理的设置")]),t._v(" "),s("h2",{attrs:{id:"clash-的配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#clash-的配置"}},[t._v("#")]),t._v(" Clash 的配置")]),t._v(" "),s("ol",[s("li",[t._v("设置自动后台启动："),s("a",{attrs:{href:"https://github.com/Dreamacro/clash/wiki/clash-as-a-daemon",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/Dreamacro/clash/wiki/clash-as-a-daemon"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("clash 本身提供了 rest api 接口，因此可以使用一些 dashboard 去管理，例如：\n"),s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/haishanh/yacd",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/haishanh/yacd"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/Dreamacro/clash-dashboard",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/Dreamacro/clash-dashboard"),s("OutboundLink")],1)])])]),t._v(" "),s("li",[t._v("教程："),s("a",{attrs:{href:"https://wmc1999.top/2020/08/21/linux-shi-yong-clash-dai-li/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://wmc1999.top/2020/08/21/linux-shi-yong-clash-dai-li/"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("也可试一下 GUI 版本： "),s("a",{attrs:{href:"https://github.com/SpongeNobody/Clashy",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/SpongeNobody/Clashy"),s("OutboundLink")],1)])]),t._v(" "),s("p",[t._v("我这里部署的一个版本："),s("a",{attrs:{href:"https://clash.justsong.cn/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://clash.justsong.cn/"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"设置环境变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设置环境变量"}},[t._v("#")]),t._v(" 设置环境变量")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("vi")]),t._v(" ~/.bashrc\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("ALL_PROXY")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("socks5://127.0.0.1:7890 \n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("http_proxy")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("http://127.0.0.1:7890\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("https_proxy")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("http://127.0.0.1:7890\n")])])]),s("p",[t._v("Gnome 下代理的设置："),s("code",[t._v("Settings -> Network -> Network Proxy -> Manual")])]),t._v(" "),s("h2",{attrs:{id:"apt-设置代理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#apt-设置代理"}},[t._v("#")]),t._v(" APT 设置代理")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("touch")]),t._v(" /etc/apt/apt.conf.d/proxy.conf\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Acquire::http::Proxy "')]),t._v("http://localhost:7890/"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('";"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tee")]),t._v(" -a /etc/apt/apt.conf.d/proxy.conf\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Acquire::https::Proxy "')]),t._v("http://localhost:7890/"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('";"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tee")]),t._v(" -a /etc/apt/apt.conf.d/proxy.conf\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);