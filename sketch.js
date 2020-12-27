var car, wall;
var speed, weight;

 

function setup() {
  createCanvas(1600, 400);
  speed=random(55, 90);
  weight=random(400, 1500);
  car=createSprite(50, 200, 50, 50);
  car.shapeColor=(245, 255, 250);
  wall=createSprite(1400, 200, 40, 200);
  wall.shapeColor=(80, 80, 80);
  car.velocityX=8;
}

function draw() {
  background(0, 0, 0);  

if(wall.x - car.x < car.width/2 + wall.width/2){
  car.velocityX=0;
  var deformation;
  deformation=0.5 * weight * speed * speed/22509;

    if( deformation>180){
      car.shapeColor= color(255, 0, 0);
    }
    if(deformation>100 && deformation<180){
    car.shapeColor= color(230, 230, 0);
    }
    if(deformation>180){
    car.shapeColor= color(255, 0, 0);
    }

  }

  
  drawSprites();
}


