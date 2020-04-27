//1.console.log()
let str='world';
console.log('hello %s',str);
// 一个%s 对应一个相应的值 其他的同理
// %s 将后续的参数按照字符串输出
console.log('%s %s',{name:'cxb'},1);
// %d 将后续的参数按照数值输出
console.log('%d',10,10.5);
// 无法转换成数值,NAN
console.log('%d','cxb');

console.log(2+2);
console.log(2/0);
// 2.console.info()
console.info("console.log()和console.info()作用和使用方法基本完全相同");

//3.console.error()
// console.error(new Error('自定义错误'));
console.error('This is a error!');


let person={
    name:'cxb',
    age:22
}
console.log(person);
console.dir(person);


//4.console.time()和console.timeEnd() 接收一个参数并且参数必须相同 打印中间代码所花费的时间
console.time('OK');
for(let i=0;i<1000000;i++){

}
console.timeEnd('OK');

//5.console.trace() 将当前位置的栈信息作为标准错误信息进行输出
// console.trace('trace');

//6.console.assert() 对于一个表达式进行评估，如果是false,输出Assertion failed:'第二个参数'
// console.assert(1==21,'失败');