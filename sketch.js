
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground1;
var boy1;
var tree1;
var stone1;
var chain;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7;
function preload()
{
	
}

function setup() {
	createCanvas(1700, 780);


	engine = Engine.create();
	world = engine.world;

	ground1= new Ground(400,680,2600,20);
	boy1= new Boy();
	tree1 = new Tree();
	stone1 = new Stone();
	chain = new Chain(stone1.stone,boy1.boy);
	mango1 = new Mango(1440,400)
    mango2 = new Mango(1480,290)
	mango3 = new Mango(1360,320)
	mango4 = new Mango(1420,200)
	mango5 = new Mango(1270,290)
	mango6 = new Mango(1300,400)
	mango7 = new Mango(1330,210)
	mango8 = new Mango(1530,200)
	mango9 = new Mango(1540,370)
	
	





	



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  ground1.display();
  boy1.display();
  tree1.display();
  stone1.display();
  chain.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();

  detectCollision(stone1,mango1)
  detectCollision(stone1,mango2)
  detectCollision(stone1,mango3)
  detectCollision(stone1,mango4)
  detectCollision(stone1,mango5)
  
  
  
  

  
  drawSprites();
 
}


function mouseDragged(){
	Matter.Body.setPosition(stone1.stone,{x:mouseX,y:mouseY});
}


function mouseReleased(){
	chain.fly();
}


function detectCollision(stone1,mango1){
	mangoBodyPosition=mango1.mango.position
	stoneBodyPosition=stone1.stone.position

	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=mango1.r+stone1.r){
		Matter.Body.setStatic(mango1.mango,false);
	}
}

function keyPressed(){
	if(keyCode===32){
		
		chain.attach(stone1.stone);
	}
}





