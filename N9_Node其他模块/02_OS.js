let os=require('os');
// 获取计算机名
console.log('计算机名：'+os.hostname());

//获取操作系统的类型
console.log('操作系统类型:'+os.type());

//获取操作系统平台
console.log('操作系统平台:'+os.platform());

//获取CPU架构
console.log('CPU架构:'+os.arch());

//获取系统版本号
console.log('系统版本号:'+os.release());

//获取系统当前运行时间 是指运行了多久
console.log('系统当前运行时间:'+os.uptime());

//获取系统总内存量 单位字节
console.log('系统总内存:'+os.totalmem)

//获取系统空闲内存 单位字节
console.log('系统空闲内存:'+os.freemem)

//获取系统CPU内核的信息

console.log('系统CPU内核信息:')
// console.log(os.cpus())

//获取系统所有的网络接口
console.log('系统所有网络接口:')
// console.log(os.networkInterfaces())

//获取用户主目录的字符串路径
console.log('用户主目录的字符串路径:'+os.homedir)

//获取操作系统的默认临时文件目录
console.log('临时文件路径:'+os.tmpdir)

//获取用户信息
console.log('获取用户信息:')
console.log(os.userInfo())



