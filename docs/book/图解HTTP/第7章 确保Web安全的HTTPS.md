# 第7章 确保Web安全的HTTPS

[[toc]]

HTTP协议中有可能存在信息窃听或身份伪装等安全问题。

## 1. HTTP的缺点
- 通信使用明文，内容可能被窃听
- 不验证通信方的身份，有可能遭遇伪装
- 无法证明报文的完整性，有可能已遭篡改

### 1.1 通用使用明文可能被窃听
HTTP本身不具备加密的功能。

#### TCP/IP是可能被窃听的网络  
按TCP/IP协议族的工作机制，通信内容在所有的通信线路上都有可能遭到窥视。即使已加密处理过的通信，也会被窥视到通信内容。只是有可能让人无法破解报文信息的含义。

#### 加密处理防止内窃听  
- 通信的加密  
将通信加密。HTTP中没有加密机制，但可以通过和SSL（Secure Socket Layer,安全套接层）或TLS（Transport Layer Security，安全传输层协议）的组合使用，加密HTTP的通信内容。

用SSL建立安全通信线路之后，就可以在这条线路上进行HTTP通信了，与SSL组合使用的HTTP被称为HTTPS（超文本传输安全协议）。   
![HTTPS](/Blog/images/HTTP图解/7HTTPS.png)

- 内容的加密  
将参与通信内容本身加密的方式。由于HTTP协议中没有加密机制，那么就对HTTP协议传输的内容本身加密。这种情况下客户端需要对HTTP报文进行加密处理后再发送请求。

为了做到有效的内容加密，前提是要求客户端和服务器同时具备加密和解密机制。需要注意的是，内容仍然有被篡改的风险。

### 1.2 不验证通信方的身份就可能遭遇伪装
HTTP协议中的请求和响应不会对通信方进行确认。所以就有服务器是否是发送请求的真正主机，返回的响应是否真的返回到提出请求的客户端问题。

#### 任何人都可以发起请求
HTTP协议通信时，由于不存在确认通信方的处理步骤，任何人都可以发起请求。

HTTP协议的实现本身非常简单，不论是谁发送过来的请求都会返回响应，因此不确认通信方，会存在以下隐患：
- 无法确定请求发送至目标的Web服务器是否是按真实意图返回响应的那台服务器。有可能是已伪装的Web服务器。
- 无法确定响应返回到的客户端是否是按真实意图接收响应的那个客户端。有可能是已伪装的客户端。
- 无法确定正在通信的对方是否有访问权限。因为某些Web服务器上保存着重要的信息，只想发给特定用户通信的权限。
- 无法判定请求来自何方。
- 即使是无意义的请求也会全部接收，无法阻止海量请求下DoS攻击（拒绝服务攻击）

#### 查明对手的证书
HTTP不能确定通信方，但使用SSL则可以。**SSL不仅提供加密处理，而且还使用了一种被称为证书的手段，可用于确定通信方。**

证书是由值得信任的第三方机构颁发，用以证明服务器和客户端是实际存在的。伪造证书异常困难，所以只要能够确认通信方（客户端或服务端）持有的证书，即可判断通信方的真实意图。    
![证书](/Blog/images/HTTP图解/7证书.png)   
客户端持有证书即可完成个人身份的确认，也可用于对Web网站的认证环节。

### 1.3 无法证明报文的完整性，可能已遭篡改
#### 接收到的内容可能有误
HTTP无法证明通信的报文完整性，因此，在请求或响应送出之后直到对方接收之前的这段时间内，即使请求或响应的内容遭到篡改，也不知道。  
![篡改](/Blog/images/HTTP图解/7篡改.png)
请求或响应在传输途中，遭攻击者拦截并篡改内容的攻击称为中间人攻击（Man-in-the-Middle attack,MITM）。   
![中间人攻击](/Blog/images/HTTP图解/7中间人攻击.png)

#### 如何防止篡改
虽然有使用HTTP确定报文完整性的方法，但事实上并不便捷、可靠。其中常用的是MD5和SHA-1等散列值校验的方法，以及用来确认文件的数字签名方法。

## 2. HTTP+加密+认证+完整性保护=HTTPS
### 2.1 HTTP加上加密处理和认证以及完整性保护后就是HTTPS
![使用HTTPS](/Blog/images/HTTP图解/7使用HTTPS.png)   
使用HTTPS通信时，不再用http://,而是https://。

### 2.2 HTTPS是身披SSL外壳的HTTP
HTTPS并非应用层的一种协议。知识HTTP通信接口部分用SSL和TLS协议代替而已。

通常，HTTP直接和TCP通信。当使用SSL时，则变为先和SSL通信，再由SSL和TCP通信。   
![SSL](/Blog/images/HTTP图解/7SSL.png)   
采用SSL后，HTTP就拥有了HTTPS的加密、证书和完整性保护这些功能。

### 2.3 相互交换密钥的公开密钥加密技术
SSL采用一种叫做**公开密钥加密**的加密处理方式。

近代的加密方法中加密算法是公开的，而密钥却是保密的。通过这种方式得以保持加密方法的安全性。

加密和解密都会用到密钥。没有密钥就无法对密码解密。如果攻击者获得了密钥，那加密也就失去了意义。

