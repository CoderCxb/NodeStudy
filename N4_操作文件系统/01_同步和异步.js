// 在文件系统(fs)种，凡是带有Sync的方法都是同步方法
//同步方法：立即返回操作结果，在同步方法执行的过程种不执行后续代码
//异步方法：将操作结果当作回调函数的参数，在同步方法执行过程种，可以执行后续代码
let fs=require('fs');

//同步读取
let data=fs.readFileSync('./N4_操作文件系统/index.txt')
console.log(data.toString())

//异步读取
fs.readFile('./N4_操作文件系统/index.txt',function(error,data){
    console.log(data.toString())
});

fs.promises.readFile('./N4_操作文件系统/xxxx.txt').then((data)=>{
    console.log(data.toString())
})

//注意点:同时调用多个异步方法时，无法保证那个异步方法先执行完毕 
//如果一个方法需要另一个方法的操作结果时，则需要将这个方法写在该方法的回调函数中以确保该方法执行完毕