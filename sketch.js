
var monkey , monkey_running, ground, groundImage, invGround;
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score, survTime;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
  groundImage = loadImage("ground2.png");
 
}



function setup() {
  
  createCanvas(400,400);
  
  ground = createSprite(200,370);
  ground.addImage(groundImage);
  ground.scale = 1;
  ground.x = ground.width/2;
  ground.velocityX = -3;
  
  monkey = createSprite(100,350);
  monkey.addAnimation("monkey_running", monkey_running);
  monkey.scale = 0.1;
  
  invGround = createSprite(200,380,200,10);
  invGround.visible = false;
  
  FoodGroup = new Group();
  obstacleGroup = new Group();
  
}


function draw() {
  background("white");
  
  survTime = Math.ceil(frameCount/frameRate());
  text("Survival Time :" + survTime,300,20);
  
  if (ground.x < 0){
      ground.x = ground.width/2;
  }
  
  if(keyDown("space") && monkey.y >= 310) {
      monkey.velocityY = -12;
    }
  
    monkey.velocityY = monkey.velocityY + 0.8;
  
  if(FoodGroup.isTouching(monkey)){
    FoodGroup.destroyEach();
  }
  
  
  monkey.collide(invGround);
  spawnFruits();
  spawnObastacle();
  drawSprites();
  
}
function spawnFruits(){
  
 if(frameCount%150 === 0){
    fruit = createSprite(400,20);
    fruit.addImage(bananaImage);
    fruit.scale = 0.1;
    fruit.y = Math.round(random(250,280));
    fruit.velocityX = -3;
    fruit.lifetime = 200;
    
    FoodGroup.add(fruit);
 
 }
}

function spawnObastacle(){
  
 if(frameCount%180 === 0){
    obstacle = createSprite(400,360);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -3;
    obstacle.lifetime = 200;
    
    obstacleGroup.add(obstacle);
 
 }
}


