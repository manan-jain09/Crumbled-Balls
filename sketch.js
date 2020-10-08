const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var paper, paperObject;
var dustbin;
var engine, world;

function preload()
{
	
}

function setup() {
	var canvas = createCanvas(windowWidth, windowHeight);

	engine = Engine.create();
    world = engine.world;

	ground = new Ground(width / 2, height - 20, width, 20);
	dustbin = new Dustbin( width - 200, height - 50);
	paper = new Paper(200, 450, 20);


	
	Engine.run(engine);
  
}


function draw() {
  background("skyblue");
  Engine.update(engine);

  drawSprites();

  rectMode(CENTER);
  ground.display();
  paper.display();
  dustbin.display();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body, paper.body.position,{x:20,y: -25});
	}
}

