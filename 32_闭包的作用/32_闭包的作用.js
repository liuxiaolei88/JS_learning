// 闭包的作用
//    1：使函数内部的变量在函数执行完后，仍然存活在内存中，延长了局部变量生命周期
//    2：让函数外部可以操作到函数内部的数据

function fn1() {
    var a = 2
    function fn2() {
        a++
        console.log(a)
    }
    return fn2
}
var f = fn1()//指向fn2（）函数对象
f()
f()
