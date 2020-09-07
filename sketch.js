var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  fixedRect1 = createSprite(100, 400, 50, 80);
  fixedRect1.shapeColor = "blue";
  fixedRect1.debug = true;
  movingRect1 = createSprite(800, 400,80,30);
  movingRect1.shapeColor = "blue";
  movingRect1.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  movingRect1.velocityX = -5;
  fixedRect1.velocityX = +5;
}

function draw() {
  background(0,0,0); 

BounceOff(fixedRect,movingRect);
BounceOff(fixedRect1,movingRect1);
  
  drawSprites();

}
