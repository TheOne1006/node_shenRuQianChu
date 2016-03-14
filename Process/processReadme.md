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
集群模块允许你方便地创建一个共享服务器端口的进程网络。

原理:  
- `child_process` + `net` 模块的组合应用.  
- `cluster` 启动时,内部启动 tcp 服务器,在 `cluster.fork()` 子进程是,将这个 TCP 服务器 socket 文件发送给工作进程.


判断主进程/工作进程:  
1. `cluster.isWorker` / `cluster.isMaster`
2. 取决于环境变量中的 `NODE_UNIQUE_NO`


## cluster api

1. `cluster.schedulingPolicy`: 调度策略
  - 轮流制: `cluster.SCHED_RR` value: '2'
  - 系统处理: `cluster.SCHED_NONE` value : '1'
  - 不可更改: 全局设定一点派一个工作进程,或调用 `cluster.setupMaster()` 后变不可更改
  -





##
