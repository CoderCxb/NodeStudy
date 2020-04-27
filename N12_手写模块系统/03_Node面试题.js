//1.为什么Node中的this是空对象
// 因为在Node中每一个文件都是一个模块 系统会将文件中的代码放到下面这个函数中 其中this===exports 
(function(exports,require,module,__filename,__dirname){
    // 我们编写的代码
    // console.log(this)
    // 函数中将this指定为exports 注意：this!==exports
    this=exports;
    return exports;
})();
// 2.为什么可以直接使用exports,require,module,__filename,__dirname？
// 因为文件被函数包装  而这些是参数 当然可以使用

// module.exports={name:'cxb'}
exports.name='cxb';
console.log(this===exports)
console.log(this)

function test(){
    //方法里面的this 就是调用时的this 也就是global
    // console.log(this)
}
test();



