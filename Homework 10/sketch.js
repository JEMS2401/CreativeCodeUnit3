TintHeight = 0
CloudX = 0
CloudX2 = 680

function setup() {
  createCanvas(800, 600);
noStroke()
}

function draw() {
  background(0, 203, 255);


//Darkening Sky For Loop
for (let i = 0; i < 20 ; i++) {
fill(0, 124, 188, 20)
rect(0, 0, 800, TintHeight)

TintHeight = TintHeight + 20

}

TintHeight = 0


//Sun
fill(241, 255, 57)
circle(400, 100, 200)

//Fading parts
fill(241, 255, 57, 100)
circle(400, 100, 250)

fill(241, 255, 57, 50)
circle(400, 100, 300)


//Scrolling Clouds
fill(255)
ellipse(CloudX, 380, 100, 75)
ellipse(CloudX-30, 400, 230, 150)
ellipse(CloudX+40, 370, 230, 180)
ellipse(CloudX+90, 350, 230, 190)
ellipse(CloudX+110, 400, 270, 190)

ellipse(CloudX2, 380, 100, 75)
ellipse(CloudX2-30, 400, 230, 150)
ellipse(CloudX2+40, 370, 230, 180)
ellipse(CloudX2+90, 350, 230, 190)
ellipse(CloudX2+110, 400, 270, 190)



CloudX = CloudX - 1
CloudX2 = CloudX2 - 1

if (CloudX < -380) { 
CloudX = 980
}

if (CloudX2 < -380) { 
CloudX2 = 980
}

//Grass

  // Light Green
fill(73,236,114)
rect(0, 415, 800, 400)

// Mid Green
fill(29,145,58)
rect(0, 450, 800, 400)

// Dark Green
fill(18,94,37)
rect(0, 500, 800, 400)


//Ladybug on the Mouse

//Body
fill(0)
ellipse(mouseX,mouseY,50,75)
ellipse(mouseX,mouseY-40,40,40)

//Wings
fill(255,80,82)
ellipse(mouseX+45,mouseY-15,75,50)
ellipse(mouseX-45,mouseY-15,75,50)

//Spots
fill(0)
circle(mouseX+70,mouseY-6,15)
circle(mouseX+40,mouseY-30,15)
circle(mouseX+35,mouseY,15)

circle(mouseX-70,mouseY-6,15)
circle(mouseX-40,mouseY-30,15)
circle(mouseX-35,mouseY,15)

//Antenna
push();
stroke(0);
strokeWeight(6);

line(mouseX,mouseY-45,mouseX-20,mouseY-70)
line(mouseX,mouseY-45,mouseX+20,mouseY-70)
pop();

}