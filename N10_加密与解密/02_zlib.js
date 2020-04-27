let zlib=require('zlib');
let fs=require('fs');
// 压缩使用 createGzip
// let gzip=zlib.createGzip();
// let input=fs.createReadStream('./index.txt');
// let output=fs.createWriteStream('./index.txt.gz');
// input.pipe(gzip).pipe(output)

// 解压使用 createGunzip
let gunzip=zlib.createGunzip();
gunzip.on('error',function(error){
    console.log(error)
})
let input2=fs.createReadStream('./index.txt.gz');
let output2=fs.createWriteStream('./index2.txt');
input2.pipe(gunzip).pipe(output2)
