// 1：变量声明提升
//    通过var定义的变量，在定义之前就可以访问到，值为undefined
// 2：函数声明提升
//    通过function声明的函数，在之前就可以调用
//    值：函数定义（对象）

//面试题
var a = 3
fn() //可以调用
function fn() {
    console.log(a)
    var a = 4
}

//输出undefined
fn()