let fs=require('fs');
let frs=fs.createReadStream('./N4_操作文件系统/index.txt',{
    flags:'r+',      //读取方式
    encoding:"utf8", //编码集
    autoClose:true,  //是否自动关闭
    start:0,         //开始位置
    // end:5            //结束位置
    // highWaterMark:1   /// 一次读取几个字节
});
frs.on("open",function(fd){
    console.log("表示数据流和文件建立关系成功")
})
frs.pause()
setTimeout(function(){
    frs.resume()
},2000);

frs.on('data',function(data){
    // 如果读取空文件 则这个data中的都不会执行
    console.log('表示通过数据流从文件中读取到了数据')
    console.log("读取到的数据是："+data);
})

frs.on("end",function(){
    console.log("文件读取完毕");
})
frs.on("close",function(){
   console.log("表示断开了数据流和文件的关系") 
})

frs.on('error',function(error){
    console.log('表示数据流和文件建立关系失败')
})