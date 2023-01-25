/*
*   1. 每个函数function都有一个prototype，即显示原型（属性）,默认指向一个空object对象
*   2. 每个实例对象都有一个__proto__，可称为隐式原型（属性）
*   3. 对象的隐式原型的值为对应构造函数的显式原型的值
*   4. 函数的prototype属性：在定义函数自动添加的。默认值是一个空Object对象
*   5. 对象的_proto_属性：创建对象时自动添加的，默认值为构造函数的prototype属性值
*   6： 程序员可以直接操作显示原型，但不能直接操作隐式原型（ES6之前）
* */
function Fn() {

}
var fn = new Fn() // 内部语句：this.__proto__ = Fn.prototype
console.log(Fn.prototype)
console.log(fn.__proto__)
console.log(Fn.prototype === fn.__proto__ )

// 给原型添加方法
Fn.prototype.test = function () {
    console.log('test()')
}
// 通过实例调用原型的方法
fn.test()
fn.__proto__.test()



