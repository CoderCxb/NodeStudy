//fs.readFile()接收三个参数：filename,[options],callback
//filename和callback是必须填的
//options种有个flag
// r： 读取文件,文件不存在则报错
// r+：读取并写入文件，如果文件不存在则报错
// rs：以同步的方式读取文件并通知操作系忽略本地文件系统缓存。（一般不用）
// w：写入文件。如果文件不存在则创建该文件，如果文件存在则覆盖
// wx：作用和w类似，如果路径已存在则失败。
// w+：读取并写入文件。如果文件不存在则创建该文件，如果文件存在则覆盖
// wx+：和w+类型，如果路径已存在则失败。
// a：追加写入文件，如果文件不存在则创建文件
// ax：作用和a类型，如果路径已存在则失败。
// a+: 读取并追加写入文件，如果文件不存在则创建文件
// ax+：作用和a+类似，如果路径已存在则失败。

// options中还有一个encoding属性用于指定打开文件的编码格式
let fs=require('fs');
// fs.writeFile('./N4_操作文件系统/index.txt','\n追加新的内容',{flag:'a+'},function(error){
// })
// let result=fs.writeFileSync('./N4_操作文件系统/index.txt','data',{flag:'a+'})
// console.log(result)
fs.promises.writeFile('./N4_操作文件系统/index.txt','xx',{flag:"a+"});

// fs.appendFile('./N4_操作文件系统/index.txt','\nappend新的数据',function(){
// })
// 如果第二个参数指定了 'utf8'  那么读出来的就是字符串
fs.readFile('./N4_操作文件系统/index.txt',{encoding:'utf8'},function(error,data){
    console.log(data.toString());
})
fs.promises.appendFile('./N4_操作文件系统/index.txt','aa')

// console.log(fs)