let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let x = 0;
let y = 0;
let height = 0;
let width = 0;
let falling;

//drawObjects();
let img = new Image();
let leaf = new Image();
let blackB = new Image();
let redB = new Image();
let blueB = new Image();
let yellowB = new Image();
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

            ctx.drawImage(blackB, flying2x += 4, flying2y, width + 50, height + 50);
            ctx.drawImage(redB, flying3x += 5, flying3y, width + 50, height + 50);
            ctx.drawImage(blueB, flying4x += 6, flying4y, width + 50, height + 50);
            ctx.drawImage(yellowB, flying5x += 7, flying5y, width + 50, height + 50);

            if (flying1x >= canvas.width || flying1y >= canvas.height) {
                leaf.src = "mapleleaf.png";
                flying1x = Math.floor((Math.random() * canvas.width));
                flying1y = Math.floor((Math.random() * canvas.height));
            }
            if (flying2x >= canvas.width || flying2y >= canvas.height) {
                flying2x = Math.floor((Math.random() * canvas.width)) - 284;
                flying2y = Math.floor((Math.random() * canvas.height));
            }
            if (flying3x >= canvas.width || flying3y >= canvas.height) {
                flying3x = Math.floor((Math.random() * canvas.width)) - 284;
                flying3y = Math.floor((Math.random() * canvas.height));
            }
            if (flying4x >= canvas.width || flying4y >= canvas.height) {
                flying4x = Math.floor((Math.random() * canvas.width)) - 284;
                flying4y = Math.floor((Math.random() * canvas.height));
            }
            if (flying5x >= canvas.width || flying5y >= canvas.height) {
                flying5x = Math.floor((Math.random() * canvas.width)) - 284;
                flying5y = Math.floor((Math.random() * canvas.height));
            }
            if (flying6x >= canvas.width || flying6y >= canvas.height) {
                flying6x = Math.floor((Math.random() * canvas.width)) - 284;
                flying6y = Math.floor((Math.random() * canvas.height));
            }
            console.log("La:" + flying1x + ", " + flying1y);
        }, 50);
    }
}

// timming for game
let count = true;
function timer() {
  if (count == true) {
    let second = 60;
    let timer = setInterval(function() {
      second -= 1;
      document.getElementById("a").innerHTML = second + "s";
      if (second == 0) {
        clearInterval(timer);
        clearInterval(falling);
        count = true;
        document.getElementById("a").innerHTML = "Time out, Your score is: ";
      }
    }, 1000);
    drawObjects();
    count = false;
  }
  //console.log(count);
}

function mousePoint(event) {
  let x = event.clientX - 8;
  let y = event.clientY - 139;
  console.log(x + ", " + y);
  console.log(flying1x + ", " + flying1y);
  if (x >= flying1x && x <= (flying1x + 50) && y >= flying1y && y <= (flying1y + 50)) {
      console.log("HIT LOL!");
      leaf.src = "dead.png";
      ctx.drawImage(leaf, flying1x += Math.floor((Math.random() * 5)), flying1y += Math.floor((Math.random() * 5)), width + 50, height + 50);
  }
}
