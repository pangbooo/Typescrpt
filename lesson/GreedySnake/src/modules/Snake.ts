class Snake {
    // 设置蛇头
    head: HTMLElement;
    // 设置蛇整体
    bodies: HTMLCollection;
    // 设置蛇容器
    element: HTMLElement;

    constructor() {
        this.element = document.getElementById('snake')!;
        this.head = document.querySelector('#snake > div') as HTMLElement;
        this.bodies = this.element!.getElementsByTagName('div');
    }

    get X() {
        return this.head.offsetLeft;
    }

    get Y() {
        return this.head.offsetTop;
    }

    set X(value: number) {
        if (this.X === value) {
            return;
        }

        if (value < 0 || value > 290) {
            throw new Error('撞墙了');
        }

        this.moveBody();
        this.head.style.left = value + 'px';
    }

    set Y(value: number) {
        if (this.Y === value) {
            return;
        }

        if (value < 0 || value > 290) {
            throw new Error('撞墙了');
        }

        this.moveBody();
        this.head.style.top = value + 'px';
    }

    addBody() {
        this.element.insertAdjacentHTML('beforeend', "<div></div>")
    }

    // 从后往前移动， 后一个节位置到前一节的身体位置
    moveBody() {
        for( let i = this.bodies.length -1; i>0; i--) {
            let X = (this.bodies[i-1] as HTMLElement).offsetLeft;
            let Y = (this.bodies[i-1] as HTMLElement).offsetTop;

            (this.bodies[i] as HTMLElement).style.left = X + 'px';
            (this.bodies[i] as HTMLElement).style.top = Y + 'px';

        }
        
    }
}

export default Snake;