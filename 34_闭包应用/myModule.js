function myModule() {
    console.log('1')
    // 私有数据
    var msg = 'My bear'
    // 操作数据的函数
    function biandaxie() {

        console.log('变大写'+msg.toUpperCase())
    }
    function bianxiaoxie() {
        console.log('变小写'+msg.toLowerCase())
    }
    // 向外暴露对象,即给外部使用的方法
    // return biandaxie
    return{
        biandaxie : biandaxie,
        bianxiaoxie : bianxiaoxie
    }
}