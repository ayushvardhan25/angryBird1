const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var monster
var engine, world;
var box1;
var box2;
var box3;
var box4;
var box5;
var ground,ground2;
var pig1;
var pig2;
var log1;
var log2;
var log3;
var log4;
var angry;
function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(900,700,80,80);
    box2 = new Box(1100,700,80,80);
    ground = new Ground(600,height,1200,20)
    ground2 = new Ground(10,800,600,700)
    pig1  =  new Pig(1000,700)
    angry = new BIRD(100,700)
    pig2  = new Pig(1000,600)
    
    log1 = new   Log (1000,630,290,PI/2);
    log2 = new Log(1000,550,290,PI/2)
    box3 = new  Box(895,600,80,80)
    box4  = new Box(1100,600,80,80)
    box5 = new Box(1000,450,80,80)
    log3 = new   Log (907,450,150,PI/7);
log4 = new Log(1100,450,150,-PI/
    7)



}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
   box4.display();
   box5.display(); 
   ground.display();
   ground2.display(); 
   pig1.display();
  
    pig2.display();
    log1.display();
    log2.display();
log3.display();
log4.display();
angry.display();
}
