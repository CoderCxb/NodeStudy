//在node中，一个包实际上是一个目录，中包含了对包继续宁描述的JSON格式的package.json文件。
//一个包中一般包含:
//1.在包的根目录存放一个package.json文件
//2.在bin子目录中存放二进制文件
//3.在lib子目录中存放javascript文件
//4.在doc子目录中存放包的使用方法进行说明的文件
//5.在test子目录中存放对包进行单元测试的文件

//package.json文件中，通常包含的字段和作用
//1.name             包名，唯一的，有小写、数字、下划线组成 不含空格
//2.preferglobal     是否支持全局安装 为true时支持，false不支持
//3.description      包描述信息
//4.version          版本号
//5.anthor           作者
//6.maintainers      包维护者信息
//7.bugs             bug的提交地址
//8.licenses         许可证数组
//9.repository       仓库托管地址 如 
//                  "repository": {
//                  "type": "git",
//                  "url": "xxxx",
//                  "directory": "xxxx"
//                   },
//10.keywords       关键字数组 用于搜索
//11.dependencies   本包所依赖的包