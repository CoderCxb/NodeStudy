// process.stdin.resume()
process.stdin.setEncoding('utf8');
process.stdin.on('end', () => {
  process.stdout.write('结束');
});
process.stdin.resume();
//
process.stdout.write('使用process.stdout.write向控制台进行输出:\n')

process.stdin.on('data',function(data){
  // 读取的数据默认末尾是有\r\n的 所以如果需要判断相等 要加上\r\n
  if(data!='exit\r\n'){
    process.stdout.write('进程接收的数据：'+data)
  }else{
    console.log("结束")
    process.exit()
  }
})


//第一个元素是Node的可运行文件 第二个元素是当前文件绝对路径 后面的元素是运行文件时添加
//node c:\Users\Administrator.PW6NUH21X31RM79\Desktop\Node.js权威指南\N7_进程和子进程\02_stdin和stdout.js one two three four
// console.log(process.argv)