// readline 逐行读取流文件
let readline=require('readline')
let interface=readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// 用于在命令行显示一个问题
interface.question('如何学习Node.js？？？',function(answer){
    console.log('答案:'+answer)
    // interface.close()
})

interface.on('SIGINT',function(what){
    console.log(what)
})

// setPrompt用于设置命令行的标识符
interface.setPrompt('_')
interface.on('line',function(line){
    // console.log(line)
    if(line==='exit'){
        interface.close();
    }else if(line==='pause'){
        interface.pause();
        setTimeout(function(){
            interface.resume()
        },5000)
    }else if(line==='run'){
        interface.write('跑起来小老弟\n')
    }
})


interface.on('close',function(){
    console.log('结束了')
})