let fs=require('fs');

let dir=fs.promises.opendir('./img/');
dir.then(fs=>{
    let data=fs.readSync();
    console.log(data)
    fs.close();
})

// 如果传入的是文件夹嵌套的关系，若rescursive为false，当父文件夹不存在时，就会创建失败，如果为真，则会创建父文件夹
fs.mkdir('./img/b',{recursive:true},function(error){
    console.log(error); 
});
let dir1=fs.promises.readdir('./img/');
dir1.then(data=>{
    console.log(data)
})

fs.readdir('./img/',function(error,data){
    console.log(data)
})

let dir2=fs.readdirSync('./img');
console.log(dir2);
setTimeout(function(){
    console.log("OK")
},0)