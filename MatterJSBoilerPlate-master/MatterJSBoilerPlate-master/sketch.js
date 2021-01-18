
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
paper = new Paper(50, 400, 25, 25);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(CENTER);
  background(0);
  Engine.update(engine);
   paper.display();
  drawSprites();
 
}



