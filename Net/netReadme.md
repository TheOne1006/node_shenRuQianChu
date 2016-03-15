# Node 模块

1. `net模块`-> TCP
2. `dgram模块`-> UDP
3. `http模块`-> http
4. `https模块`-> https

# net 模块

## 模块方法

1. `net.createServer( [options] [,connectionListener])`
  - 创建一个 TCP 服务器,
  - options 是包含下列缺省值的对象 `{allowHalfOpen:false}` ,允许半开链接
  - `connectionListener` 作为 `connection`事件的监听器
  - 也是一个 EventEmitter 实例
2. 事件:
  - `connection`: 在一个新连接被创建时触发。 socket 是一个net.Socket的实例。
  - `listening`: 在服务器调用 server.listen() 绑定后触发


### Class net.Server

创建一个 TCP 或者 Unix 服务器,本质上是一个可监听传入链接的 net.Socket.  

方法:  
1. `server.listen(port, [host], [backlog], [callback])`
  - 绑定 `listening` 事件. `callback` 作为 `listening` 事件的监听器
  - port : 端口; 为0这回随机分配
  - host : 主机; 省略这回接受所有IPV4 地址
  - backlog : 积压量; 链接等待队列最大长度; 有系统决定
  - 'EADDINUSE' / SO_REUSEADDR 端口被占用
2. `server.listen(path, [callback])`
  - 启动一个 UNIX 套接字服务器在所给路径 path 上监听连接。???
3. `server.listen(handle, [callback])`
  - handle 处理器:  可以设置为 server / socket ... ???
4. `server.close(callback)`
  - 停止服务器接受新链接,但保持已存在的链接.
  - 异步函数,在所有链接结束后, 触发 回调函数
5. `server.address()`
  - 返回操作系统报告的绑定的地址,协议,和端口
  - 如: { port: 12346, family: 'IPv4', address: '127.0.0.1' }
  - 需要在 'listening' 事件触发之后

事件Event:  

1. listening
2. connection
3. close : 当服务被关闭时触发
4. error : 误发生时触发

### Class net.Socket

这个对象是一个TCP或UNIX套接字的抽象。 net.Socket 实例实现了一个双工流接口。 他们可以被用户使用在客户端(使用 connect()) 或者它们可以由 Node创建，并通过 'connection'服务器事件传递给用户。


## 模块方法(未知, 未使用过)
1. net.connect(options , [connectionListener])
2. net.createConnection( options, [connectListener])



# UDP服务

用户数据包协议,与 TCP 同一传输层,不同是UDP 不是面向链接的.TCP 中链接一旦 建立,所有回话都基于链接.  
UDP 特点, 运用场景  
偶尔丢包也不会重大影响  


### 创建 UDP 服务器端
啥是 "套接字" ?


方法:  
1. dgram.createSocket( type, [callback])
  - type {String} : 可以是 __'udp4'__ 或 __'udp6'__
  - callback {function}: 作为 message 事件监听器
  - return : Socket 对象

### Class dgram.Socket

封装了数据报的功能, 通过 dgram.createSocket 创建.

事件Event:  
1. 'message':
  - `.on('message', function( msg /* Buffer 对象,消息*/, rinfo /*Object, 远程地址信息 */))`
2. 'listening':
  - 开始监听时触发
3. 'close'
  - close() 触发, 之后 message 再不会有事件
4. 'error'

方法:  
1. socket.send( buf, offset, length , port, address [,callback])
  - buf {Buffer} 对象, 要发送的消息
  - offset {Interger}, Buffer 中消息起始偏移量
  - length {Integer}, 消息的字节数
  - port {Interger}, 目标端口
  - address {String}, 目标IP, 可以是字符串会被 dns 解析,
  - callback(err, bytes) {function}
  - 对于UDP套接字, __必须__ 指定目标 _端口_ 和 _ip地址_,
2. socket.bind( port, [address], [ callback])
  - port {Interger} 端口
  - address {String}, 可选
  - callback() {Function}, 回调函数 没有参数
3. socket.close()
4. socket.address()
  - 返回一个包含了套接字地址信息的对象。
  - 对于 UDP 套接字，该对象会包含地址 address、地址族 family 和端口号 port。





- - -
