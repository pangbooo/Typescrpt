/**
 * 
 * 接口继承接口
 * 
 **/ 
interface Alarm {
    alert():void
}

interface LightableArarm extends Alarm{
    lightOn():void;
    lightOff():void;
}

/**
 * 
 * 接口继承类
 * 常见的面向对象语言，接口是不可以继承对象的，但是在Ts中是可以的
 * 在接口继承类的时候，也只会继承它的实例属性和实例方法。
 * 
 **/

 class Point{
     x:number;
     y:number;
     constructor(x:number, y:number){
         this.x= x;
         this.y = y;
     }
 }
 //1）创建一个Point类的同时，也创建了一个Point类型（实例的类型）

 interface Point3d extends Point {
     z:number;
 }

 let point3d: Point3d = {x:1, y:2, z:3}

 //2）声明 Point 类时创建的 Point 类型只包含其中的实例属性和实例方法
class Point2 {
    //静态属性，坐标系原点
    static oirgin = new Point(0,0);
    //静态方法，计算与原点的距离
    static distanceToOrigin(p: Point){
        return Math.sqrt(p.x * p.y + p.x * p.y)
    }

    //实例属性, x,y轴的值
    x: number;
    y: number;

    //构造函数
    constructor(x:number, y:number){
        this.x= x;
        this.y = y;
    }

    //实例方法
    printPoint(){
        console.log(this.x, this.y)
    }
}

interface PointInstanceType {
    x: number;
    y:number;
    printPoint():void;
}

//Point2类型 === PointInstanceType类型

