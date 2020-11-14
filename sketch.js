var  wall,thickness;

var  bullet,speed, weight;



wall.shapeColor(80,80,80);
car.velocityX = speed;

function setup() {
  createCanvas(1600,400);
  
  car = createSprite(50,200,50,50)
  wall = createSprite(1500,200,thickness,height/2)

  

  speed = random(223,321);
  weight = random(30,52);
  thickness=random(22,83);
}

function draw() {
  background(255,255,255); 
  
  if(wall.x - car.x(car.width + wall.width)/2){
car.velocityX = 0;
var deformation = 0.5 * weight * speed * speed/22509;

if(deformation > 180){
  car.shapeColor = color(225,0,0);
}

if(deformation < 180 && deformation > 100){
  car.shapeColor = color(230,230,0);
}

if(deformation < 100){
  car.shapeColor = color(0,225,0);
}
  
  }
  drawSprites();
}