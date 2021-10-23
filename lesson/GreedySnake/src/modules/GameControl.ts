import Food from './Food';
import ScorePanel from './ScorePanel';
import Snake from './Snake';

class GameControl {
    snake: Snake;
    food: Food;
    scorePanel: ScorePanel;
    //蛇的移动方向（按键方向）
    direction: string = '';
    isLive = true;

    constructor() {
        this.snake = new Snake();
        this.food = new Food();
        this.scorePanel = new ScorePanel();

        this.init();
    }

    init() {
        document.addEventListener('keydown', this.keyDownHander.bind(this));
        this.run();
    }

    keyDownHander(event: KeyboardEvent) {
        console.log(event.key);
        this.direction = event.key;
    }

    run() {
        let X = this.snake.X;
        let Y = this.snake.Y;

        switch (this.direction) {
            case 'ArrowUp':
            case 'Up':
                Y -= 10;
                break;
            case 'ArrowDown':
            case 'Down':
                Y += 10;
                break;
            case 'ArrowLeft':
            case 'Left':
                X -= 10;
                break;
            case 'ArrowRight':
            case 'Right':
                X += 10;
                break;
        }

        try {
            this.snake.X = X;
            this.snake.Y = Y;
        }catch(e: unknown) {
            if (e instanceof Error) {
                this.isLive = false;
                alert(e.message + 'Game Over!');
            }
            
        }
        this.checkEat(X ,Y);
        this.isLive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level -1) * 30);
    }

    //检查蛇吃到食物
    checkEat(X: number, Y:number) {
        if( X === this.food.X && Y === this.food.Y) {
            this.food.changePosition();
            this.scorePanel.addScore();
            this.snake.addBody();
        }
    }
}

export default GameControl;