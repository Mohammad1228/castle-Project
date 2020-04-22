

var box1;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  

  box1 = new Box(400,200,50,50);
}

function draw() {
  background(255,255,255);  
  drawSprites();
  box1.display();
}