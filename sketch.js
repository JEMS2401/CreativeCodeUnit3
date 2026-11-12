//Circle Scale
CircleSize = 200
CircleChange = 1

//Circle Scale 2
Circle2Size = 1
Circle2Change = 1

//Spliting in Half Bar
rectX = -300
rectX2 = -1300

function setup() {
createCanvas(1500, 815);

//No Outlines
noStroke()
  
//Rectangle Origin Point  
rectMode(CENTER)
  
  angleMode(DEGREES)
  textAlign(CENTER)
}

function draw() {
//First Part of BG
if (mouseY > height/2) {
background(0);
} else {
background (255, 255, 255);
}


//Second Part of BG
if (mouseY > height/2) {
fill(255, 255, 255);
} else {
fill (0);
}
rect(width*.5, height, width, height)

//Splitting Bars
if (mouseY > height/2) {
    fill(255, 255, 255);
} else {
fill (0);
}

  rect(rectX,height*0.5,width*.2,height/20)
  rectX = rectX + 10

  if (rectX > 1800) {
    rectX = -300
  }

  rect(rectX2,height*0.5,width*.2,height/20)
  rectX2 = rectX2 + 10
  
  if (rectX2 > 1800) {
    rectX2 = -300
  }

//Circles Top
if (mouseY > height/2) {
    fill(255, 255, 255);
} else {
fill (0);
}
circle(width*.1, height*.2, CircleSize)
circle(width*.9, height*.2, Circle2Size)

if (CircleSize > 200 || CircleSize < 1) {
    CircleChange = CircleChange * -1
}

//Circles Bottom
if (mouseY > height/2) {
    fill(0);
} else {
fill (255, 255, 255);
}
circle(width*.9, height*.8, CircleSize)
circle(width*.1, height*.8, Circle2Size)

if (Circle2Size > 200 || Circle2Size < 1) {
    Circle2Change = Circle2Change * -1
}

CircleSize = CircleSize + CircleChange
Circle2Size = Circle2Size + Circle2Change


//Text Title
push();
if (mouseY > height/2) {
    fill(255, 255, 255);
} else {
fill (0);
}
textSize(50);
text('Creative Code Unit 3', width*.5, height*.1);
pop();

//Text Group 1
push();
if (mouseY > height/2) {
    fill(255, 255, 255);
} else {
fill (0);
}
push();
textSize(30);
text('The super cool collection of all of my coding projects for Unit 3.', width*.5, height*.25)
text('https://github.com/JEMS2401/CreativeCodeUnit3', width*.5, height*.3)
pop();

//Text Group 2
push();
if (mouseY > height/2) {
    fill(0);
} else {
fill (255, 255, 255);
}
textSize(30);
text('This one links to my sound page:', width*.5, height*.7)
text('LINK', width*.5, height*.75)
pop();

}

function mousePressed() {
if (mouseX > width*.25 && mouseX < width*.75) {
  if (mouseY > height*.25 && mouseY < height*.45) {
if (mouseIsPressed === true) {
window.open("https://github.com/JEMS2401/CreativeCodeUnit3")
}
}
}

if (mouseX > width*.25 && mouseX < width*.75) {
  if (mouseY > height*.65 && mouseY < height*.85) {
if (mouseIsPressed === true) {
window.open("https://github.com/JEMS2401/CreativeCodeUnit3")
}
}
}
}