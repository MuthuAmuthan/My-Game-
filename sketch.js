var backgroundimg;
var ninja;
var enemy;
var score = 0;
var enemyGroup;

function preload(){
  backgroundimg = loadImage("images/bg2.gif")


}

function setup() {
  createCanvas(windowWidth,windowHeight);
  ninja = createSprite(200,500,20,100)
  enemyGroup = new Group();
}


function draw() {
  background(backgroundimg); 
  spawnEnemy();
if(){



}
  drawSprites();
}

function spawnEnemy(){
  if(frameCount%200 === 0){
  var enemy = createSprite(width,500);
  enemy.velocityX = -5;
    enemy.lifetime = width/5
    enemyGroup.add(enemy);
  }


}