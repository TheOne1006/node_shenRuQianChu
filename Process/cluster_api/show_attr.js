var cluster = require('cluster');


console.log('轮流制:'+ cluster.SCHED_RR);
console.log('系统处理:'+ cluster.SCHED_NONE);
console.log('当前策略:'+ cluster.schedulingPolicy);

/**
 * 轮流制:2
 * 系统处理:1
 * 当前策略:2
 */
