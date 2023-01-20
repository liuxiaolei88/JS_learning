// 1. this 是什么
//     任何函数本质上都是通过某个对象调用，如果没有指定就是window
//     所有的函数内部都有一个变量this
//     他的值使调用函数的当前对象
// 2：如何确定this值？
//     test() : window
//     p.test():p
//     new test():新创建的对象
//     p.call(obj):obj

function Person(color) {
    console.log(this)
    this.color = color;
    this.getColor = function () {
        console.log(this)
        return this.color;
    };
    this.setColor = function (color) {
            console.log(this)
            this.color = color;

    }

}
Person('red') //this 是谁？ 是window。
// window意思为“窗口”，是一个内置的宿主对象,宿主对象就是执行JS脚本的环境提供的对象，是浏览器提供的对象。所有的BOM和DOM都是宿主对象。

var p = new Person('yellow'); //this是谁？ p

p.getColor();//this是谁？ p

// 创建一个obj对象，使setColor成为obj的函数
var obj = {};
Person.call(obj,'black');//this是谁？ obj

var test = p.setColor;
test(); ////this是谁？ window

function fun1() {
    function fun2() {
        console.log(this);//
        // this是谁？ window

    }
    fun2();
}
fun1();