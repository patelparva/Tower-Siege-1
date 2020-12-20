const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var stand1,stand2,ground,block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16,slingShot;

function setup() {
	createCanvas(1500, 500);

    engine = Engine.create();
	world = engine.world;
    
    Engine.run(engine);

    ground=new Ground(width/2,505,width,10)
    stand1=new Ground(575,450,250,20);
    stand2=new Ground(1050,300,180,20);
    block1=new Box(480,410,30,40,color(135,206,234));
    block2=new Box(510,410,30,40,color(135,206,234));
    block3=new Box(540,410,30,40,color(135,206,234));
    block4=new Box(570,410,30,40,color(135,206,234));
    block5=new Box(600,410,30,40,color(135,206,234));
    block6=new Box(630,410,30,40,color(135,206,234));
    block7=new Box(660,410,30,40,color(135,206,234));
    block8=new Box(510,370,30,40,color(255,192,203));
    block9=new Box(540,370,30,40,color(255,192,203));
    block10=new Box(570,370,30,40,color(255,192,203));
    block11=new Box(600,370,30,40,color(255,192,203));
    block12=new Box(630,370,30,40,color(255,192,203));
    block13=new Box(540,330,30,40,color(63,224,208));
    block14=new Box(570,330,30,40,color(63,224,208));
    block15=new Box(600,330,30,40,color(63,224,208));
    block16=new Box(570,290,30,40,color(128,128,128));
    block17=new Box(980,295,30,40,color(135,206,234));
    block18=new Box(1015,295,30,40,color(135,206,234));
    block19=new Box(1045,295,30,40,color(135,206,234));
    block20=new Box(1075,295,30,40,color(135,206,234));
    block21=new Box(1105,295,30,40,color(135,206,234));
    block22=new Box(1015,215,30,40,color(63,224,208));
    block23=new Box(1045,215,30,40,color(63,224,208));
    block24=new Box(1075,215,30,40,color(63,224,208));
    block25=new Box(1045,175,30,40,color(255,192,203));

    polygon=new Polygon();
    
    slingShot=new SlingShot(polygon.body,{x:150,y:200});
}

function draw() {
    background(56,44,44);

    Engine.update(engine);

    stand1.display();
    stand2.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();
    polygon.display();
    slingShot.display();
}

function mouseDragged() {
    Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY})
}

function mouseReleased() {
    slingShot.fly();
}
