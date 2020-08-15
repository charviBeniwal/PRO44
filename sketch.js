
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

/* function preload() {

} */

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	player1 = new Player(10, 200, 50, 50);
	ground = new Ground(400, 380, 800, 20);
	post = new Post(700, 360, 90, 200);

	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background(255);

	player1.display();
	player1.move();
	player1.gameEnd();
	ground.display();
	post.display();

	fill(0);
	text("Press the right arrow key to score the goal", 350,20);

	drawSprites();

}



