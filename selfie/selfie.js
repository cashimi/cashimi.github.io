function setup() {
// put setup code here
createCanvas(600, 600); //canvas size
background(8, 132, 132); //background color
}

function draw() {
  //back hair
  fill(124, 63, 0)
  ellipse(300, 260, 200, 330);
  rect(195, 140, 50, 50);
  rect(355, 140, 50, 50);
  triangle(190, 300, 300, 250, 197, 210);
  triangle(300, 250, 405, 210, 410, 299);

  //head and ears
  fill(255,231,220);
  ellipse(300, 200, 200, 230);
  arc(395, 200, 50, 50, radians(275), radians(85));
  arc(201, 200, 50, 50, radians(85), radians(275));
  //eyes
  fill(0);
  ellipse(280, 210, 12, 10);
  ellipse(320, 210, 12, 10);
  //smile :]
  fill(0);
  beginShape();
    vertex(250, 250);
    vertex(250, 270);
    vertex(350, 270);
    vertex(350, 250);
    vertex(345, 250);
    vertex(345, 265);
    vertex(255, 265);
    vertex(255, 250);
    vertex(250, 250);
  endShape();
  
  //hair
  fill(124, 63, 0);
    //left half
  triangle(330, 150, 310, 100, 350, 110);
  ellipse(255, 130, 140, 90);
  triangle(187, 72, 350, 88, 360, 130);
  ellipse(215, 110, 90, 60);
  triangle(170, 115, 180, 180, 225, 130);
    //right half
  triangle(330, 110, 370, 130, 350, 155);
  ellipse(385, 140, 60, 70);
  triangle(328, 123, 430, 125, 370, 90);
  triangle(390, 125, 415, 125, 415, 180);


  //neck and torso
  fill(255,231,220);
  beginShape();
    vertex(280, 330);
    vertex(280, 310);
    vertex(320, 310);
    vertex(320, 330);
  endShape();
  beginShape();
    vertex(280, 315); 
    vertex(280, 330);
    vertex(150, 330);
    vertex(155, 440);
    vertex(180, 420);
    vertex(210, 460);
    vertex(250, 420);
    vertex(350, 470);
    vertex(400, 420);
    vertex(440, 450);
    vertex(445, 330);
    vertex(320, 330);
    vertex(320, 315);
  endShape();
  //shirt
  noStroke(); //<- this placement adds a border
  fill(128, 0, 0);
  beginShape();
    vertex(280, 330);
    vertex(150, 330);
    vertex(155, 440);
    vertex(180, 420);
    vertex(210, 460);
    vertex(250, 420);
    vertex(350, 470);
    vertex(400, 420);
    vertex(440, 450);
    vertex(445, 330);
    vertex(320, 330);
  endShape(CLOSE);
    //noob
  fill(244, 204, 67);
  rect(275, 355, 50, 50, 10);
  fill(0);
  ellipse(290, 370, 6, 8);
  ellipse(310, 370, 6, 8);
  beginShape();
    vertex(280, 385);
    vertex(300, 395); //+20, +10
    vertex(302, 392); // +2, -3
    vertex(282, 382); 
    vertex(280, 385);
  endShape();
  beginShape();
    vertex(300, 395);
    vertex(319, 385);
    vertex(317, 382);
    vertex(297, 392);
  endShape();
  
  //earrings
  fill(0)
    //right
  beginShape();
    vertex(405, 215); 
    vertex(415, 225); //+10
    vertex(417, 223); //+2, -2
    vertex(407, 213); //-10
    vertex(405, 215);
  endShape();
  beginShape();
    vertex(400, 220);
    vertex(410, 230); //+10
    vertex(412, 228); //+2, -2
    vertex(402, 218); //-10
    vertex(400, 220);
  endShape();
    //left
  beginShape();
    vertex(180, 225);
    vertex(190, 215); //+10, -10
    vertex(188, 213); //-2
    vertex(178, 223); //-10, +10
    vertex(180, 225);
  endShape();
  beginShape();
    vertex(185, 230);
    vertex(195, 220); //+10, -10
    vertex(193, 218); //-2
    vertex(183, 228); //-10, +10
    vertex(185, 230);
  endShape();
}//end of draw function
