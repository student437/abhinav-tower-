const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function preload(){

}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
   ground1 = new Ground(600,590,1200,10);
}

    function draw(){
        background(0);
        Engine.update(engine);
     ground1.display();
        
    }