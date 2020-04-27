let buffer=Buffer.from([1,2,3]);
console.log(buffer);

//带U无符号  不带U有符号
//1.read+(?U)(Int/Float/Double)+位数(8/16/32)
//第一个参数为起始位置  第二个参数为超出时是否报错 默认是false，超出报错
console.log(buffer.readInt8(1));

//2.write+(Int/Float/Double)+位数(8/16/32)+（15或者32要加BE/LE）
//第一个参数为写入的数据 第二个是起始位置 第三个为超出报错的标志
buffer.writeUInt8(128,0);
console.log(buffer);
