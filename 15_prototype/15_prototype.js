/*
    1:函数的prototype属性
        每个函数都有一个prototype属性，它默认指向一个object空对象（即原型对象）
        每个原型对象有一个属性constructor，他指向函数对象
    2:给原型对象添加属性（一般都是方法）
        作用：函数的所有实例对象自动拥有原型的属性（方法）
* */

function Fun() {

}
console.log(Fun.prototype)

// 动态添加方法
Fun.prototype.test = function () {
    console.log('test()')
}

console.log(Fun.prototype)

// 每个原型对象prototype有一个属性constructor，他指向函数对象（又指回去）
console.log(Fun.prototype.constructor===Fun)
// 验证
var fun = new Fun()
fun.test()