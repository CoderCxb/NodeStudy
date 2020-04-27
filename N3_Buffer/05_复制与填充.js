// source.copy(target,targetStart,sourceStart,sourceEnd)
// target是拷贝者，source是被拷贝者
let buffer1=Buffer.from('王者荣耀');
let buffer2=Buffer.alloc(12);
let buffer3=Buffer.from('哈哈哈哈')
buffer1.copy(buffer2,0,0,6);
console.log(buffer1);
console.log(buffer2.toString());

buffer1.copy(buffer3,0,0,6);
console.log(buffer3);
console.log(buffer3.toString());


let buffer4=Buffer.alloc(10);
console.log(buffer4);

