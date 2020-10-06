var rect1,rect2;

function setup() {
  createCanvas(800,400);
  rect1 = createSprite(0, 400, 50, 50);
  rect2 = createSprite(800,0,50,50);

  rect1.shapeColor = "red";
  rect2.shapeColor = "yellow";
  
  rect1.velocityY = -1;
  rect1.velocityX =  2;
  
  rect2.velocityY =  1;
  rect2.velocityX = -2;
}

function draw() {
  background(0);  
if(touch(rect1,rect2)){
rect1.shapeColor = "blue";
rect2.shapeColor = "white";

}else {
  rect1.shapeColor = "red";
  rect2.shapeColor = "yellow";
}
bOff(rect1,rect2);
  drawSprites();

 

  
}