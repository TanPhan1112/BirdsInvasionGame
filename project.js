let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let x = 0;
let y = 0;
let height = 0;
let width = 0;
let score = 0;
let falling;

//drawObjects();
let img = new Image();
let leaf = new Image();               // leaf
let blackB = new Image();             // black bird
let redB = new Image();               // red bird
let blueB = new Image();              // blue bird
let yellowB = new Image();            // yellow bird
let tank = new Image();               // tank

let flying1x = Math.floor((Math.random() * canvas.width));
let flying1y = Math.floor((Math.random() * canvas.height));

let flying2x = Math.floor((Math.random() * canvas.width));
let flying2y = Math.floor((Math.random() * canvas.height));

let flying3x = Math.floor((Math.random() * canvas.width));
let flying3y = Math.floor((Math.random() * canvas.height));

let flying4x = Math.floor((Math.random() * canvas.width));
let flying4y = Math.floor((Math.random() * canvas.height));

let flying5x = Math.floor((Math.random() * canvas.width));
let flying5y = Math.floor((Math.random() * canvas.height));

let flying6x = Math.floor((Math.random() * canvas.width));
let flying6y = Math.floor((Math.random() * canvas.height));

function drawObjects() {
  img.src = "background.jpg";
  leaf.src = "mapleleaf.png";
  blackB.src = "blackbird.png";
  redB.src = "redbird.png";
  blueB.src = "bluebird.png";
  yellowB.src = "yellowbird.png";

  img.onload = function () {
    falling = setInterval(function () {
      ctx.drawImage(img, x, y);

      ctx.drawImage(leaf, flying1x += Math.floor((Math.random() * 5)), flying1y += Math.floor((Math.random() * 5)), width + 50, height + 50);
      ctx.drawImage(leaf, flying6x += Math.floor((Math.random() * 5)), flying6y += Math.floor((Math.random() * 5)), width + 50, height + 50);

      if (bird1) {
        ctx.drawImage(blackB, flying2x += 6, flying2y, width + 50, height + 50);
      } else {
        ctx.drawImage(blackB, flying2x += Math.floor((Math.random() * 5)), flying2y += Math.floor((Math.random() * 20)), width + 50, height + 50);
        ctx.drawImage(blackB, flying2x += 3, flying2y, width + 50, height + 50);
      }
      if (bird2) {
        ctx.drawImage(redB, flying3x += 7, flying3y, width + 50, height + 50);
      } else {
        ctx.drawImage(redB, flying3x += Math.floor((Math.random() * 5)), flying3y += Math.floor((Math.random() * 20)), width + 50, height + 50);
        ctx.drawImage(redB, flying3x += 3, flying3y, width + 50, height + 50);
      }
      if (bird3) {
        ctx.drawImage(blueB, flying4x += 8, flying4y, width + 50, height + 50);
      } else {
        ctx.drawImage(blueB, flying4x += Math.floor((Math.random() * 5)), flying4y += Math.floor((Math.random() * 20)), width + 50, height + 50);
        ctx.drawImage(blueB, flying4x += 3, flying4y, width + 50, height + 50);
      }
      if (bird4) {
        ctx.drawImage(yellowB, flying5x += 9, flying5y, width + 50, height + 50);
      } else {
        ctx.drawImage(yellowB, flying5x += Math.floor((Math.random() * 5)), flying5y += Math.floor((Math.random() * 20)), width + 50, height + 50);
        ctx.drawImage(yellowB, flying5x += 3, flying5y, width + 50, height + 50);
      }

      if (flying1x >= canvas.width || flying1y >= canvas.height) {
        flying1x = Math.floor((Math.random() * canvas.width));
        flying1y = Math.floor((Math.random() * canvas.height));
      }
      if (flying2x >= canvas.width || flying2y >= canvas.height) {
        if (bird1 == false) {
          blackB.src = "blackbird.png";
          flying2x = Math.floor((Math.random() * canvas.width)) - 284;
          flying2y = Math.floor((Math.random() * canvas.height));
          bird1 = true;
        } else {
          flying2x = Math.floor((Math.random() * canvas.width)) - 284;
          flying2y = Math.floor((Math.random() * canvas.height));
        }
      }
      if (flying3x >= canvas.width || flying3y >= canvas.height) {
        if (bird2 == false) {
          redB.src = "redbird.png";
          flying3x = Math.floor((Math.random() * canvas.width)) - 284;
          flying3y = Math.floor((Math.random() * canvas.height));
          bird2 = true;
        } else {
          flying3x = Math.floor((Math.random() * canvas.width)) - 284;
          flying3y = Math.floor((Math.random() * canvas.height));
        }
      }
      if (flying4x >= canvas.width || flying4y >= canvas.height) {
        if (bird3 == false) {
          blueB.src = "bluebird.png";
          flying4x = Math.floor((Math.random() * canvas.width)) - 284;
          flying4y = Math.floor((Math.random() * canvas.height));
          bird3 = true;
        } else {
          flying4x = Math.floor((Math.random() * canvas.width)) - 284;
          flying4y = Math.floor((Math.random() * canvas.height));
        }
      }
      if (flying5x >= canvas.width || flying5y >= canvas.height) {
        if (bird4 == false) {
          yellowB.src = "yellowbird.png";
          flying5x = Math.floor((Math.random() * canvas.width)) - 284;
          flying5y = Math.floor((Math.random() * canvas.height));
          bird4 = true;
        } else {
          flying5x = Math.floor((Math.random() * canvas.width)) - 284;
          flying5y = Math.floor((Math.random() * canvas.height));
        }
      }
      if (flying6x >= canvas.width || flying6y >= canvas.height) {
        flying6x = Math.floor((Math.random() * canvas.width)) - 284;
        flying6y = Math.floor((Math.random() * canvas.height));
      }
      //console.log("La:" + flying1x + ", " + flying1y);
    }, 50);
  }
}


