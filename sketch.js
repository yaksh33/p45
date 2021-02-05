var hr, mn, sc;  

var scAngle, mnAngle, hrAngle;

function setup() {
  createCanvas(400,500);
  
  

  console.log(hr%12, mn, sc);
  angleMode(DEGREES);
}

function draw() {
  background("snow");  

  noStroke();
  textSize(40);
  fill(0);
  text(hr%12 + " : " + mn + " : " + sc, 115, 450)

  hr = hour();
  mn = minute();
  sc = second();

  hrAngle = map(hr%12, 0, 12, 0, 360);
  mnAngle = map(mn, 0, 60, 0, 360);
  scAngle = map(sc, 0, 60, 0, 360);
  
  translate(200, 200);
  rotate(-90);

  //minutes hand
  push();
  rotate(mnAngle);
  stroke(3, 150, 155);
  strokeWeight(10);
  line(0, 0, 120, 0);
  pop(); 

  //hours Hand
  push();
  rotate(hrAngle);
  stroke(39, 118, 12);
  strokeWeight(12);
  line(0, 0, 80, 0);
  pop();

  //seconds hand
  push();
  rotate(scAngle);
  stroke(232, 131, 30);
  strokeWeight(5);
  line(0, 0, 130, 0);
  pop();

  //hours
  stroke(39, 118, 12);
  strokeWeight(12);
  noFill();
  arc(0, 0, 290, 290, 0.5, hrAngle);
  //seconds
  stroke(232, 131, 30);
  strokeWeight(5);
  noFill();
  arc(0, 0, 326, 326, -.3, scAngle);
  //minutes
  stroke(3, 150, 155);
  strokeWeight(10);
  noFill();
  arc(0, 0, 311, 311, 0, mnAngle);
  
  push();
  noStroke();
  fill(0);
  ellipse(0, 0, 15, 15);
  pop()

}