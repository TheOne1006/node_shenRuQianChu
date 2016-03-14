const spawn = require('child_process').spawn;
const grep = spawn('grep', ['ssh']);

console.log('Spawned child pid: '+ grep.pid);
grep.stdin.end();


/**
 * - - - - - - -
 * 事件
 * error, exit
 */
grep.on('error', function (err) {
  /**
   * 发生情况:
   * 1. 进程不能被创建
   * 2. 进程不能被终止掉
   * 3. 由任何原因引起的数据发送到子进程失败.
   * @param object 错误对象
   */
  console.log(err);
  console.log('error 报错');
});

/**
 * 子进程被结束时触发
 * @param function (code,        signal
 * code : 正常结束, code 就是退出进程的指令代码, 否则为null
 * signal: 假如进程是由于接受到signal结束的, signal 就代表着信号的名称, 否则为null.
 */
grep.on('exit', function (code, signal ) {
  console.log('code {Number}:'+ code);
  console.log('signal {String}:'+ signal);
  console.log('退出事件');
});


/**
 * 事件 close
 *
 */

 grep.on('close', function (code, signal) {
   console.log(arguments);
   console.log('close 事件');
 })









/**
 *
 */
