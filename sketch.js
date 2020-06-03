var car,wall;
var speed,weight;

function setup(){
  createCanvas(775,400);
  speed=random(55,90);
  weight=random(400,1500);

  car=createSprite(50,200,20,20);
  car.shapeColor="white";
  car.velocityX=speed;

  wall=createSprite(750,200,10,300);
  wall.shapeColor="blue";
}
function draw(){
  background(0);
  if(car.collide(wall)){
    car.velocityX=0;
    
    var deform=0.5*weight*speed*speed/22500;
    if(deform<80){
      car.shapeColor=color(0,255,0);
    }
    if(deform>=80 && deform<=150){
      car.shapeColor=color(230,230,0);
    }
    if(deform>150){
      car.shapeColor=color(255,0,0);
    }
  }
  drawSprites();
}