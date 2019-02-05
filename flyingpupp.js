
var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");

// Load the images
var dog = new Image();
var bg = new Image();
var fg = new Image();
var pipeN = new Image();
var pipeS = new Image();

//Some other variables
var gap = 85;
var cons = pipeN.height+gap;

dog.src = "images/th.png";
bg.src = "images⁩/bg.png";
fg.src = "images/fg.png";
pipeN.src = "images/pipeNorth.png";
pipeS.src = "images/pipeSouth.png";

// draw the images
function draw() {
  ctx.drawImage(bg,0,0);
  ctx.drawImage(pipeN,100,0);
  ctx.drawImage(pipeS,100,0+cons);

  ctx.drawImage(fg, 0, cvs.height-fg.height);
}
draw();
