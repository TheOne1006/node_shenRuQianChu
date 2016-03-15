# process


## 系统模块 `os`
`os api`


## 系统模块 `childProcess`

创建子进程:  
1. `.spawn()`: 启动一个子进程来执行命令
2. `.exec()`: 启动一个子进程来执行命令, 与 `.spawn()`不同,它有一个回调函数获知子进程的状况
3. `.execFile()`: 启动一个子进程来执行可执行文件
4. `.fork()`: 与`.spawn()`类似, 不同点在于它 __只__ 创建Node的子进程只需要执行JavaScript文件模块即可


## 父子进程之间的通信

- psObject.send(mes, handler)
- psObject.on('message')


## 自动重启


## cluster 集群模块

什么是 __集群__:  
集群模块允许你方便地创建 一个 __共享服务器端口__ 的进程网络。

原理:  
- `child_process` + `net` 模块的组合应用.  
- `cluster` 启动时,内部启动 tcp 服务器,在 `cluster.fork()` 子进程是,将这个 TCP 服务器 socket 文件发送给工作进程.


判断主进程/工作进程:  
1. `cluster.isWorker` / `cluster.isMaster`
2. 取决于环境变量中的 `NODE_UNIQUE_NO`


## cluster api

1. 属性 `cluster.schedulingPolicy`: 调度策略
  - 轮流制: `cluster.SCHED_RR` value: '2'
  - 系统处理: `cluster.SCHED_NONE` value : '1'
  - 不可更改: 全局设定一点派一个工作进程,或调用 `cluster.setupMaster()` 后变不可更改
2. 属性 `cluster.settings` : 由 `.setupMaster()` 设定的设置都会储存在此设置对象中
  - { args: [],
  - exec: 默认 \_\_filename, (工作进程路径)
  - execArgv: [],
  - silent: false } (是否将输出发送到父进程的 stdio)
3. 属性 `cluster.isMaster` : 判断当前进程是否为主程序
4. 属性 `cluster.isWorker` : 判断是否从主进程 fork 出来
5. Event: `fork`: 当一个新的工作进程被分支出来，cluster 模块会产生一个 'fork' 事件
6. Event: `online`: 当主进程收到一个在线消息后，它会触发该事件.
  - 分支出一个新的工作进程后，工作进程会响应一个在线消息。当主进程收到一个在线消息后，它会触发该事件
  - `fork` 和 `online` 的区别在于前者发生于主进程尝试分支出工作进程时，而后者发生于工作进程被执行时。
7. Event: `listening` : 调用 `.listen()`方法
8. Event: `disconnect`:  当一个工作进程的 IPC 通道断开时此事件会发生时调用.
9. Event: `exit`: 任意工程进程被结束时触发, 可通过 `fork()` 再次重启
10. Event: `setup`: `.setupMaster()` 执行时触发
11. 方法 `.setupMaster([,settings])`
  - 修改缺省 `fork` 行为
  - 设置之后永久生效, 并且之后不能被更改
12. 方法 `.fork( [,env {object}])`
  - 派生新工作进程
  - 只能由主进程调用
13. 方法 `.disconnect( [,callback])`
  - __所有__ 工作进程都断开链接,并且关闭句柄时调用
14. 对象 `cluster.worker`
  - 当前 __工作进程__ 对象引用, _主进程不可用_
15. 对象 `cluster.workers`
  - 仅在主进程中使用

### Class: worker  

一个Worker 对象包含了工作进程中所有 __公开信息和方法__ ,  
- 主进程中使用 `cluster.workers` 获取集合
- `.id` {string} 唯一标识符, 主键
- `.process` {ChildProcess object} : 所有进程都是使用 `child_process.fork()` 创建的
- `.send(message [, sendHandler])`
  - 同样可用 `process.send(mes)`
- `.kill( [signal='SIGTERM'])`: 发送工作进程终止信号
- `.disconnect()`
- Event `message`
  - 等价与 `process.on('message')`
- Event `online`

##
