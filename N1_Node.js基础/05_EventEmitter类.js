//1.EventEmitter类 所有可能触发事件的对象都是继承了EventEmitter类的子类的实例对象。
// 常用方法
// addListener(event,listener)      //对指定事件绑定事件处理函数
// on(event,listener)               //对指定事件绑定事件处理函数
// once(event,listener)             //对指定事件绑定只执行一次的函数
// removeListener(event,listener)   //对指定事件解除处理函数
// removeAllListener(event,listener)//对指定事件解除所有处理函数
// setMaxListeners(n)               //设置事件处理函数的最大值
// listeners(event)                 //获取指定事件的所有处理函数
// emit(event,[arg1],[arg2])        //手动触发指定事件
let events=require('events');
let sing=new events();
// sing.addListener('start',function(){
//     console.log("请开始你的表演")
// })
sing.on('start',function(){
    console.log('请开始你的表演')
})
sing.emit('start')