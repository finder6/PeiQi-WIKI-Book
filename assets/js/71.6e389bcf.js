(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{2910:function(s,t,a){"use strict";a.r(t);var e=a(64),n=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"个人扩展"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#个人扩展"}},[s._v("#")]),s._v(" 个人扩展")]),s._v(" "),t("h2",{attrs:{id:"文库主题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#文库主题"}},[s._v("#")]),s._v(" 文库主题")]),s._v(" "),t("p",[s._v("文库采用的是 "),t("code",[s._v("VuePressz主题：AntDocs")]),s._v("，在此感谢作者优秀的开源项目🌟")]),s._v(" "),t("p",[t("img",{attrs:{src:a(815),alt:"image-20220312115845201"}})]),s._v(" "),t("h2",{attrs:{id:"本地搭建"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#本地搭建"}},[s._v("#")]),s._v(" 本地搭建")]),s._v(" "),t("a-alert",{attrs:{type:"success",message:"文库支持多种快捷的方式在本地搭建随时查阅文库，项目图片均为本地化，推荐Docker或内网搭建，不推荐公网服务器部署",description:"",showIcon:""}}),s._v(" "),t("br"),s._v(" "),t("a-checkbox",{attrs:{checked:""}},[s._v("Yarn源码搭建 (个人二次扩展，需要编译环境)")]),t("br"),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/PeiQi0/PeiQi-WIKI-Book.git\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" PeiQi-WIKI-Book\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" vuepress-theme-antdocs "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" run dev\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("a-checkbox",{attrs:{checked:""}},[s._v("Html源码搭建 (无需编译环境，使用编译好的Html文件直接部署)")]),t("br"),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/PeiQi0/PeiQi-WIKI-Book.git "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Github,国外较快"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://gitee.com/peiqi0/PeiQi-WIKI-Book.git "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Gitee,国内较快"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" PeiQi-WIKI-Book/docs/.vuepress/dist\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" * 你的服务器Web目录\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("a-checkbox",{attrs:{checked:""}},[s._v("Docker搭建 (只需要Dokcer环境，快速搭建在各个环境中，定时同步Gitee自动更新)")]),t("br"),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" search peiqipeiqi\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" pull peiqipeiqi/peiqi_wiki:220420\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-t")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("65534")]),s._v(":80 "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--name")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"PeiQi_Wiki"')]),s._v(" peiqipeiqi/peiqi_wiki:220420\nUser/Pass: peiqi:peiqi "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("手动更新:进入Docker执行命令，/usr/share/nginx/html/synchronous.sh"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("a-alert",{attrs:{type:"success",message:"如果想要内部更新交流，需要打开插件添加评论插件密钥，生成方法见插件文档",description:"",showIcon:""}}),s._v(" "),t("br"),s._v(" "),t("p",[t("img",{attrs:{src:a(816),alt:"image-20220312125219622"}})]),s._v(" "),t("h2",{attrs:{id:"扩展使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#扩展使用"}},[s._v("#")]),s._v(" 扩展使用")]),s._v(" "),t("p",[s._v("本地使用并更新个人知识库之前需要了解"),t("code",[s._v("VuePress基本语法")]),s._v("，以及"),t("code",[s._v("Ant Design of Vue 组件")]),s._v("的使用")]),s._v(" "),t("div",{staticClass:"pic-plus",attrs:{align:"left"}},[t("img",{attrs:{width:"150",src:"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"}}),s._v(" "),t("span",[s._v("+")]),s._v(" "),t("img",{attrs:{width:"160",src:"https://qn.antdv.com/vue.png"}})]),s._v(" "),t("br"),s._v(" "),t("a-alert",{attrs:{type:"success",message:"文库目录大致分为下列图示，其中文章存放目录为 wiki(漏洞相关), ctf (CTF模块), redteam(红蓝对抗)，其他文件为介绍文档",description:"",showIcon:""}}),s._v(" "),t("br"),s._v(" "),t("p",[t("img",{attrs:{src:a(817),alt:"image-20220312120618163"}})]),s._v(" "),t("br"),s._v(" "),t("a-alert",{attrs:{type:"success",message:"颜色主题延续了之前Gitbook蓝色主题风格，你可以通过修改文件配置来配置自己喜欢的主题",description:"",showIcon:""}}),s._v(" "),t("br"),s._v(" "),t("p",[t("img",{attrs:{src:a(818),alt:"image-20220312121213398"}})]),s._v(" "),t("br"),s._v(" "),t("a-alert",{attrs:{type:"success",message:"文章添加请遵循 VuePress 的规范，在 sidebar_contents.js 文件中添加文件名，docs/.vuepress/config 目录下的文件中添加目录或侧边栏",description:"",showIcon:""}}),s._v(" "),t("br"),s._v(" "),t("p",[t("img",{attrs:{src:a(819),alt:"image-20220312121239000"}})])],1)}),[],!1,null,null,null);t.default=n.exports},815:function(s,t,a){s.exports=a.p+"assets/img/image-20220312115845201.ef571439.png"},816:function(s,t,a){s.exports=a.p+"assets/img/image-20220312125219622.82b9aa3a.png"},817:function(s,t,a){s.exports=a.p+"assets/img/image-20220312120618163.9115a0f9.png"},818:function(s,t,a){s.exports=a.p+"assets/img/image-20220312121213398.26f7adbc.png"},819:function(s,t,a){s.exports=a.p+"assets/img/image-20220312121239000.7310f7a5.png"}}]);