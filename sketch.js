const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;

var world, engine, bodies;
var ball, ground;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  var options1 = {
    isStatic: true
  }

  ground = Bodies.rectangle(400,370,800,30, options1);
  World.add(world, ground);

    
  var options2 = {
    restitution: 1
  }

  ball = Bodies.circle(400,200,40, options2);

  World.add(world, ball);

}

function draw() {
  background("red");  
  Engine.update(engine);

  rectMode(CENTER);
  fill("blue");
  rect(ground.position.x, ground.position.y, 800, 30);
  
  ellipseMode(RADIUS);
  fill("green");
  ellipse(ball.position.x, ball.position.y, 40, 40);



  
}




