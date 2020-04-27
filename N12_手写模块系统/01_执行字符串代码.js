// eval 可以将字符串代码进行解析执行
// 注意点: 可以访问到外界的变量
let name='cw';
let str=`
let name='cxb';
console.log(name)
`
eval(str)

//方法二:将代码字符串传入new Function()中并执行即可
// 这两种方法都可以访问到外界的变量 不安全 容易被注入 不推荐使用
new Function(str)();