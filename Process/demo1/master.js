var fork = require('child_process').fork;

var cpus =  require('os').cpus();

for (var i = 0; i < cpus.length; i++) {
  fork('./worker.js');
}

/**
 * 根据cpu 数量创建 独立的进程
 */
 
