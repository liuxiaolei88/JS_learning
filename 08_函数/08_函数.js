// 如何调用函数
//      1：函数声明
//      2：表达式
//      3: 对象调用函数，可以让函数成为任意对象的方法

function showInfo(age){
    if(age<18){
        console.log('小于18 ')
    }else if(age>60){
        console.log('大于60')
    }else{
        console.log('ok')
    }
}

var f1 = function (val){
    console.log(val)
}

showInfo(19)

f1('嗨')

var obj = {}
function test2(){
    this.x = '熊'
}
test2.call(obj)
console.log(obj) //{ x: '熊' }
