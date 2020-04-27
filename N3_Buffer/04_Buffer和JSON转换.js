let buffer=Buffer.from('王者荣耀');
//1.使用JSON.stringify将buffer转成字符串  类型是string
let game=JSON.stringify(buffer)
console.log(game);


//2.将使用JSON.parse将字符串还原成对象
gameArray=JSON.parse(game);
console.log(Buffer.from(gameArray).toString())
