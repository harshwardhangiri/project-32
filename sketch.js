const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var  backgroundImg;
var bg = "sprites/download(1).png";

function preload(){
  
  getTime();

}

function setup (){
  var canvas = createCanvas(1500,1000);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground (500,500,260,20);

  block1 = new Block (590,470);
  block2 = new Block (560,470);
  block3 = new Block (530,470);
  block4 = new Block (500,470);
  block5 = new Block (470,470);
  block6 = new Block (440,470);
  block7 = new Block (410,470);
  block8 = new Block (560,430);
  block9 = new Block (530,430);
  block10 = new Block (500,430);
  block11 = new Block (470,430);
  block12 = new Block (440,430);
  block13 = new Block (530,390);
  block14 = new Block (500,390);
  block15 = new Block (470,390);
  block16 = new Block (500,350);

  polygon = new Polygon (1100,400)

  slingshot = new SlingShot (polygon.body,{x:1100,y:400 });
}


function draw () {
  if( backgroundImg)
  background( backgroundImg);
  Engine.update(engine);
  ground.display();
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

  polygon.display();

  slingshot.display();

}


function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function keyPressed() {

  if (keyCode === 32) {

      slingshot.attach(polygon.body);
  }

}


async function getTime() {

  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();
  var datetime = responseJSON.datetime;
  var hour = datetime.slice(10,13);

  if(hour>=06 && hpur<=19) {
      bg = "download(1).jpg";
  }
  else {
      bg = "download.jpg";
  }
  backgroundImg = loadImage(bg);
}