(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{490:function(s,t,a){"use strict";a.r(t);var n=a(1),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"_3-dom编程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-dom编程"}},[s._v("#")]),s._v(" 3. DOM编程")]),s._v(" "),a("ol",[a("li",[s._v("把DOM和ECMAscript各自想象成一个岛屿，它们之间用收费桥梁连接。ECMAscript每次访问DOM，都要途径这座桥，并交纳过桥费。访问DOM次数越多，费用也就越高。访问DOM的次数越多，代码的运行速度越慢。因此，最好的做法是：减少访问DOM的次数，把运算尽量留在ECMAscript这一端处理。")]),s._v(" "),a("li",[s._v("在旧版本浏览器中，innerHTML比原生DOM方法（document.createElement()）快的多，但在基于webkit内核的浏览器中相反：用DOM方法略胜一筹。")]),s._v(" "),a("li",[s._v("节点克隆")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" dupNode "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cloneNode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("deep"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// node")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 将要被克隆的节点")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// dupNode")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 克隆生成的副本节点")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// deep 可选")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 是否采用深度克隆,如果为true,则该节点的所有后代节点也都会被克隆,如果为false,则只克隆该节点本身.")]),s._v("\n  element"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cloneNode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  element"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cloneNode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("ol",{attrs:{start:"4"}},[a("li",[s._v("读取一个集合的length比读取普通数组的length要慢的多，因为每次都要重新计算。")]),s._v(" "),a("li",[s._v("使用children替代childNodes会更快，因为集合项更少。HTML源码中的空白实际上是文本节点，而且它并不包含在children集合中。")])]),s._v(" "),a("h2",{attrs:{id:"重排（reflow）与重绘（repaint）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重排（reflow）与重绘（repaint）"}},[s._v("#")]),s._v(" 重排（reflow）与重绘（repaint）")]),s._v(" "),a("p",[s._v("当DOM的变化影响了元素的几何属性（宽和高），浏览器会使渲染树中受到影响的部分失效，并重新构造渲染树。这个过程是重排。"),a("br"),s._v("\n重排后，浏览器会重新绘制受影响的部分到屏幕中，这个过程称为重绘。\n"),a("br")]),s._v(" "),a("h3",{attrs:{id:"重排何时发生"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重排何时发生"}},[s._v("#")]),s._v(" 重排何时发生")]),s._v(" "),a("ul",[a("li",[s._v("添加或删除可见的DOM元素。")]),s._v(" "),a("li",[s._v("元素位置改变。")]),s._v(" "),a("li",[s._v("元素尺寸改变（margin、padding、边框厚度、width、height等）")]),s._v(" "),a("li",[s._v("内容改变（文本改变或图片被另一个不同尺寸的图片替换）")]),s._v(" "),a("li",[s._v("页面渲染器初始化。")]),s._v(" "),a("li",[s._v("浏览器窗口尺寸改变。")]),s._v(" "),a("li",[s._v("滚动条出现会使整个页面重排。")])]),s._v(" "),a("h3",{attrs:{id:"渲染树变化的排队与刷新"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#渲染树变化的排队与刷新"}},[s._v("#")]),s._v(" 渲染树变化的排队与刷新")]),s._v(" "),a("p",[s._v("大多数浏览器通过队列化修改并批量执行来优化重排过程。。获取布局信息的操作会导致队列刷新，以此来获取最新信息。")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//getComputedStyle()(currentStyle in IE)")]),s._v("\nbodystyle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("color"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'red'")]),s._v("\ntmp"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("computed"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("backgroundColor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nbodystyle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("color"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'#fff'")]),s._v("\ntmp"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("computed"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("backgroundImage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nbodystyle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("color"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'#000'")]),s._v("\ntmp"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("computed"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("backgroundSize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("以上代码每次获取样式属性都要刷新渲染队列并重排，重排了三次。可以改成下面这样只重排一次：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//getComputedStyle()(currentStyle in IE)")]),s._v("\nbodystyle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("color"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'#fff'")]),s._v("\nbodystyle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("color"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'#000'")]),s._v("\nbodystyle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("color"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'red'")]),s._v("\ntmp"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("computed"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("backgroundImage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\ntmp"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("computed"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("backgroundColor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\ntmp"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("computed"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("backgroundSize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("为了减少发生次数，应该合并多次对DOM的样式的修改，然后一次处理掉。")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//重排了三次")]),s._v("\nel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("style"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("borderLeft"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1px'")]),s._v("\nel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("style"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("borderRight"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1px'")]),s._v("\nel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("style"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("padding"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1px'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//重排了一次")]),s._v("\nel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("style"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cssText"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'border-left:1px;border-right:1px;'")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h2",{attrs:{id:"批量修改dom"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#批量修改dom"}},[s._v("#")]),s._v(" 批量修改DOM")]),s._v(" "),a("p",[s._v("可以通过以下步骤来减少重绘和重排的次数："),a("br")]),s._v(" "),a("ol",[a("li",[s._v("使文档脱离文档流。")]),s._v(" "),a("li",[s._v("对其应用多重改变。")]),s._v(" "),a("li",[s._v("把元素带回到文档中。"),a("br")])]),s._v(" "),a("p",[s._v("该过程会触发两次重排。"),a("br")]),s._v(" "),a("ol",[a("li",[s._v("通过改变display属性临时从文档中移除元素，改变完后，再恢复它。")]),s._v(" "),a("li",[s._v("在文档之外创建并更新一个文档片断（fragment），然后把它附加到原始列表中。文档片断是一个轻量级的document对象。文档片断一个便利的语法特性是当你附加一个片断到节点中时，实际上被添加的是该片断的子节点，而不是片断本身。（推荐方案，因为DOM遍历最少，重排次数最少）")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" fragment"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("createDocumentFragment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("appendDatatoElement")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("fragment"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("appendChild")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("fragment"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//以上代码只触发了一次重排")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("3.为需要修改的节点创建一个备份，然后对副本进行操作，完成后使用新节点替换旧的节点。（el.cloneNode(true)）"),a("br")]),s._v(" "),a("h2",{attrs:{id:"缓存布局信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缓存布局信息"}},[s._v("#")]),s._v(" 缓存布局信息")]),s._v(" "),a("p",[s._v("1.当你查询布局信息是，比如获取（offsets)、滚动位置、或计算出的样式值时，浏览器为了返回最新值，会刷新队列并应用所有改变。最好的做法是减少布局信息的获取次数，获取后把它赋值给局部变量，然后操作局部变量。")]),s._v(" "),a("h2",{attrs:{id:"事件委托"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事件委托"}},[s._v("#")]),s._v(" 事件委托")]),s._v(" "),a("ol",[a("li",[s._v("当页面中存在大量元素，而且每一个都要一次或多次绑定事件处理器时，这种情况可能会影响性能。"),a("br")]),s._v(" "),a("li",[s._v("可以使用事件委托。：事件逐层冒泡并能被父级元素捕获。使用事件代理，只需要给外层元素绑定一个处理器，就可以处理在其子元素上触发的所有事件。"),a("br")]),s._v(" "),a("li",[s._v("根据DOM标准每个事件都要经历三个阶段：")])]),s._v(" "),a("ul",[a("li",[s._v("捕获")]),s._v(" "),a("li",[s._v("到达目标")]),s._v(" "),a("li",[s._v("冒泡 "),a("br"),s._v("\nIE不支持捕获。"),a("br")])]),s._v(" "),a("p",[s._v("可以根据e.target判断是哪个元素。")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("preventDafault")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//阻止默认行为")]),s._v("\ne"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("stopPropagation")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//取消冒泡")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);