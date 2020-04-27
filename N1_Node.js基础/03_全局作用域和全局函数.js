// console.log(global);

// 1.setTimeout函数和clearTimeout函数   只执行一次
let timer1=setTimeout(function(obj,str){
    console.log(obj)
    console.log(str)
},1000,{'name':'cxb'},'xxxx')
// clearTimeout(timer1);

//2.setInterval函数和clearInterval函数  不停地执行
let timer2=setInterval(function(obj,str){
    console.log(obj)
    console.log(str)
},2000,{'name':'cxb'},'xxx')
setTimeout(function(){
    clearInterval(timer2);
},2000)

//3.unref方法和ref方法  unref用于暂停定时器  ref用于继续定时器
let timer3=setInterval(function(){
    console.log("timer3开始执行");
},3000)
timer3.unref();
// timer3.ref();

console.log('---------------------------------')

//4.使用require加载模块
let module_js=require('./04_module');
console.log(module_js);

//5.使用require.resolve()查看模块的完整文件名
console.log(require.resolve('./04_module.js'))

//6.require.cache对象 已缓存的模块
// console.log(require.cache);

//7.__filename和__dirname
console.log(__filename);  //返回当前模块文件名
console.log(__dirname);   //获取当前目录名



