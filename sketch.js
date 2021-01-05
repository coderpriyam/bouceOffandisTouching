var fixedrect , movingrect



function setup() {
  createCanvas(1800,800);

  fixedrect = createSprite(400, 100, 50, 80);
  fixedrect.shapeColor = "green";
 
  movingrect = createSprite(400 , 800 , 80 , 30);
  movingrect.shapeColor = "green"

   movingrect.velocityY=-5;
   fixedrect.velocityY= 5;

   gameobject1 = createSprite(100  , 100 , 50 , 50);
   gameobject1.shapeColor = "green"

   gameobject2 = createSprite(200  , 100 , 50 , 50);
   gameobject2.shapeColor = "green"

   gameobject3 = createSprite(300  , 100 , 50 , 50);
   gameobject3.shapeColor = "green"

  
   gameobject4 = createSprite(500  , 100 , 50 , 50);
   gameobject4.shapeColor = "green"
}

 function draw() {
    background(0, 0 , 0);  

    movingrect.x = mouseX  
    movingrect.y = mouseY

    bounceOff(movingrect , gameobject1);

    drawSprites();

 }

  



