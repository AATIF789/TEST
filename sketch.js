const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var ball,ball1,ball2,ball3,ball4,ball5;
var pendullum,ball1line

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	var ballOption={
		restitution:0.8
	}
	ball=Bodies.circle(295,260,15,ballOption)
	World.add(world,ball)

	
	var pendullumOption={
		pointA:{x:295,y:105},
		bodyB:ball,
		length:100,
	}
	pendullum=Constraint.create(pendullumOption)
	World.add(world,pendullum)

	ball1=Bodies.circle(320,260,15)
	World.add(world,ball1)
	var cons={
		shapeA:{x:320,y:105},
		shapeB:ball1,
		length:100,

	}
	ball1line=Constraint.create(cons)
	World.add(world,ball1line)

	Engine.run(engine);	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,lroof.position.y,230,20);

  //call display() to show ropes here
	push()	
  strokeWeight(5)
  line(pendullum.pointA.x,pendullum.pointA.y,ball.position.x,ball.position.y)
	pop()
	line(cons.shapeA.x,cons.shapeB.y,ball1.position.x,ball1.position.y)

  //create ellipse shape for multiple bobs here
	ellipse(ball.position.x,ball.position.y,25)
	ellipse(ball1.position.x,ball1.position.y,25)
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
