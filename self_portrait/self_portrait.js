function setup() {
// put setup code here
createCanvas(600, 600); //canvas size
background(8, 132, 132); //background color
}


function draw() {
  strokeWeight(3);
  
  //head
  fill(255,231,220);
  ellipse(300, 200, 200, 230);
  //ears
  arc(395, 200, 50, 50, radians(275), radians(85));
  arc(201, 200, 50, 50, radians(85), radians(275));

  //smile :]
  fill(255,231,220);
  beginShape();
    vertex(250, 250);
    vertex(250, 270);
    vertex(350, 270);
    vertex(350, 250);
  endShape();
  
  //eyes
  fill(0);
  ellipse(280, 210, 10, 10);
  ellipse(320, 210, 10, 10);

  //hair
  //noStroke();
  fill(124, 63, 0);
    //left half
  triangle(330, 150, 310, 100, 350, 110);
  ellipse(260, 120, 140, 80);
  triangle(190, 72, 350, 88, 360, 130);
  ellipse(215, 110, 90, 60);
  triangle(170, 115, 180, 180, 225, 130);
    //right half
  triangle(330, 110, 370, 130, 350, 155);
  ellipse(385, 140, 60, 70);
  

  
  fill(200);
  beginShape(); //neck and torso
    vertex(280, 315); 
    vertex(280, 330);
    vertex(150, 330);
    vertex(155, 440);
    vertex(180, 420);
    vertex(210, 460);
    vertex(250, 420);
    vertex(350, 470);
    vertex(400, 420);
  endShape();

}//end of draw function
