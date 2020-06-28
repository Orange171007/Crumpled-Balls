var options={
isStatic:false,
restitution:0.3,
friction:0.5,
density:1.2
}

var paper,ground;
var dustbinPart1,dustbinPart2,dustbinPart3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 200);
	ground = createSprite (400,190,800,10,{isStatic:true});
	ground.shapeColor=color(230,230,0);

	paper = createSprite (100,170,30,30);
	paper.radius=50;
	paper.shapeColor=color(200,0,255);

	dustbinPart1 = createSprite (600,180,130,10);
	dustbinPart1.shapeColor=color(255,255,255);
	dustbinPart2 = createSprite (535,150,10,60);
	dustbinPart2.shapeColor=color(255,255,255);
	dustbinPart3 = createSprite (665,150,10,60);
	dustbinPart3.shapeColor=color(255,255,255);

	engine = Engine.create();
	world = engine.world;


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  createEdgeSprites();

  if(keyDown(RIGHT_ARROW)){
	  paper.velocityX=7;
  }

  if(keyDown(LEFT_ARROW)){
	paper.velocityX=-7;
}

  if(keyDown(UP_ARROW)){
	paper.velocityY=-7;
		
}

paper.bounceOff(ground);
paper.collide(dustbinPart1);
paper.collide(dustbinPart2);
paper.collide(dustbinPart3);

paper.velocityY=paper.velocityY+1;


  
  drawSprites();
 
}



