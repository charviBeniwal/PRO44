class Player {
    constructor(x, y, width, height) {
        var options = {
            'restitution': 0.1,
            'friction': 90.0,
            'density': 1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("player1.jpg");
        World.add(world, this.body);
    }
    display() {
        
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
    move() {
        if (keyCode === 39) {
            this.body.position.x = this.body.position.x + 1;
        }
    }
    gameEnd() {
        if (this.body.position.x >= 710) {
            fill(0);
            text("Good One", 400, 200);

        }
    }
}