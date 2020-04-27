//在fs模块中提供了stat和lstat方法查看一个文件或目录的信息
let fs=require('fs');
fs.stat('./img',function(error,stats){
    // console.log(stats);
    console.log(stats.isDirectory())
    console.log(stats.isFile())

});
//stats中的常用属性
//size 文件大小
//atime 访问时间 access time
//mtime 修改时间 modified time
//ctime 文件状态更改时间 changed time
//birthtime 创建时间  

//fs.statSync直接获取stats并返回
let stats=fs.statSync('./img');
// console.log(stats)

//检查文件或目录是否存在
fs.exists('./img',function(exists){
    console.log(exists)
})


//获取文件或目录的绝对路径
fs.realpath('./img',function(error,path){
    console.log(error);
    console.log(path);
})


//使用utimes()修改文件的访问时间和修改时间
fs.utimes('./img',new Date(),new Date(),function(error){
    console.log(error);
})

//使用chmod方法修改文件或目录的读写权限
//       （路径，权限，callback）
// 0600 所有人可读写     0644所有人可读写 其他人可读
// @ts-ignore
fs.chmod('./img',0600,function(error){
    console.log(error)
})

fs.lstat('./img',function(error,stats){
    console.log(stats.size);
    console.log(stats.atime);
    console.log(stats.mtime);
    console.log(stats.ctime);
    console.log(stats.birthtime)
});