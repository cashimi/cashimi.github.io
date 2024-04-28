var ballx = 300;
var bally = 300;
var ballSize = 100;
var score = 0;
var gameState = "L1";
var tartarus;
var hades;
var greece;
var asphodel;
var thug;
var satyr;
var elysium;
var bother;
var dracon;
var stone;
var end;

function preload() {
  tartarus = loadImage('https://cashimi.github.io/gameImages/tartarus.png');
  hades = loadImage('https://cashimi.github.io/gameImages/hades.png');
  greece = loadImage('https://cashimi.github.io/gameImages/greece.png');
  asphodel = loadImage('https://cashimi.github.io/gameImages/asphodel.png');
  thug = loadImage('https://cashimi.github.io/gameImages/thug.png');
  satyr = loadImage('https://cashimi.github.io/gameImages/satyr.jpeg');
  elysium = loadImage('https://cashimi.github.io/gameImages/elysium.png');
  bother = loadImage('https://cashimi.github.io/gameImages/bother.png');
  dracon = loadImage('https://cashimi.github.io/gameImages/dracon.png');
  stone = loadImage('https://cashimi.github.io/gameImages/stone.png');
  end = loadImage('https://cashimi.github.io/gameImages/dash.png');
} //end preload

function setup() {
createCanvas(800, 600);
textAlign(CENTER);
textSize(20);
} //end setup


function draw() {
background(tartarus);
if(gameState == "L1"){
  levelOne();
}
if(gameState == "L2"){
  levelTwo();
}
if(gameState == "L3"){
  levelThree();
}
if(gameState == "L4"){
  levelFour();
}
if(gameState == "L5"){
  levelFive();
}
if(gameState == "win"){
  youWin();
}
text(("Score: " + score), width/2, 55);
} //end draw

function levelOne(){
  fill('white');
  textSize(50);
  text("Tartarus", width/2, height-20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if (distToBall < ballSize/2){
    ballx = random(width);
    bally = random(height);
    score = score + 1;
  }
  if(score>= 5){
    gameState = "L2";
  }
  line(ballx, bally, mouseX, mouseY);
  image(thug, ballx-ballSize/2, bally-ballSize/2, ballSize, ballSize);
} //end of level 1

function levelTwo(){
  background(asphodel);
  text("Asphodel", width/2, height-20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if (distToBall < ballSize/2){
    ballx = random(width);
    bally = random(height);
    score = score + 1;
  }
  if(score>= 10){
    gameState = "L3";
  }
  image(dracon, ballx-ballSize/2, bally-ballSize/2, ballSize, ballSize);
} //end of level 2

function levelThree(){
  background(elysium);
  text("Elysium", width/2, height-20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if (distToBall < ballSize/2){
    ballx = random(width);
    bally = random(height);
    score = score + 1;
    ballSize = ballSize - 5;
  }
  
  if(score>= 15){
    gameState = "L4";
  }
  image(stone, ballx-ballSize/2, bally-ballSize/2, ballSize, ballSize);
} //end of level 3

function levelFour(){
  background(satyr);
  text("Satyr", width/2, height-20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if (distToBall < ballSize/2){
    ballx = random(width);
    bally = random(height);
    score = score + 1;
  }
  if(score>= 20){
    gameState = "L5";
  }
  image(bother, ballx-ballSize/2, bally-ballSize/2, ballSize, ballSize);
} //end of level 4

function levelFive(){
  background(greece);
  text("Greece: BOSS BATTLE!!", width/2, height-20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if (distToBall < ballSize/2){
    ballx = random(width);
    bally = random(height);
    score = score + 1;
  }
  if(score>= 25){
    gameState = "win";
  }
  image(hades, ballx-ballSize/2, bally-ballSize/2, ballSize, ballSize);
} //end of level 5

function youWin(){
  background(end);
  textSize(50);
  text("you literally beat Hades!!!", width/2, height-20);
}
