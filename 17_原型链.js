function Fn() {
    this.test1 = function () {
        console.log('test1()')
    }
    Fn.prototype.test2 = function () {
        console.log('test2()')
    }
}

var fn = new Fn()
fn.test1()