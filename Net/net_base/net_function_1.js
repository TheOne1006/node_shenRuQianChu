var net = require('net');

var server = net.createServer( function (socket) {
  console.log('connection 事件, 通过 createServer() 绑定');
})
/**
 * 以上创建 监听器 等价与
 */
server.on('connection', function (socket) {
  console.log('connection 事件, 通过 connection 事件绑定');
})

server.listen(3003, function () {
  console.log('这是一个 listening 监听器, 通过 server.listen() 方法绑定');
});

/**
 * 以上创建 listening 监听器等价与
 */
server.on('listening', function () {
  console.log('这是一个 listening 监听器, 通过 listening 事件绑定');
  //  'listening' 事件发生前请勿调用 server.address()
  address = server.address();
  console.log("opened server on %j", address);
});
