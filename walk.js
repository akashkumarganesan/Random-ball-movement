// Area where balls will move
const area = {
    element: document.getElementById('area'),
    width: 1000,
    height: 400
};

// Initialize the area
function initialize() {
    area.element.style.width = area.width + 'px';
    area.element.style.height = area.height + 'px';
}

// Movement object
let movement = {

    // Move ball to x and y position
    moveTo: function (x, y) {
        this.element.style.left = x + 'px';
        this.element.style.top = y + 'px';
    },

    // Change direction when ball touches the border
    changeDirectionIfNecessary: function (x, y) {

        if (x < 0 || x > area.width - this.width) {
            this.dx = -this.dx;
        }

        if (y < 0 || y > area.height - this.height) {
            this.dy = -this.dy;
        }
    },

    // Create a new ball
    create: function (color, dx, dy) {

        var newBall = Object.create(this);

        newBall.dx = dx;
        newBall.dy = dy;

        newBall.element = document.createElement('div');

        newBall.element.style.backgroundColor = color;
        newBall.element.style.width = '40px';
        newBall.element.style.height = '40px';

        newBall.element.className = 'ball';

        newBall.width = parseInt(newBall.element.style.width);
        newBall.height = parseInt(newBall.element.style.height);

        area.element.appendChild(newBall.element);

        return newBall;
    },

    // Update ball position
    update: function (x, y) {

        this.moveTo(x, y);

        var ball = this;

        setTimeout(function () {

            ball.changeDirectionIfNecessary(x, y);

            ball.update(
                x + ball.dx,
                y + ball.dy
            );

        }, 16);
    }
};

initialize();

// Create 3 balls
const ball1 = movement.create("blue", 4, 3);
const ball2 = movement.create("red", 1, 5);
const ball3 = movement.create("green", 2, 2);

// Start movement
ball1.update(70, 0);
ball2.update(20, 200);
ball3.update(300, 330);