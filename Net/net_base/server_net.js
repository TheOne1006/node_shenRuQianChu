/**
 * 创建一个tcp 服务器来接受网络请求
 */
var net = require('net');
var server = net.createServer(function (socket) {
  // 新链接
  socket.on('data', function (data) {
    socket.write('你好');
  });

  socket.on('end', function (data) {
    console.log('connet end');
  });

  socket.write(' welcome to nodejs world \n');
});

server.listen(3003, function () {
  console.log('server bound');
});
