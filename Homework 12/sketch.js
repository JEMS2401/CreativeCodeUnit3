//loading assets
let TriangleSFX
let CrashSFX
let FluteSFX
let KickSFX
let PianoSFX
let TrumpetSFX

async function setup() {
createCanvas(1500, 815);

//No Outlines
noStroke()
  
//Rectangle Origin Point  
rectMode(CENTER)
  
  angleMode(DEGREES)
  textAlign(CENTER)

TriangleSFX = await loadSound("../Assets/Triangle.wav");
CrashSFX = await loadSound("../Assets/Crash.wav");
FluteSFX = await loadSound("../Assets/Flute.wav");
KickSFX = await loadSound("../Assets/Kick.wav");
PianoSFX = await loadSound("../Assets/Piano.mp3");
TrumpetSFX = await loadSound("../Assets/Trumpet.wav");

TriangleIMG = await loadImage("../Assets/TriangleImage.png");
CrashIMG = await loadImage("../Assets/CrashImage.png");
FluteIMG = await loadImage("../Assets/FluteImage.png");
KickIMG = await loadImage("../Assets/KickImage.png");
PianoIMG = await loadImage("../Assets/PianoImage.png");
TrumpetIMG = await loadImage("../Assets/TrumpetImage.png");

BunnyEvil = await loadImage('../Assets/EvilBunny.jpg');
BunnyScared = await loadImage('../Assets/BunnyShocked.jpg');
BunnyComputer = await loadImage('../Assets/BunnyComputer.jpg');
}


function draw() {
//BG
background(0);

image(BunnyScared, 0, 0, width*.3, height);
image(BunnyEvil, width-300, 0, width*.2, height*.3);
image(BunnyComputer, width-700, height-150, width/2, height*.15);

//Text Title
push();
stroke(0)
strokeWeight(10)
textSize(50);
fill(255, 255, 255);
text('Evil and Initimdating Soundboard', width*.5, height*.1);
textSize(25);
text('I think Ive gone insane but the bunnies are too funny not to keep, sorry not sorry', width*.5, height*.95);
pop();

//Circles
push();
imageMode(CENTER)
fill(255, 255, 255)
image(TriangleIMG, width*.2,height*.4,70);
image(CrashIMG, width*.5,height*.4,70);
image(FluteIMG, width*.8,height*.4,70);
image(KickIMG, width*.2,height*.7,70);
image(PianoIMG, width*.5,height*.7,70);
image(TrumpetIMG, width*.8,height*.7,70);
pop();

}

function mousePressed() {

//Disabled for reviewing convienence. Any mouse click will (attempt to) play the Triangle SFX.
//Play Triangle SFX
if (mouseX > width*.15 && mouseX < width*.25) {
if (mouseY > height*.35 && mouseY < height*.45) {
TriangleSFX.play();
}
}

//Play Crash SFX
if (mouseX > width*.45 && mouseX < width*.55) {
if (mouseY > height*.35 && mouseY < height*.45) {
CrashSFX.play();
}
}

//Play Flute SFX
if (mouseX > width*.75 && mouseX < width*.85) {
if (mouseY > height*.35 && mouseY < height*.45) {
FluteSFX.play();
}
}

//Play Kick SFX
if (mouseX > width*.15 && mouseX < width*.25) {
if (mouseY > height*.65 && mouseY < height*.75) {
KickSFX.play();
}
}

//Play Piano SFX
if (mouseX > width*.45 && mouseX < width*.55) {
if (mouseY > height*.65 && mouseY < height*.75) {
PianoSFX.play();
}
}

//Play Trumpet SFX
if (mouseX > width*.75 && mouseX < width*.85) {
if (mouseY > height*.65 && mouseY < height*.75) {
TrumpetSFX.play();
}
}


}