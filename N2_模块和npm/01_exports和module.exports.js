//一般情况下可以写exports，也可以写module.exports，但是当需要对模块的输出重新赋值时,只能使用module.exports 
//exports是commonJS导出模块的方式
// export是ES6导出方式
// node暂时不支持ES6的方式，所以需要使用exports或者module.exports


// 在根目录创建一个node_modules 并将文件放入其中 可以访问方式和核心模块一样
let index=require('index');