var box;
var box1;
function setup() 
{
  createCanvas(400, 400);
  box = new Box(100,200,20,20,2,5);
  box1 = new Box(300,300,20,20,1,3);
}

function draw() 
{
  background(220);
  box.show();
  box.moveLeft();
  box1.show();  
  box1.moveDown();
}