// timming for game
let count = true;
function timer() {
  score = 0;
  if (count == true) {
    // set time
    let second = 50;
    let timer = setInterval(function() {
      second -= 1;
      document.getElementById("a").innerHTML = second + "s";
      if (second == 0) {
        clearInterval(timer);
        clearInterval(falling);
        count = true;
        document.getElementById("a").innerHTML = "Time out, Your score is: " + score;
      }
    }, 1000);
    drawObjects();
    count = false;
  }
}

let bird1 = true;
let bird2 = true;
let bird3 = true;
let bird4 = true;
// mouse Event
function mousePoint(event) {
  let x = event.offsetX;
  let y = event.offsetY;
  console.log(x + ", " + y);

  // black bird
  if (x >= flying2x && x <= (flying2x + 50) && y >= flying2y && y <= (flying2y + 50)) {
    if (bird1) {
      blackB.src = "dead.png";
      //ctx.drawImage(blackB, flying2x += Math.floor((Math.random() * 5)), flying2y += Math.floor((Math.random() * 5)), width + 50, height + 50);
      //ctx.drawImage(blackB, flying2x += 4, flying2y, width + 50, height + 50);
      score += 1;
      bird1 = false;
    }
  }

  // red bird
  if (x >= flying3x && x <= (flying3x + 50) && y >= flying3y && y <= (flying3y + 50)) {
    if (bird2) {
      redB.src = "dead.png";
      //ctx.drawImage(redB, flying3x += Math.floor((Math.random() * 5)), flying3y += Math.floor((Math.random() * 5)), width + 50, height + 50);
      //ctx.drawImage(redB, flying3x += 4, flying3y, width + 50, height + 50);
      score += 2;
      bird2 = false;
    }
  }

  // blue bird
  if (x >= flying4x && x <= (flying4x + 50) && y >= flying4y && y <= (flying4y + 50)) {
    if (bird3) {
      blueB.src = "dead.png";
      //ctx.drawImage(blueB, flying4x += Math.floor((Math.random() * 5)), flying4y += Math.floor((Math.random() * 5)), width + 50, height + 50);
      //ctx.drawImage(blueB, flying4x += 4, flying4y, width + 50, height + 50);
      score += 3;
      bird3 = false;
    }
  }

  // yellow bird
  if (x >= flying5x && x <= (flying5x + 50) && y >= flying5y && y <= (flying5y + 50)) {
    if (bird4) {
      yellowB.src = "dead.png";
      //ctx.drawImage(yellowB, flying5x += Math.floor((Math.random() * 5)), flying5y += Math.floor((Math.random() * 5)), width + 50, height + 50);
      //ctx.drawImage(yellowB, flying5x += 4, flying5y, width + 50, height + 50);
      score += 4;
      bird4 = false;
    }
  }
}
