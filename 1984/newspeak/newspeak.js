var ballx = 300;
var bally = 300;
var ballSize = 40;
var score = 0;
var gameState = "L1";
var img;
var back;
let capture;

function preload() {
  img = loadImage('https://cashimi.github.io/graffiti/grafstar.png');
  back = loadImage('https://cashimi.github.io/graffiti/brick.png');
} //end preload

function setup() {
createCanvas(600, 600);
textAlign(CENTER);
textSize(20);
capture = createCapture(VIDEO);
capture.size(400, 400);
capture.hide();
} //end setup


function draw() {
background(220);
if(gameState == "L1"){
  levelOne();
}
if(gameState == "L2"){
  levelTwo();
}
if(gameState == "L3"){
  levelThree();
}
if(gameState == "win"){
  youWin();
}

text(("Score: " + score), width/2, 40);
} //end draw

function levelOne(){
  text("Level 1", width/2, height-20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if (distToBall < ballSize/2){
    ballx = random(width);
    bally = random(height);
    score = score + 1;
  }
  
  if(score>= 5){
    gameState = "L2";
  }
  
  ellipse(ballx, bally, ballSize, ballSize);
  line(ballx, bally, mouseX, mouseY);
} //end of level 1

function levelTwo(){
  background(back); //200,100,0
  image(capture, 0, 0, width, height);
  text("Level 2!", width/2, height-20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if (distToBall < ballSize/2){
    ballx = random(width);
    bally = random(height);
    score = score + 1;
  }
  
  if(score>= 10){
    gameState = "L3";
  }
  //ellipse(ballx, bally, ballSize, ballSize);
  //line(ballx, bally, mouseX, mouseY);
  image(img, ballx-ballSize/2, bally-ballSize/2, ballSize, ballSize);
} //end of level 2

function levelThree(){
  background(0,100,200);
  text("Level 3!", width/2, height-20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if (distToBall < ballSize/2){
    ballx = random(width);
    bally = random(height);
    score = score + 1;
    ballSize = ballSize - 5;
    image(capture, ballx-ballSize/2, bally-ballSize/2, ballSize, ballSize);
    filter(ERODE);
  }
  
  if(score>= 15){
    gameState = "win";
    background(random(255));
  }
  //ellipse(ballx, bally, ballSize, ballSize);
  //line(ballx, bally, mouseX, mouseY);
  image(capture, ballx-ballSize/2, bally-ballSize/2, ballSize, ballSize);
  filter(ERODE);
} //end of level 3

function youWin(){
  background(200,100,2000);
  textSize(100);
  text("You Win", width/2, height-20);
  textSize(20);
}
