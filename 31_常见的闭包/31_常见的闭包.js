// 作用1：将函数作为另一个函数的返回值
function fn1() {
    var a = 2
    function fn2() {
        a++
        console.log(a)
    }
    return fn2
}
var f = fn1() //定义外部只执行一次，执行语句var a = 2和return fn2
f() //3，执行内部函数
f()//4，执行内部函数

//作用2：将函数作为实参传递给另一个函数调用
function show(msg,time){
    setTimeout(function () {
        // 使用了外部的msg，形成闭包
        console.log(msg)
    },time)
}
show('熊',200)