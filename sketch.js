const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var slingShot;
var box;
var slab1,slab2,slab3,slab4;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box = new Box(200,100);
    slingShot = new SlingShot(box.body,{x:200,y:100});
    slab1 = new Slab(800,400);
    slab2 = new Slab(800,420);
    slab3 = new Slab(800,440);
    slab4 = new Slab(800,460);
}

function draw(){
    background(255);
    Engine.update(engine);
    box = display();
    slingShot = display();
    slab1 = display();
    slab2 = display();
    slab3 = display();
    slab4 = display();
}

function mouseDragged(){
  Matter.Body.setPosition(box.body,{x: mouseX,y: mouseY});
}

function mouseReleased(){
  slingShot.fly();
}