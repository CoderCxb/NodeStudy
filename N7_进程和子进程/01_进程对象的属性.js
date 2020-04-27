// 进程对象 process 
// console.log(process)

// execPath: 用来运行程序的可执行文件的绝对路径
console.log(process.execPath);  //'C:\\Program Files\\nodejs\\node.exe'

//version :属性值为Node.js的版本号 
console.log(process.version)

//versions :Node和其依赖的版本号
console.log(process.versions)

//platform :当前运行Node的平台 :win32
console.log(process.platform)

//config: 当前用于编译Node的配置JS描述
console.log(process.config)

//env:运行Node程序的操作系统环境信息
console.log(process.env)

//pid:进程号
console.log(process.pid)

//title:命令行窗口的标题
console.log(process.title)

//arch:运行Node的处理器架构
console.log(process.arch)


