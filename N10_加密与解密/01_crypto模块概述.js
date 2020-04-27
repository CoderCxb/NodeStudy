let crypto=require('crypto');
// 使用hash256进行加密
let hash256=crypto.createHash('sha256').update('abc','utf8').digest('hex').toString();
console.log(hash256);


