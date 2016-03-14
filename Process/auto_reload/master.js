var fork = require('child_process').fork;
var cpus = require('os').cpus();

var server = require('net').createServer();
server.listen(3005);

var workers = {};
var createrWorker = function () {
  var worker = fork(__dirname + '/worker.js');

  // 退出时重新启动
  worker.on('exit', function () {
    console.log('Worker '+ worker.pid + 'exited .');
    delete workers[worker.pid];
    createrWorker();
  })

  // 句柄转发
  worker.send('server', server);
  workers[worker.pid] = worker;
  console.log('Create worker.pid :'+ worker.pid);
};

for (var i = 0; i < cpus.length; i++) {
  createrWorker();
}

// 退出进程时, 结束所有工作进程

process.on('exit', function () {
  for (var pid in workers) {
    workers[pid].kill();
  }
})

// test bash
// curl http://127.0.0.1:3005
