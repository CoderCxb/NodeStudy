let assert=require('assert'); 
// 前两个参数是比较的值，第三个参数是报错抛出的异常信息
// 用于判断两个值是否相等 不判断类型  相当于==  相等正常，不等报错
// assert.equal(1,true,'两个两个值完全不等');
// 用于判断两个值是否不相等 不判断类型  相当于!=  不等正常，相等报错
//  assert.notEqual(1,true,'Not Equal') 

 // 用于判断两个值是否相等 判断类型  相当于===  相等正常，不等报错
//  assert.strictEqual(1,1,'不严格相等')

// 用于判断两个值是否不相等 判断类型  相当于!==  不等正常，相等报错
// assert.notStrictEqual(1,'1','严格相等')

// assert.ok() 等价于assert()  用于判断第一个值是否为真，否则抛出异常，第二个参数是异常信息 
// assert.ok('','这个东西的值不为真')

// deepEqual 深层次比较
//比较规则如下:
//1. 基本数据类型 使用 ==进行比较
//2. 数组则使用===进行比较
//3. 对象比较长度和属性值是否相等,经过测试 使用的是==
//4. 对缓存区进行比较 先比较长度，再一个字节一个字节的比较内容。
assert.deepEqual({age:1},{age:'1'},'测试对象中使用==还是===')

// throws和deosNotThrows 用于判断一个函数是否会抛出异常
// throws：断言他会报错 如果函数没有报错 那他报错
// doesNotThrows 相反
// 第二个参数用于控制函数内部的异常是否抛出 若false，则抛出，true相反
assert.doesNotThrow(function(){
    sing()
},function(){return false},'这个函数中没用有异常')