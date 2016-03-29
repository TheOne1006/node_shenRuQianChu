/**
 * 模拟内存泄露代码
 */
var http = require('http');
var server = http.createServer(function (req, res) {
  for (var i = 0; i < 100000; i++) {
    server.on('request', function leakfunc () {
      console.log(i);
    });
  }

  res.end('HELLO WORLD \n');
}).listen(3007,'127.0.0.1');

server.setMaxListeners(0);

console.log('Server running at http://127.0.0.1:3007/. Process PID: ', process.pid);
