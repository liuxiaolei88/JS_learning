function f(num){
    return  num<=2 ? 1: f(num-1) + f(num-2)
}
var onmessage = function (event) {
    var num = event.data
    console.log('从主线程接收数据' + num)
    var res = f(num)
    postMessage(res)
    console.log('从分线程返回数据')
    // alert()是window的方法，在分线程不能使用
    // 分线程中全局对象不是window，在分线程中看不见界面

}