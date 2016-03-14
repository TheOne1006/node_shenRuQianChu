var child = require('child_process').fork('child.js');

// 创建handler
var server = require('net').createServer();

server.on('connection', function (socket) {
  socket.end('handled by parent\n');
});

server.listen(3002, function () {
  child.send('server', server);
});

/**
 * curl http://127.0.0.1:3002
 * 每次 socket 的相应 可能来自父进程, 可可能是子进程
 */
