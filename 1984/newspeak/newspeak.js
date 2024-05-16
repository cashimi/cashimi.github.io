var ballx = 300;
var bally = 300;
var ballSize = 150;
var score = 0;
var gameState = "L1";
var blackwhite;
var crimestop;
var doublethink;
var unperson;
let home;

function preload() {
  blackwhite = loadImage('https://cashimi.github.io/1984/images/blackwhite.png');
  crimestop = loadImage('https://cashimi.github.io/1984/images/crimestop.png');
  doublethink = loadImage('https://cashimi.github.io/1984/images/doublethink.png');
  unperson = loadImage('https://cashimi.github.io/1984/images/unperson.png');
} //end preload

function setup() {
  createCanvas(600, 600);
  textAlign(CENTER);
  textSize(20);
} //end setup

function draw() {
  background(63, 63, 63);
  if (gameState == "L1") {
    levelOne();
  }
  if (gameState == "L2") {
    levelTwo();
  }
  if (gameState == "L3") {
    levelThree();
  }
  if (gameState == "L4") {
    levelFour();
  }
  if (gameState == "win") {
    youWin();
  }
  text((""), width/2, 40);
} //end draw

function levelOne() {
  fill('white');
  text("denying the 'truth' because the Party claims so", width/2, height-20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if (distToBall < ballSize/2) {
    ballx = random(width);
    bally = random(height);
    score = score + 1;
  }

  if (score>= 5) {
    gameState = "L2";
  }
  image(blackwhite, ballx-ballSize/2, bally-ballSize/2, ballSize, ballSize);
} //end of level 1

function levelTwo() {
  text("rid oneself of unwanted thoughts", width/2, height-20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if (distToBall < ballSize/2) {
    ballx = random(width);
    bally = random(height);
    score = score + 1;
  }

  if (score>= 10) {
    gameState = "L3";
  }
  image(crimestop, ballx-ballSize/2, bally-ballSize/2, ballSize, ballSize);
} //end of level 2

function levelThree() {
  text(" simultaneously accepting two contradictory beliefs", width/2, height-20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if (distToBall < ballSize/2) {
    ballx = random(width);
    bally = random(height);
    score = score + 1;
  }

  if (score>= 15) {
    gameState = "L4";
  }
  image(doublethink, ballx-ballSize/2, bally-ballSize/2, ballSize, ballSize);
} //end of level 3

function levelFour() {
  text("a person who has been vaporized", width/2, height-20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if (distToBall < ballSize/2) {
    ballx = random(width);
    bally = random(height);
    score = score + 1;
  }

  if (score>= 20) {
    gameState = "win";
  }
  image(unperson, ballx-ballSize/2, bally-ballSize/2, ballSize, ballSize);
} //end of level 4

function youWin() {
  text("You did a doubleplusgood job. Aren't things simpler now?", width/2, height/2);
  if (!home) { // Check if the link has already been created
    home = createA('https://cashimi.github.io/1984/home1.html', 'Return.', '_top');
    home.position((width-home.size().width)/2, height-40);
    home.style('font-size', '22px');
    home.style('color', 'white');
  }
}
