let fs=require('fs');
let buffer=Buffer.alloc(100);
let buffer2=Buffer.from('王者荣耀');

//使用fs.open打开文件 回调函数接收两个参数，error以及文件描述符
fs.open(__dirname+'/test.txt','r+',function(error1,fd){
//fs.read和fs.write需要配合fs.open使用 
//      (文件描述符,)     
    if(error1){
        console.log('读取失败')
    }else{
        // write将缓存数写入文件
        // (文件描述符,缓存数据,buffer起始位置,读取buffer字节数,文件中起始位置,callback)
        fs.write(fd,buffer2,0,12,0,function(error2,byteRead,buffer){
            console.log(byteRead)
            console.log(buffer.toString())
        })
        // read 将文件中的数据读到缓存区
        // (文件描述符,缓存数据,buffer起始位置,读取buffer字节数,文件中起始位置,callback)
        fs.read(fd,buffer,0,100,0,function(error3,byteRead,buffer){
            console.log(byteRead)
            console.log(buffer.toString())
        })
       
    }
    fs.close(fd,function(){
        console.log('关闭文件操作系统');
    })
});
//fs.close和fs.closeSync 关闭异步和同步文件


//总结：想要在特定的位置添加 fs.open打开后，使用r+的模式，a只会在末尾添加，w只会覆盖