#### 共享密钥加密的困境
**加密和解密同用一个密钥的方式称为共享密钥加密，也被叫做对称密钥加密。**  
![对称密钥加密](/Blog/images/HTTP图解/7对称密钥加密.png)   
以共享密钥方式加密时必须将密钥也发给对方。在互联网上转发密钥时，如果通信被监听那么密钥就可会落入攻击者手中，也就失去了加密的意义。另外还得设法安全的保管接收到的密钥。  
![对称密钥加密问题](/Blog/images/HTTP图解/7对称密钥加密问题.png)   

#### 使用两把密钥的公开密钥加密
公开密钥加密方式很好的解决了共享密钥加密的困难。

公开密钥加密使用一对非对称的密钥。一把叫做私有密钥，另一把叫做公开密钥。私有密钥不能让其他任何人知道，而公开密钥则可以随意发布，任何人都可以获得。

**使用公开密钥加密方式，发送密文的一方使用对方的公开密钥进行加密处理，对方接收到被加密的信息后，再使用自己的私有密钥进行解密**。利用这种方法，不需要发送用来解密的私有密钥，也不必担心密钥被攻击者窃听而盗走。

你可能会出现疑问？既然可以获取到公开密钥和密文，为什么不反向通过破解公开密钥解密密文。要想根据密文和公开密钥，恢复到信息原文是异常困难的，**因为解密过程就是在对离散对数进行求值，这并非轻而易举就能办到**。目前的技术来看进行破解是不现实的。  
![非对称密钥加密](/Blog/images/HTTP图解/7非对称密钥加密.png)   

#### HTTPS采用混合加密机制
**HTTPS采用共享密钥加密和公开密钥加密两者并用的混合加密机制。**若密钥能够实现安全交换，那有可能会考虑仅使用公开密钥加密来通信。但是**公开密钥加密与共享密钥加密相比，其处理速度要慢。**

所以应充分利用两者各自的优势，将多种方法组合起来用于通信。**在交换密钥环节使用公开密钥加密方式，之后的报文通信交换报文阶段则使用共享密钥加密方式。**  
![混合加密机制](/Blog/images/HTTP图解/7混合加密机制.png)   

### 2.4 证明公开密钥正确性的证书
如何证明公开密钥本身就是货真价实的公开密钥？公开密钥有可能在传输途中，已经被攻击者替换掉了。

为了解决这个问题，可以使用由数字证书认证机构（CA，Certificate Authority）和其相关颁发的公开密钥证书。数字证书认证机构处于客户端与服务器双方都可信赖的第三方机构的立场上。

流程是服务器的运营人员向数字证书认证机构提出公开密钥的申请。数字证书认证机构在判明提出申请者的身份后，会对已申请的公开密钥做数字签名，然后分配这个已签名的公开密钥，并将该公开密钥放入公钥证书后绑定在一起。服务器会将这份由数字证书认证机构颁发的公钥证书发送给客户端，以进行公开密钥加密方式通信。**公钥证书也叫做数字证书或证书**。

接到证书的客户端可使用数字证书认证机构的公开密钥，对那张证书上的数字签名进行验证，**验证通过，客户端可明确两件事：1.认证服务器的公开密钥的是真实有效的数字证书认证机构。2.服务器的公开密钥是值得信赖的**。

认证机关的公开密钥必须安全的转交给客户端。如何转交是一件很困难的事，因此，多数浏览器开发商发布版本时，会事先在内部植入常用认证机关的公开密钥。    
![数字证书](/Blog/images/HTTP图解/7数字证书.png)   

#### 可证明组织真实性的EV SSL证书
可确认对方服务器背后运营的企业是否真实存在。

#### 用以确认客户端的客户端证书
客户端证书进行客户端认证，证明服务器正在通信的对方始终是预料之内的客户端，作用和服务器证书是一样的。

想获取客户端证书，用户得自行安装客户端证书。但需要支付一定的费用。现状是，安全性极高的认证机构可颁发客户端证书但仅用于特殊用途的业务。比如可支撑客户端证书支出费用的业务。比如银行的网上银行就采用了客户端证书。

#### 由自认证机构颁发的证书称为自签名证书
自签名证书在互联网上不可作为证书使用。自认证机构能够产生的作用就是自己对外宣称我是XXX。

### 2.5 HTTPS的安全通信机制
![HTTPS的通信](/Blog/images/HTTP图解/7HTTPS的通信.png)   

#### SSL和TLS
HTTPS使用SSL（Secure Soket Layer,安全套接层）和TLS（Transport Layer Security,安全传输层协议）两个协议。以SSL3.0为基准制定了TLS1.0、TLS1.1、TLS1.2。TLS是以SSL为原型开发的协议，有时会统称该协议为SSL。当前主流版本是SSL3.0和TLS1.0。

#### SSL速度慢吗
HTTPS也存在一些问题，使用SSL时，它的处理速度会变慢。
![SSL速度](/Blog/images/HTTP图解/7SSL速度.png)   

SSL的慢分为两种：一是通信慢。二是由于大量消耗CPU及内存资源，导致处理速度变慢。

针对速度变慢的问题，并没有根本性的解决方案，我们会使用SSL加速器这种（专用服务器）硬件来改善该问题。用来分担负载。

#### 为什么不一直使用HTTPS?
因为加密通信会消耗更多的CPU及内存资源。如果每次通信都加密，会消耗相当多的资源。因此，如果是非敏感信息则使用HTTP通信，只有在包含个人信息等敏感数据时，才利于HTTPS加密通信。想要节约购买证书的开销也是原因之一，因为证书一年的授权价格大约需要600人民币。