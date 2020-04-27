let child_process=require('child_process');

setTimeout(function(){
    console.log('主进程执行')
},0)

// 使用spawn创建一个子进程: 第一个参数是命令名称 如node
// 第二个参数是向这个子进程传递的参数列表
// 第三个参数options：可以看作是配置
let p1=child_process.spawn('node',[__dirname+'/05_child_process.js']);
p1.stdout.on('data',function(data){
    console.log('子进程标准输出:'+data)
    // p1.stdin.write(data)
})




// child_process.exec('node ../Node.js权威指南/N7_进程和子进程/05_child_process.js',function(error,stdout,stderr){
//     // console.log(error)
//     console.log(stdout)
//     // console.log(stderr)
// });



// p1.on('data',function(data){
//     console.log(data)
// })

// p1.on('error',function(error){
//     console.log(error)
// })
