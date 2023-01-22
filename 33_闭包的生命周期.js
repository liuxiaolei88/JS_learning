// 闭包的生命周期
//    1：产生：在嵌套内部函数定义执行完就产生
//    2：死亡，在嵌套的内部函数成为垃圾对象

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
f = null //闭包死亡，包含闭包的函数对象成为垃圾对象
