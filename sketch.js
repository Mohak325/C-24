const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,pig1,box2,log1,box3,box4,pig2,log2,log3,log4,box5,bird;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,510,70,70);
    box2 = new Box(900,510,70,70);
    ground = new Ground();
    pig1 = new Pig(800,510);
    log1 = new Log(800,450,300,PI/2);
    box3 = new Box(700,430,70,70);
    box4 = new Box(900,430,70,70);
    pig2 = new Pig(800,430);
    log2 = new Log(800,360,300,PI/2);
    box5 = new Box(800,340,70,70);
    log3 = new Log(750,300,150,PI/7);
    log4 = new Log(850,300,150,-PI/7);
    bird = new Bird(80,540);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
    bird.display();
   
}