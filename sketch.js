var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var rect1, rect2, rect3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-15, width,20);
	groundSprite.shapeColor=color("brown");
	
	rect1 = createSprite(400,660,200,20);
	rect1.shapeColor=color("red");
	
	rect2 = createSprite(300,620,20,100);
	rect2.shapeColor=color("red");
	
	rect3 = createSprite(500,620,20,100);
	rect3.shapeColor=color("red");

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  packageSprite.x = helicopterSprite.x;



  keyPressed2();
  keyPressed3();

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	 Body.setStatic(packageBody,false);

  }
}
function keyPressed2() {
if (keyCode === LEFT_ARROW) {
	helicopterSprite.position.x = helicopterSprite.position.x-2;
}
}

function keyPressed3() {
	if (keyCode === RIGHT_ARROW) {
		helicopterSprite.position.x = helicopterSprite.position.x+2;
	}

}

