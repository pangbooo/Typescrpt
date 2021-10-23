//定义食物类
class Food {
    element: HTMLElement;

    constructor() {
        this.element = document.getElementById('food')!;
    }

    //获取x坐标
    get X() {
        return this.element.offsetLeft;
    }
    //获取y坐标
    get Y() {
        return this.element.offsetTop;
    }

    //修改食物的位置
    changePosition() {
        //生成随机位置
        const top = Math.round(Math.random()*29) * 10;
        const left = Math.round(Math.random()*29) * 10;
        this.element.style.left = left + 'px';
        this.element.style.top = top + 'px';
    }
}

export default Food;