const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1 


function preload() {
    //polygon_img = image("polygon.png")
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(800,200,300,20);
    ground2 = new Ground(350, 305, 300, 20);

    box1 = new Box(250,200,50,50)
    box2 = new Box(300,200,50,50)
    box3 = new Box(350,200,50,50)
    box4 = new Box(400,200,50,50)
    box5 = new Box(450,200,50,50)
    box6 = new Box(300,150,50,50)
    box7 = new Box(350,150,50,50)
    box8 = new Box(400,150,50,50)
    box9 = new Box(350,100,50,50)

    box10 = new Box(700,20,50,50)
    box11 = new Box(750,20,50,50)
    box12 = new Box(800,20,50,50)
    box13 = new Box(850,20,50,50)
    box14 = new Box(900,20,50,50)
    box15 = new Box(750,20,50,50)
    box16 = new Box(800,20,50,50)
    box17 = new Box(850,20,50,50)
    box18 = new Box(800,20,50,50)
ball = new Polygon(200,100,50,50)
sling = new Slingshot(ball.body,{x:200,y:100})

ground3 = new Ground(600,370,1200,20)
//polygon = Bodies.circle(50,200,20);
//World.add(world,polygon)
//slingshot = new SlingShot(this.polygon,{x:100,y:200})

    



    
}

function draw(){
    background("lightblue");
    Engine.update(engine);
    strokeWeight(4);
    ground.display() 
    ground2.display()
    ground3.display()
    box1.display()
    box2.display()
    box3.display()
    box4.display()
    box5.display()
    box6.display()
    box7.display()
    box8.display()
    box9.display()
    box10.display()
    box11.display()

    box12.display()

    box13.display()

    box14.display()
    box15.display()
    box16.display()

    box17.display()

    box18.display()
    ball.display()
    sling.display()
   // slingshot.display()
   // image(polygon_img, polygon.position.x, polygon.position.y, 40,40)






}

function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    sling.fly();
}

function keyPressed(){
if(keyCode === 32){
    sling.attach(ball.body)
}
}