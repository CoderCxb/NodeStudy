let vm=require('vm');
let name='cxb';
global.name='cw';
// 无法访问到字符串外界的代码
// let str="console.log(name)";
// let str2="let name='cxb';console.log(name)";
let str3="console.log(name)";
// 注意点:vm.runInThisContext(str)不能访问普通的变量 但是可以访问global对象上的变量

// vm.runInThisContext(str1)
// vm.runInThisContext(str2)
vm.runInThisContext(str3)

// vm.runInNewContext()无法访问字符串外的变量 包括普通变量和global对象的属性
vm.runInNewContext()