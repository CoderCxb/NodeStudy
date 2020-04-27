//创建Buffer对象的3种方法
//1. Buffer.alloc(length,填充物,编码)
const buf1=Buffer.alloc(10,1);
console.log(buf1)

//2.Buffer.allocUnsafe(length)
//效率高，但不安全 可能包含旧数据  需使用fill()或者write()重写
const buf2=Buffer.allocUnsafe(10);
buf2.fill(1);
console.log(buf2)

//3.Buffer.from()
//接收四种类型的参数 array、string、arrayBuffer、buffer
//第二个参数指定字符集:ascii utf8 utf16le base64 latin1(binary) hex 
let arrayBuf=Buffer.from([1,2,3]);
let game='王者荣耀';
let stringBuf=Buffer.from(game,'utf8');
let copyBuf1=Buffer.from(arrayBuf);
let copyBuf2=Buffer.from(buf1);
console.log(arrayBuf);
console.log(stringBuf);
console.log(copyBuf1);
console.log(copyBuf2);

//4.Buffer对象的length是缓存中的字节长度，string是字符的个数
console.log(game.length)
console.log(stringBuf.length)

//5.字符串无法修改 但是Buffer可以修改
game[0]='亡';
console.log(game);
stringBuf[0]=0xe8;
console.log(stringBuf.toString());


//6.使用slice(起始位置,结束位置)进行截取
console.log(stringBuf.slice(0,6).toString())