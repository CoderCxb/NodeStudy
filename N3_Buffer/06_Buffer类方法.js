//1. Buffer.isBuffer方法
let buffer=Buffer.from('王者荣耀');
console.log(Buffer.isBuffer(buffer))
console.log(Buffer.isBuffer('OK'))


//2.Buffer.byteLength
console.log(Buffer.byteLength(buffer))

//3.Buffer.concat(Buffer_list,totalLength)方法
//注意点：如第一个参数是空数组或totalLength为0，则返回空的buffer对象
let buffer2=Buffer.from("ADCarry");
let buffer3=Buffer.concat([buffer,buffer2]);
console.log(buffer3.toString());

//4.isEncoding()方法:查看指定字符串是否是编码集 如utf8
console.log(Buffer.isEncoding('utf8'));
console.log(Buffer.isEncoding('utf16le'));

