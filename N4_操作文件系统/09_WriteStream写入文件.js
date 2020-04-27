let fs=require('fs');
let fws=fs.createWriteStream('./N4_操作文件系统/index.txt',{
    flags:"a+"
})

//数据流写入的方式会先将数据写入缓存区，当缓存区没满的时候，write返回true，满的时候返回false。

fws.on('open',function(){
    console.log("文件被打开");
})

fws.on('ready',function(){
    console.log('文件准备就绪');
})

fws.write('使用WriteStream写入数据',function(){
    console.log("写入数据成功")
})
for(let i=0;i<10000;i++){
    let flag=fws.write(`\n${i}`,function(){
        // console.log(flag)
    })
}

//当fws.end()以后 文件被关闭了 这句话就打印不出来了
fws.on("drain",function(){
    console.log("操作系统缓存区中的数据已经全部输出了")
})

//当文件打开、读取或者写入发生错误时触发的事件
fws.on('error',function(){
    console.log("写入文件发生错误")
})

fws.end()

fws.on('finish',function(){
    console.log("文件被关闭")
})