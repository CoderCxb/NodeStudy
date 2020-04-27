// 1.format方法 
let util=require('util');
console.log(util.format('整数:%s,字符串:%s,对象:%j,百分号%%',100,'str',{name:'cxb'}))
// 当格式化字符串不足时,多出来的当作字符串进行拼接
console.log(util.format("哈哈%s",'666',{name:'cxb'}))

async function sing(){
    console.log('唱歌')
}

// 2.inspect 将任意对象转换成字符串
// 注意点:util.inspect 并不会简单地直接把对象转换为字符串，即使该对 象定义了 toString 方法也不会调用
console.log(typeof util.inspect(123))

// 3.isArray(Object) 判断一个对象是不是数组
console.log(util.isArray(123))

// 4.util.isRegExp(object) 判断一个对象是不是正则表达式
console.log(util.isRegExp(/some regexp/))

// 5.util.isDate(object) 判断一个对象是不是日期
console.log(util.isDate(new Date()))
