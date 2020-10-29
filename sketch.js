var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var house;
var wall1, wall2, wall3;
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
	
	
	groundSprite=createSprite(width/2, height-20, width,100);
	groundSprite.shapeColor=color("lightblue")





	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	 wall1 = new Wall(400,620,500,20);
	 wall2 = new Wall(160,480,20,300);
	 wall3 = new Wall(660,480,20,300);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  spawnHouse();
  keyPressed();
  drawSprites();

  wall1.display();
  wall2.display();
  wall3.display();


 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {

	Matter.Body.setStatic(packageBody,false);
	fill("White");
	textSize = 30;
	text("PACKAGE DELLIVERED", 350, 20);

  }
}

function spawnHouse(){
	if(frameCount % 100 === 0){
		house = createSprite(800, 650, 50, 50);
		house.velocityX = -3;
		house.shapeColor = color("red")
		house.lifetime = 400;
	 }
}



