//1. toString()
let game='王者荣耀';
let buffer=Buffer.from(game);
console.log(buffer);
console.log(buffer.toString());

//2. write('替换物',start,length,encoding)方法 
//注意点：替换物的字节长度需要和length保持一致
buffer.write('射手',0,6,'utf8');
console.log(buffer.toString());


//3.StringDecoder
let stringDecoder=require('string_decoder').StringDecoder;
let decoer=new stringDecoder('utf8');
console.log(decoer.write(buffer));