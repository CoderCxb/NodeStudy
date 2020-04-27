//1.移动文件或目录
//rename 如果原路径和新路径在同一个文件夹，那么就是重命名
//       否则 移动文件
let fs=require('fs');
// fs.mkdir('./img/b',function(){});
// fs.rename('./img/a','./img/c/a',function(error){
//     console.log(error)
// })


//截断文件：将指定文件截断成指定字节大小的文件
fs.truncate('./N4_操作文件系统/index.txt',10,function(error){
    console.log(error)
})
fs.stat('./N4_操作文件系统/index.txt',function(error,stats){
    console.log('这个文件大小是'+stats.size+"字节")
})
//删除空目录
// fs.rmdir('./img/c',function(error){
//     console.log(error);
// })

//监听文件改变 默认是persistent:true 也就是程序会一直执行 在程序执行的过程中，文件按发生改变则触发函数
// fs.watchFile('./N4_操作文件系统/index.txt',{persistent:false},function(current,previous){
//     console.log(current.mtime);
//     console.log(previous.mtime);
// })

// fs.watch('./N4_操作文件系统/index.txt',{persistent:true,recursive:true},function(event,filename){
//     console.log(event);
//     console.log(filename)
// })

fs.unwatchFile('')