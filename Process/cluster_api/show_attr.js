var cluster = require('cluster');


console.log('轮流制:'+ cluster.SCHED_RR);
console.log('系统处理:'+ cluster.SCHED_NONE);
console.log('当前策略:'+ cluster.schedulingPolicy);
/**
 * printr
 * 轮流制:2
 * 系统处理:1
 * 当前策略:2
 */
cluster.setupMaster({
  exec: __filename
})

// 由 setupMaster() 设定对象
console.log(cluster.settings);


// 是否为主程序
console.log(cluster.isMaster);
