let fs=require('fs');
let file=fs.createReadStream("./N4_操作文件系统/index.txt");
let out=fs.createWriteStream('./N4_操作文件系统/newIndex.txt');
file.on("data",function(data){
    console.log(data.toString());
});

// 当pipe将第二个参数的end设置为true时，当file中数据拷贝完毕后就会关闭out和file，也就无法进行写入读写的操作,当为false时，则不会关闭，out也可以进行追加写入的操作。
file.pipe(out,{end:false})

//可以使用unpipe来取消目标文件的写入操作
// file.unpipe(out);


file.on("end",function(){
    console.log("file关闭")
    out.end("\nOK")
})

out.on("finish",function(){
    console.log("out关闭")
})