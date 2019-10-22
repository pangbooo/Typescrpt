// 1. 基本
var module1 = new Object({
　_count : 0,
　m1 : function (){
　　//...
　},
　m2 : function (){
    　//...
　}
});

    // 缺点： 这样的写法会暴露所有模块成员，内部状态可以被外部改写。
    module1._count = 5;

    //2.封装私有变量：构造函数的写法
    function StringBuilder() {
        var buffer = [];

        this.add = function(str) {
            buffer.push(str);
        }

        this.toString = function() {
            return buffer.join('');
        }
    }