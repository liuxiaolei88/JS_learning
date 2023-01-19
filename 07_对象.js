// 1：对象的组成
//    属性：属性名、属性值
//    方法:一种特别的属性 ，属性值是函数
// 2：如何访问：. (有时候不能用)或者[字段名称]（都可以用）
//     Q：什么时候必须要[字段名称]调用
//             1：属性名包含特殊字符：-、空格
//             2：变量名不确定

var p = {
    name: 'Tom',
    age: 12,
    setName: function (name){
        this.name = name
    },
    setAge:function (age){
        this.age = age
    }

}
console.log(p.age)
// 给对象p增加一个content-type属性
p['content-type'] = 'text/json'
console.log(p)
console.log(p['content-type'])

// 变量名不确定
var prooSex = 'mySex'
p[prooSex] = '女'
console.log(p)
