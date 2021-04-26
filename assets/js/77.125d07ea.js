(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{465:function(t,_,v){"use strict";v.r(_);var a=v(1),r=Object(a.a)({},(function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"第3章-http报文内的http信息"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#第3章-http报文内的http信息"}},[t._v("#")]),t._v(" 第3章 HTTP报文内的HTTP信息")]),t._v(" "),v("p"),v("div",{staticClass:"table-of-contents"},[v("ul",[v("li",[v("a",{attrs:{href:"#_1-http报文"}},[t._v("1. HTTP报文")])]),v("li",[v("a",{attrs:{href:"#_2-请求报文及响应报文的结构"}},[t._v("2. 请求报文及响应报文的结构")])]),v("li",[v("a",{attrs:{href:"#_3-编码提升传输速率"}},[t._v("3. 编码提升传输速率")]),v("ul",[v("li",[v("a",{attrs:{href:"#_3-1-报文主体和实体主体的差异"}},[t._v("3.1 报文主体和实体主体的差异")])]),v("li",[v("a",{attrs:{href:"#_3-2-压缩传输的内容编码"}},[t._v("3.2 压缩传输的内容编码")])]),v("li",[v("a",{attrs:{href:"#_3-3-分割发送的分块传输编码"}},[t._v("3.3 分割发送的分块传输编码")])])])]),v("li",[v("a",{attrs:{href:"#_4-发送多种数据的多部分对象集合"}},[t._v("4. 发送多种数据的多部分对象集合")])]),v("li",[v("a",{attrs:{href:"#_5-获取部分内容的范围请求"}},[t._v("5. 获取部分内容的范围请求")])]),v("li",[v("a",{attrs:{href:"#_6-内容协商返回最合适的内容"}},[t._v("6. 内容协商返回最合适的内容")])])])]),v("p"),t._v(" "),v("p",[t._v("HTTP通信过程包括从客户端发往服务器端的请求及从服务器端返回客户端的响应。")]),t._v(" "),v("h2",{attrs:{id:"_1-http报文"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-http报文"}},[t._v("#")]),t._v(" 1. HTTP报文")]),t._v(" "),v("p",[t._v("HTTP协议交互的信息称为HTTP报文。请求端的HTTP报文叫"),v("strong",[t._v("请求报文")]),t._v("，服务端的叫"),v("strong",[t._v("响应报文")]),t._v("。HTTP报文是由多行数据构成的字符串文本。"),v("br"),t._v("\nHTTP报文分为报文首部和报文主体两块。")]),t._v(" "),v("h2",{attrs:{id:"_2-请求报文及响应报文的结构"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-请求报文及响应报文的结构"}},[t._v("#")]),t._v(" 2. 请求报文及响应报文的结构")]),t._v(" "),v("p",[v("img",{attrs:{src:"/Blog/images/HTTP%E5%9B%BE%E8%A7%A3/3%E6%8A%A5%E6%96%87%E7%BB%93%E6%9E%84.png",alt:"报文结构"}}),t._v(" "),v("img",{attrs:{src:"/Blog/images/HTTP%E5%9B%BE%E8%A7%A3/3%E6%8A%A5%E6%96%87%E5%AE%9E%E4%BE%8B.png",alt:"报文实例"}})]),t._v(" "),v("h2",{attrs:{id:"_3-编码提升传输速率"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-编码提升传输速率"}},[t._v("#")]),t._v(" 3. 编码提升传输速率")]),t._v(" "),v("p",[t._v("在传输中可以通过编码提升传输速率。通过在传输时编码，能够处理大量的访问请求。但是会消耗更多的CPU等资源。")]),t._v(" "),v("h3",{attrs:{id:"_3-1-报文主体和实体主体的差异"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-报文主体和实体主体的差异"}},[t._v("#")]),t._v(" 3.1 报文主体和实体主体的差异")]),t._v(" "),v("p",[t._v("实体（entity），作为请求或响应的有效载荷数据被传输，其内容由实体首部和实体主体组成。")]),t._v(" "),v("p",[t._v("HTTP报文的主体用于传输请求或者响应的实体主体。"),v("br"),t._v("\n通常，报文主体等于实体主体。只有当传输中进行编码操作时，实体主体内容发送变化，才导致它和报文主体产生差异。")]),t._v(" "),v("h3",{attrs:{id:"_3-2-压缩传输的内容编码"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-压缩传输的内容编码"}},[t._v("#")]),t._v(" 3.2 压缩传输的内容编码")]),t._v(" "),v("p",[t._v("内容编码指明应用在实体内容上的编码格式，并保持实体信息原样压缩。内容编码后的实体由客户端接收并负责解码。\n"),v("img",{attrs:{src:"/Blog/images/HTTP%E5%9B%BE%E8%A7%A3/3%E5%86%85%E5%AE%B9%E7%BC%96%E7%A0%81.png",alt:"内容编码"}})]),t._v(" "),v("p",[t._v("常见的内容编码有以下几种：")]),t._v(" "),v("ul",[v("li",[t._v("gzip")]),t._v(" "),v("li",[t._v("compress（UNIX系统的标准压缩）")]),t._v(" "),v("li",[t._v("deflate（zlib）")]),t._v(" "),v("li",[t._v("identity（不进行编码）")])]),t._v(" "),v("h3",{attrs:{id:"_3-3-分割发送的分块传输编码"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-分割发送的分块传输编码"}},[t._v("#")]),t._v(" 3.3 分割发送的分块传输编码")]),t._v(" "),v("p",[t._v("在HTTP通信过程中，请求的编码实体资源尚未全部传输完成之前，浏览器无法显示请求页面。在传输大容量数据时，通过把数据分割成多块，能够让浏览器逐步显示页面。把实体主体分块的功能称为"),v("strong",[t._v("分块传输编码")]),t._v("。\n"),v("img",{attrs:{src:"/Blog/images/HTTP%E5%9B%BE%E8%A7%A3/3%E5%88%86%E5%9D%97%E4%BC%A0%E8%BE%93%E7%BC%96%E7%A0%81.png",alt:"分块传输编码"}})]),t._v(" "),v("p",[t._v("分块传输编码会将实体主体分为多个部分。每一块都会用16进制来标记块大小，最后一块会使用“0(CR+LF)”来标记。")]),t._v(" "),v("p",[t._v("实体主体会由接收的客户端负责解码，恢复到编码前的实体主体。")]),t._v(" "),v("h2",{attrs:{id:"_4-发送多种数据的多部分对象集合"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-发送多种数据的多部分对象集合"}},[t._v("#")]),t._v(" 4. 发送多种数据的多部分对象集合")]),t._v(" "),v("p",[t._v("发送邮件时，可以在邮件中添加多份附件。这是因为采用了"),v("strong",[t._v("MIME")]),t._v("（Multipurpose Internet Mail Extensions,多用途因特网邮件扩展）机制，它允许邮件处理文本、图片、视频等多个不同类型的数据。")]),t._v(" "),v("p",[t._v("在MIME扩展中会使用一种称为"),v("strong",[t._v("多部分对象集合")]),t._v("（Multipart）的方法，来容纳多份不同类型的数据。")]),t._v(" "),v("p",[t._v("多部分对象集合包含的对象如下：")]),t._v(" "),v("ul",[v("li",[t._v("multipart/form-data")])]),t._v(" "),v("p",[t._v("在Web表单文件上传时使用。\n"),v("img",{attrs:{src:"/Blog/images/HTTP%E5%9B%BE%E8%A7%A3/3form-data.png",alt:"3form-data"}})]),t._v(" "),v("ul",[v("li",[t._v("multipart/byteranges")])]),t._v(" "),v("p",[t._v("状态码206（部分内容）响应报文包含了多个范围内容时使用。\n"),v("img",{attrs:{src:"/Blog/images/HTTP%E5%9B%BE%E8%A7%A3/3byteranges.png",alt:"3byteranges"}})]),t._v(" "),v("p",[t._v("在HTTP报文中使用多部分对象集合时，需要在首部字段里加上Content-Type。使用boundary字符串来划分多部分对象集合指明的各类实体。在boundary字符串指定的各个实体的起始行之前插入‘--’标记，而在多部分对象集合对应的字符串的最后插入‘--’标记作为结束。")]),t._v(" "),v("h2",{attrs:{id:"_5-获取部分内容的范围请求"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5-获取部分内容的范围请求"}},[t._v("#")]),t._v(" 5. 获取部分内容的范围请求")]),t._v(" "),v("p",[t._v("以前如果下载文件过程中遇到网络中断的情况，就必须重头开始。为了解决上述问题，需要一种可恢复的机制。所谓恢复是指能从之前下载中断处恢复下载。")]),t._v(" "),v("p",[t._v("对一份10000字节大小的资源，如果使用"),v("strong",[t._v("范围请求")]),t._v("，可以只请求5000-10000字节内的资源。\n"),v("img",{attrs:{src:"/Blog/images/HTTP%E5%9B%BE%E8%A7%A3/3%E8%8C%83%E5%9B%B4%E8%AF%B7%E6%B1%82.png",alt:"3范围请求"}}),t._v("\n执行范围请求时，会用到首部字段Range来指定资源的byte范围：")]),t._v(" "),v("ul",[v("li",[t._v("5001~10000字节")])]),t._v(" "),v("blockquote",[v("p",[t._v("Range: bytes=5001-10000")])]),t._v(" "),v("ul",[v("li",[t._v("从5001字节之后全部的")])]),t._v(" "),v("blockquote",[v("p",[t._v("Range: bytes=5001-")])]),t._v(" "),v("ul",[v("li",[t._v("从一开始到3000字节和5000-7000字节的多重范围")])]),t._v(" "),v("blockquote",[v("p",[t._v("Range: bytes=0-3000,5000-7000")])]),t._v(" "),v("p",[v("strong",[t._v("针对范围请求，响应会返回状态码206 Partial Content的响应报文")]),t._v("。对于多重范围的范围请求，响应会在首部字段Content-Type标明multipart/byteranges后返回响应报文。")]),t._v(" "),v("p",[t._v("如果服务器无法响应范围请求，则会返回状态码200 OK和完整的实体内容。")]),t._v(" "),v("h2",{attrs:{id:"_6-内容协商返回最合适的内容"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_6-内容协商返回最合适的内容"}},[t._v("#")]),t._v(" 6. 内容协商返回最合适的内容")]),t._v(" "),v("p",[t._v("同一个网站可能有多份相同内容的页面。比如英语版和中文版的web页面。"),v("br"),t._v("\n当浏览器的默认语言为英文或中文，访问相同URI的web页面时，则会显示对应的英文或中文web页面。这样的机制称为"),v("strong",[t._v("内容协商")]),t._v("（Content Negotiation）")]),t._v(" "),v("p",[t._v("内容协商机制是指客户端和服务端就响应的资源内容进行交涉，然后提供给客户端最为合适的资源。内容协商会以语言、字符集、编码方式等为基准判断响应的资源。")]),t._v(" "),v("ul",[v("li",[t._v("Accept")]),t._v(" "),v("li",[t._v("Accept-Charset")]),t._v(" "),v("li",[t._v("Accept-Encoding")]),t._v(" "),v("li",[t._v("Accept-Language")]),t._v(" "),v("li",[t._v("Content-Language")])]),t._v(" "),v("p",[t._v("内容协商技术有三种类型：")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("服务器驱动协商"),v("br"),t._v("\n由服务器端进行内容协商。以请求首部字段为参考，在服务器端有服务器端进行内容协商。")])]),t._v(" "),v("li",[v("p",[t._v("客户端驱动协商"),v("br"),t._v("\n由客户端进行内容协商的方式。用户从浏览器显示的可选项列表中手动选择。比如按OS的类型或浏览器类型，自动切换为PC版页面或手机版页面。")])]),t._v(" "),v("li",[v("p",[t._v("透明协商"),v("br"),t._v("\n是服务器驱动和客户端驱动的结合体，是由服务器端和客户端各自进行内容协商的一种方法。")])])])])}),[],!1,null,null,null);_.default=r.exports}}]);