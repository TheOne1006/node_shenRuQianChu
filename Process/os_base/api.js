// 引入 os
var os = require('os');


console.log('系统默认临时文件目录 os.tmpdir():');
console.log(os.tmpdir());


console.log('返回操作系统的主机名 os.hostname():');
console.log(os.hostname());


console.log('返回操作系统名称 os.type():');
console.log(os.type());


console.log('系统平台 os.platform():');
console.log(os.platform());

// 系统运行的时间
console.log(os.uptime());

// 返回一个包含 1、5、15 分钟平均负载的数组。
console.log(os.loadavg());

console.log('系统内存总量,单位为字节。os.totalmem():');
console.log(os.totalmem());
// console.log(os.totalmem() / (1024 * 1024 * 1024));

// cpu 相关对象数组
console.log(os.cpus());


// 获取网络接口的一个列表信息：
console.log(os.networkInterfaces());
