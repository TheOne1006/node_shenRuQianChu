var cluster = require('cluster');


/**
 * Event 事件
 */
cluster.on('fork', function (worker) {
  console.log('event fork worker.id:' + worker.id);
});


cluster.on('listening', function(worker, address) {
  console.log('一个工作进程刚刚连接到 ' + address.address + ':' + address.port);
});

cluster.on('disconnect', function(worker) {
  console.log('工作进程 #' + worker.id + ' 断开了连接');
});


cluster.on('exit', function(worker, code, signal) {
  var exitCode = worker.process.exitCode;
  console.log('工作进程 ' + worker.process.pid + ' 被结束（'+exitCode+'）。正在重启...');
  // cluster.fork();
});
