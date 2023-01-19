//  02——数据类型 笔记

// 1.基本数据类型：String Number Boolen NULL Undefined , Object 属于引用数据类型

// 2.类型判断（三种判断方式）
    //  1：typeof
    /*  可以判断：undefined/数值/字符串/布尔值/function
        不可以判断：null与object object和array */
    // 2：instanceof:判断对象的具体类型
    // 3：===：可以判断 undefined，null

a = 3
console.log(typeof a === "number")

var b1 = {
    b2: [1, 'abc', console.log],
    b3: function () {
        console.log('b3')
        return function () {
            return '熊'
        }
    }
}
console.log(b1 instanceof Object)
// 函数也是对象
console.log(b1.b2 instanceof Array)
// 表达式加括号可以执行
b1.b2[2]('1')
// 如何得到字符串,调用b1.b3()会返回一个函数，对函数再次调用会返回字符串，最后把字符串进行打印
console.log(b1.b3()())
// 函数是特别的对象，可以执行
