(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{414:function(t,_,v){"use strict";v.r(_);var r=v(1),a=Object(r.a)({},(function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"_10-从输入url到页面加载完发生了什么？"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_10-从输入url到页面加载完发生了什么？"}},[t._v("#")]),t._v(" 10. 从输入url到页面加载完发生了什么？")]),t._v(" "),v("p"),v("div",{staticClass:"table-of-contents"},[v("ul",[v("li",[v("a",{attrs:{href:"#流程"}},[t._v("流程")])]),v("li",[v("a",{attrs:{href:"#_1-dns查询"}},[t._v("1. DNS查询")]),v("ul",[v("li",[v("a",{attrs:{href:"#路由器缓存"}},[t._v("路由器缓存")])]),v("li",[v("a",{attrs:{href:"#根域名服务器查询"}},[t._v("根域名服务器查询")])])])]),v("li",[v("a",{attrs:{href:"#_2-发送请求"}},[t._v("2. 发送请求")]),v("ul",[v("li",[v("a",{attrs:{href:"#涉及到的层级"}},[t._v("涉及到的层级")])]),v("li",[v("a",{attrs:{href:"#协议"}},[t._v("协议")])]),v("li",[v("a",{attrs:{href:"#应用层（http协议）"}},[t._v("应用层（HTTP协议）")])]),v("li",[v("a",{attrs:{href:"#传输层（tcp协议）"}},[t._v("传输层（TCP协议）")])]),v("li",[v("a",{attrs:{href:"#网络层（ip协议）"}},[t._v("网络层（IP协议）")])]),v("li",[v("a",{attrs:{href:"#链路层"}},[t._v("链路层")])])])]),v("li",[v("a",{attrs:{href:"#_3-服务器处理请求并返回http报文"}},[t._v("3. 服务器处理请求并返回HTTP报文")])]),v("li",[v("a",{attrs:{href:"#_4-浏览器接收响应"}},[t._v("4. 浏览器接收响应")])]),v("li",[v("a",{attrs:{href:"#_5-浏览器解析渲染页面"}},[t._v("5. 浏览器解析渲染页面")]),v("ul",[v("li",[v("a",{attrs:{href:"#渲染阻塞"}},[t._v("渲染阻塞")])]),v("li",[v("a",{attrs:{href:"#回流-reflow-与重绘-repaint"}},[t._v("回流(reflow)与重绘(repaint)")])]),v("li",[v("a",{attrs:{href:"#js编译和执行"}},[t._v("js编译和执行")])])])]),v("li",[v("a",{attrs:{href:"#_6-关闭tcp连接"}},[t._v("6. 关闭TCP连接")])])])]),v("p"),t._v(" "),v("h2",{attrs:{id:"流程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#流程"}},[t._v("#")]),t._v(" 流程")]),t._v(" "),v("ol",[v("li",[t._v("DNS查询")]),t._v(" "),v("li",[t._v("浏览器发送请求")]),t._v(" "),v("li",[t._v("服务器处理请求并返回HTTP报文")]),t._v(" "),v("li",[t._v("浏览器接收响应")]),t._v(" "),v("li",[t._v("浏览器解析渲染页面")]),t._v(" "),v("li",[t._v("关闭TCP连接（http1.1默认是"),v("code",[t._v("Connection: Keep-Alive")]),t._v("所以不会关闭连接，http1.0默认是"),v("code",[t._v("Connection: close")]),t._v("响应后就会关闭连接，一般来说这个可有可无，一般在标签关闭时触发）")])]),t._v(" "),v("p",[t._v("如果浏览器地址栏输入的是一个域名地址则进入流程，如果不是一个域名地址则进行默认搜索。")]),t._v(" "),v("h2",{attrs:{id:"_1-dns查询"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-dns查询"}},[t._v("#")]),t._v(" 1. DNS查询")]),t._v(" "),v("p",[t._v("DNS解析的顺序为：")]),t._v(" "),v("ul",[v("li",[t._v("浏览器缓存")]),t._v(" "),v("li",[t._v("本地hosts文件")]),t._v(" "),v("li",[t._v("系统缓存（运行内存中的缓存）")]),t._v(" "),v("li",[t._v("路由器缓存")]),t._v(" "),v("li",[t._v("根域名服务器查询")])]),t._v(" "),v("h3",{attrs:{id:"路由器缓存"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#路由器缓存"}},[t._v("#")]),t._v(" 路由器缓存")]),t._v(" "),v("p",[t._v("有些路由器也有DNS缓存的功能，访问过的域名会存在路由器上。")]),t._v(" "),v("h3",{attrs:{id:"根域名服务器查询"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#根域名服务器查询"}},[t._v("#")]),t._v(" 根域名服务器查询")]),t._v(" "),v("p",[v("img",{attrs:{src:"/Blog/images/Other/dns%E6%9F%A5%E8%AF%A2.jpg",alt:"dns查询"}})]),t._v(" "),v("p",[v("strong",[t._v("递归过程")]),t._v("：主机→本地DNS服务器→其他DNS服务器（如：我要找一个苹果吃，找到了A，问A有没有，A说我帮你去找B，B可能有，果真B有，然后B将苹果给了A，A再将苹果给我，这就是递归）。一路查下去中间不返回，得到最终结果才返回信息（浏览器到本地DNS服务器的过程）")]),t._v(" "),v("p",[v("strong",[t._v("迭代过程")]),t._v("：本地DNS服务器→根服务器，本地DNS服务器→顶级域名服务器，本地DNS服务器→权限域名服务器；（如：我要找一个苹果，找到了A，A说我也没有，B可能有，你去找B吧；我又找B，B说我也没有，你去找C吧，我又去找C，终于找到了苹果，这就是迭代的过程）。就是本地DNS服务器到根域名服务器查询的方式")]),t._v(" "),v("p",[t._v("这里可能会发生DNS劫持。"),v("br"),t._v("\nDNS客户端和本地名称服务器是递归，而本地名称服务器和其他名称服务器之间是迭代。")]),t._v(" "),v("h2",{attrs:{id:"_2-发送请求"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-发送请求"}},[t._v("#")]),t._v(" 2. 发送请求")]),t._v(" "),v("h3",{attrs:{id:"涉及到的层级"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#涉及到的层级"}},[t._v("#")]),t._v(" 涉及到的层级")]),t._v(" "),v("ol",[v("li",[v("strong",[t._v("应用层")]),t._v("决定了向用户提供应用服务时通信的活动。")]),t._v(" "),v("li",[v("strong",[t._v("传输层")]),t._v("提供处于网络连接中的两台计算机之间的数据传输。在传输层有两个性质不同的协议：TCP（传输控制协议）和UDP（用户数据报协议）。")]),t._v(" "),v("li",[v("strong",[t._v("网络层")]),t._v("用来处理在网络上流动的数据包。")]),t._v(" "),v("li",[v("strong",[t._v("数据链路层")]),t._v("用来处理连接网络的硬件部分。包括控制操作系统、硬件的设备驱动、NIC（网卡）、光纤等。")])]),t._v(" "),v("h3",{attrs:{id:"协议"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#协议"}},[t._v("#")]),t._v(" 协议")]),t._v(" "),v("p",[v("strong",[t._v("HTTP协议")]),t._v("：生成HTTP请求报文。"),v("br"),t._v(" "),v("strong",[t._v("TCP协议")]),t._v("：建立连接，销毁连接，分割数据。"),v("br"),t._v(" "),v("strong",[t._v("IP协议")]),t._v("：确认传输地址。")]),t._v(" "),v("p",[v("img",{attrs:{src:"/Blog/images/HTTP%E5%9B%BE%E8%A7%A3/1%E9%80%9A%E4%BF%A1%E4%BC%A0%E8%BE%93%E6%B5%81.png",alt:"通信传输流"}})]),t._v(" "),v("p",[t._v("发送端从应用层往下走。发送端在层与层之间传输数据时，每经过一层时必定会被打上一个该层所属的首部信息。")]),t._v(" "),v("h3",{attrs:{id:"应用层（http协议）"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#应用层（http协议）"}},[t._v("#")]),t._v(" 应用层（HTTP协议）")]),t._v(" "),v("p",[t._v("首先作为发送端的客户端在应用层（HTTP协议）发出一个想看某个Web页面的请求。")]),t._v(" "),v("h3",{attrs:{id:"传输层（tcp协议）"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#传输层（tcp协议）"}},[t._v("#")]),t._v(" 传输层（TCP协议）")]),t._v(" "),v("p",[t._v("先进行三次握手连接。为了传输方便，在传输层（TCP协议）把应用层处收到的数据进行分割，并在各个报文上打上标记序号及端口号后转发给网络层。")]),t._v(" "),v("h4",{attrs:{id:"三次握手"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#三次握手"}},[t._v("#")]),t._v(" 三次握手")]),t._v(" "),v("p",[t._v("三次握手用以"),v("strong",[t._v("同步客户端和服务端的序列号和确认号")]),t._v("，并交换 TCP 窗口大小信息。")]),t._v(" "),v("p",[v("img",{attrs:{src:"/Blog/images/Other/tcp%E8%BF%9E%E6%8E%A5.png",alt:"tcp连接"}})]),t._v(" "),v("p",[t._v("Ack：Acknowledge，告知已收到"),v("br"),t._v("\nFin：Finally，结束会话"),v("br"),t._v("\nSeq：sequence，序列号"),v("br"),t._v("\nSYN：synchronize，同步; 表示开始会话请求")]),t._v(" "),v("p",[v("strong",[t._v("三次握手的本质是确认通信双方收发数据的能力")])]),t._v(" "),v("p",[t._v("首先，我让信使运输一份信件给对方，对方收到了，那么他就知道了"),v("strong",[t._v("我的发件能力和他的收件能力")]),t._v("是可以的。"),v("br"),t._v("\n于是他给我回信，我若收到了，我便知"),v("strong",[t._v("我的发件能力和他的收件能力")]),t._v("是可以的，并且"),v("strong",[t._v("他的发件能力和我的收件能力")]),t._v("是可以。"),v("br"),t._v("\n然而此时他还不知道"),v("strong",[t._v("他的发件能力和我的收件能力")]),t._v("到底可不可以，于是我最后回馈一次，他若收到了，他便清楚了"),v("strong",[t._v("他的发件能力和我的收件能力")]),t._v("是可以的。")]),t._v(" "),v("h3",{attrs:{id:"网络层（ip协议）"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#网络层（ip协议）"}},[t._v("#")]),t._v(" 网络层（IP协议）")]),t._v(" "),v("p",[t._v("在网络层（IP协议），增加作为通信目的地的MAC地址后转发给链路层。")]),t._v(" "),v("h3",{attrs:{id:"链路层"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#链路层"}},[t._v("#")]),t._v(" 链路层")]),t._v(" "),v("p",[t._v("连接客户端和服务器。")]),t._v(" "),v("h2",{attrs:{id:"_3-服务器处理请求并返回http报文"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-服务器处理请求并返回http报文"}},[t._v("#")]),t._v(" 3. 服务器处理请求并返回HTTP报文")]),t._v(" "),v("p",[t._v("接收端则从链路层往上走（见2中的图）。接收端在层与层传输数据时，每经过一层时会把对应的首部消去。"),v("br"),t._v("\n接收端的服务器在链路层接收到数据，按顺序往上层发送，在传输层重组报文，一直到应用层。这时接收端接收到客户端发送的数据。")]),t._v(" "),v("p",[t._v("根据请求头和服务器配置处理请求后返回报文。")]),t._v(" "),v("h2",{attrs:{id:"_4-浏览器接收响应"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-浏览器接收响应"}},[t._v("#")]),t._v(" 4. 浏览器接收响应")]),t._v(" "),v("ul",[v("li",[t._v("根据响应头状态码做不同的事（比如重定向）")]),t._v(" "),v("li",[t._v("对响应资源缓存（更新默认的请求头）")])]),t._v(" "),v("p",[t._v("接下来根据MIME类型去解析响应内容。")]),t._v(" "),v("h2",{attrs:{id:"_5-浏览器解析渲染页面"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5-浏览器解析渲染页面"}},[t._v("#")]),t._v(" 5. 浏览器解析渲染页面")]),t._v(" "),v("p",[v("img",{attrs:{src:"/Blog/images/Other/%E9%A1%B5%E9%9D%A2%E6%B8%B2%E6%9F%93.jpg",alt:"页面渲染"}})]),t._v(" "),v("ul",[v("li",[t._v("HTML代码转化成DOM")]),t._v(" "),v("li",[t._v("CSS代码转化成CSSOM（CSS Object Model）")]),t._v(" "),v("li",[t._v("结合DOM和CSSOM，生成一棵渲染树（包含每个节点的视觉信息）")]),t._v(" "),v("li",[t._v("生成布局（layout），即将所有渲染树的所有节点进行平面合成")]),t._v(" "),v("li",[t._v("将布局绘制（paint）在屏幕上")])]),t._v(" "),v("h3",{attrs:{id:"渲染阻塞"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#渲染阻塞"}},[t._v("#")]),t._v(" 渲染阻塞")]),t._v(" "),v("p",[t._v("当遇到一个script标签时，DOM 构建会被暂停，直至脚本完成执行，然后继续构建 DOM 树。")]),t._v(" "),v("p",[t._v("但如果 JS 依赖 CSS 样式，而CSS还没有被下载和构建时，JS样式就会计算错误。DOM树与CSSOM合并称为渲染树就会延迟，直至 CSS Rules 被构建。")]),t._v(" "),v("p",[t._v("所有我们知道："),v("br"),t._v("\nCSS 会阻塞 DOM 渲染"),v("br"),t._v("\nJS 会阻塞后面的 DOM 解析")]),t._v(" "),v("p",[t._v("为了避免这种情况，应该以下原则："),v("br"),t._v("\nCSS 资源排在 JavaScript 资源前面\nJS 放在 HTML 最底部，也就是 "),t._v("前\n另外，如果要改变阻塞模式，可以使用 defer 与 async")]),t._v(" "),v("h3",{attrs:{id:"回流-reflow-与重绘-repaint"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#回流-reflow-与重绘-repaint"}},[t._v("#")]),t._v(" 回流(reflow)与重绘(repaint)")]),t._v(" "),v("p",[v("strong",[t._v("回流(reflow)")]),v("br"),t._v("\n当浏览器发现某个部分发现变化影响了布局时，需要倒回去重新渲染，会从html标签开始递归往下，重新计算位置和大小。"),v("br"),t._v("\nreflow基本是无法避免的，因为当你滑动一下鼠标、resize 窗口，页面就会产生变化。")]),t._v(" "),v("p",[v("strong",[t._v("重绘(repaint)")]),v("br"),t._v("\n改变了某个元素的背景色、文字颜色等等不会影响周围元素的位置变化时，就会发生重绘。"),v("br"),t._v("\n每次重绘后，浏览器还需要合并渲染层并输出到屏幕上。")]),t._v(" "),v("p",[t._v("回流的成本要比重绘高很多，所以我们应该尽量避免产生回流。")]),t._v(" "),v("p",[v("code",[t._v("display:none")]),t._v(" 会触发回流，而 "),v("code",[t._v("visibility:hidden")]),t._v(" 只会触发重绘。")]),t._v(" "),v("h3",{attrs:{id:"js编译和执行"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#js编译和执行"}},[t._v("#")]),t._v(" js编译和执行")]),t._v(" "),v("p",[v("img",{attrs:{src:"/Blog/images/Other/js%E7%BC%96%E8%AF%91%E6%89%A7%E8%A1%8C.jpg",alt:"js编译执行"}})]),t._v(" "),v("h2",{attrs:{id:"_6-关闭tcp连接"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_6-关闭tcp连接"}},[t._v("#")]),t._v(" 6. 关闭TCP连接")]),t._v(" "),v("p",[v("img",{attrs:{src:"/Blog/images/Other/tcp%E5%9B%9B%E6%AC%A1%E6%8C%A5%E6%89%8B.png",alt:"tcp四次挥手"}})]),t._v(" "),v("ol",[v("li",[t._v("A——>B ：A告诉B：“我发完了”；")]),t._v(" "),v("li",[t._v("B——>A：B告诉A：“好的，我知道你发完了”")]),t._v(" "),v("li",[t._v("B——>A：B告诉A：“我收完了”；")]),t._v(" "),v("li",[t._v("A——>B：A告诉B：“好的，我知道你发收完了")])])])}),[],!1,null,null,null);_.default=a.exports}}]);