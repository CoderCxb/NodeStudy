let path=require('path');
let p='./index.txt';
// normalize的作用:规范化路径
//1.将解析路径中的.和.. 返回解析后的标准字符串 ./会被省略
//2.将多个斜杠转换为一个斜杠
//3.将windows下的反斜杠转换成正斜杠
//4.如果路径以斜杠结尾，那么转换后完整路径字符串末尾保留斜杠
console.log(path.normalize(p))

// path.parse(路径) 用于将路径转换成对象
// {root:'',dir:'./a/b',base:'c.txt',ext:'.txt',name: 'c' }
console.log(path.parse('./a/b/c.txt'))

// path将对象转换成路径
console.log(path.format({root:'',dir:'./a/b',base:'c.txt',ext:'.txt',name: 'c' }))

// join将多个路径拼接在一起,说白了就是用\进行拼接 
// 第三个参数可以是../ 就可以返回到上一级目录 以此类推
console.log(path.join('myFile/content/','index.txt'))

// / 代表从盘符开始出发，并且会忽略前面的参数 比如：第二个参数是/开头的 那么第一个参数就被忽略了 ../表示上一级 ./表示当前目录
console.log(path.resolve('/a','b','c'))

// relative 获取两个路径之间的相对关系,也就是从第一个路径如何走到第二个路径
console.log(path.relative('../img/a/b','../img2'))

// dirname  获取路径文件或文件夹所在的文件夹名
console.log(path.dirname('./img/a/b'))

// basename  获取路径中的文件或文件夹名 第二个参数接收扩展名 如果和文件的扩展名相同，则省略文件扩展名
console.log(path.basename('./img/a/b.txt','.txt'))

// extname  获取路径中文件的扩展名
console.log(path.extname('./img/a.txt'))

// dirname 获取目录路径
console.log(path.dirname('./img/a/b/c.txt'))

// isAbsolute 判断路径是否是绝对路径
console.log(path.isAbsolute('./img/a/b'))
console.log(path.isAbsolute('/img/a/b'))  // /开头的是绝对路径
console.log(path.isAbsolute('C:\\a\\b')) 

// path.sep 获取当前操作系统的路径分隔符
console.log(path.sep)

// path.delimiter获取环境变量分隔符
console.log(path.delimiter)