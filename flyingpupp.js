
var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");

// Load the images
var dog = new Image();
var bg = new Image();
var fg = new Image();
var pipeN = new Image();
var pipeS = new Image();

dog.src = "images/th.png";
bg.src = "images/bg.png";
fg.src = "images/fg.png";
pipeN.src = "images/pipeNorth.png";
pipeS.src = "images/pipeSouth.png";

// when keydown is pressed
document.addEventListener('keydown', moveUp);
function moveUp() {
  dy -= 25;
  fly.play();
}

//Some variables
var gap = 85;
var cons = pipeN.height + gap;
var dx = 10;
var dy = 150;
var gravity = 1.5;
var score = 0;

// audio
var fly = new Audio();
var scor = new Audio();
fly.src = "sounds/fly.mp3";
scor.src = "sounds/score.mp3";

//pipe coordinates
var pipe = [];
pipe[0] = {
    x : cvs.width,
    y : 0
};

// draw the images
function draw() {
  ctx.drawImage(bg,0,0);
  for (var i = 0; i < pipe.length; i++) {
    ctx.drawImage(pipeN,pipe[i].x,pipe[i].y);
    ctx.drawImage(pipeS,pipe[i].x,pipe[i].y+cons);
    pipe[i].x--;

    if (pipe[i].x == 125) {
      pipe.push({
        x : cvs.width,
        y : Math.floor(Math.random()*pipeN.height)-pipeN.height
      });
    }
    // Detects collision
    if (dx + dog.width >= pipe[i].x && dx + dog.width <= pipe[i].x+pipeN.width
        && (dy + dog.height <= pipe[i].y + pipeN.height || dy + dog.height >= pipe[i].y + cons) || dy + dog.height >= cvs.height-fg.height ) {
      location.reload(); // reload the page
    }
    if(pipe[i].x == 5) {
      score++;
      scor.play();
    }
  }


  ctx.drawImage(fg, 0, cvs.height-fg.height);
  ctx.drawImage(dog, dx, dy);
  dy += gravity;

  ctx.fillStyle = "#000";
  ctx.font = "20px verdana";
  ctx.fillText("Score: " + score, 10, cvs.height - 20);
  requestAnimationFrame(draw);
}
draw();
