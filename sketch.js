const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine, world,ground,wall;

function setup() {
    createCanvas(400, 400);
    engine = Engine.create()
    world = engine.world
    
    var ground_object = {
        isStatic: true
    }
    var wall_option={
          restitution:1.0

    }
    wall=Bodies.circle(200,100,20,wall_option)
    World.add(world,wall)
    ground = Bodies.rectangle(200, 390, 400, 20, ground_object)
    World.add(world, ground)
    
    

}

function draw() {
    background(0, 0, 0);
    Engine.update(engine)
    rectMode(CENTER)
    ellipseMode(RADIUS)
    ellipse(wall.position.x,wall.position.y,20,20)
    rect(ground.position.x, ground.position.y, 400, 20)
    
}






