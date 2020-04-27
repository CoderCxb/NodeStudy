let domain=require('domain');
let d1=domain.create();
let d2=domain.create();
d1.name='d1';
d2.name='d2';
console.log('原始堆栈');
//在run()、bind()、intercept()之外写的domain_stack都是空数组，也就是堆栈是空的。
console.log(domain._stack);
d1.run(function(){
    console.log('d1对象：%j',d1);
    console.log('运行d1对象后堆栈的内容：%j',domain._stack);
})
d2.run(function(){
    console.log('d2对象：%j',d2);
    console.log('运行d2对象后堆栈的内容：%j',domain._stack);
    d2.exit()  //exit函数可以将d2从堆栈中弹出去
    console.log('使用exit后的堆栈:%j',domain._stack)
    d2.enter() //enter函数可以将一个domain对象推入堆栈中，并使用它作为当前的domain对象
    console.log('使用enter后的堆栈:%j',domain._stack)

})


console.log('原始堆栈');
console.log(domain._stack);