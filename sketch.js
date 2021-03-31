const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var ground

var particles=[]
var plinkos=[]
var divisions=[]
var divisionHeight=100

function setup() {
  createCanvas(800,700);
  
  engine = Engine.create();
  world = engine.world;
  ground=new Ground(400,height,800,10)

  for (var k =0; k<=width;k=k+80){
    divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight))
  }
  for (var j=40;j<=width;j=j+50){
    plinkos.push(new Plinko(j,125))
  }
  for (var j=15;j<=width-10;j=j+50){
    plinkos.push(new Plinko(j,225))
  }
  for (var j=40;j<=width;j=j+50){
    plinkos.push(new Plinko(j,325))
  }
  for (var j=15;j<=width;j=j+50){
    plinkos.push(new Plinko(j,425))
  }
 
}

function draw() {
  background(0);  
  Engine.update(engine)
  ground.display()
  
  for (var j=0;j<plinkos.length;j++){
    plinkos[j].display()
  }
  for (var k=0;k<divisions.length;k++){
    divisions[k].display()
  }
  
  if (frameCount%60===0){
   // for (var h=15;h<=width;h=h+50){
      particles.push(new Particle(random(width/2-10,width/2+10),10,10));
    //}
  }
  for (var h=0;h<particles.length;h++){
    particles[h].display()
  }


  drawSprites();
}