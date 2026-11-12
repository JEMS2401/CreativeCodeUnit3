//loading assets
let TriangleSFX
let CrashSFX
let FluteSFX
let KickSFX
let PianoSFX
let TrumpetSFX

function setup() {
createCanvas(1500, 815);

//No Outlines
noStroke()
  
//Rectangle Origin Point  
rectMode(CENTER)
  
  angleMode(DEGREES)
  textAlign(CENTER)
}

//TriangleSFX = await loadImage("../assets/Triangle.wav");
//CrashSFX = await loadImage("../assets/Crash.wav");
//FluteSFX = await loadImage("../assets/Flute.wav");
//KickSFX = await loadImage("../assets/Kick.wav");
//PianoSFX = await loadImage("../assets/Piano.mp3");
//TrumpetSFX = await loadImage("../assets/Trumpet.wav");


function draw() {
//BG
background(0);

//Text Title
push();
fill(255, 255, 255);
textSize(50);
text('Evil and Initimdating Soundboard', width*.5, height*.1);
pop();


fill(255, 255, 255)
circle(width*.2,height*.4,70)
fill(150, 150, 150)
circle(width*.5,height*.4,70)
circle(width*.8,height*.4,70)
circle(width*.2,height*.7,70)
circle(width*.5,height*.7,70)
circle(width*.8,height*.7,70)


}

function mousePressed() {

//Play Triangle SFX
if (mouseX > width*.1 && mouseX < width*.3) {
  if (mouseY > height*.3 && mouseY < height*.5) {
if (mouseIsPressed === true) {
window.play(TriangleSFX);
}
}
}
}