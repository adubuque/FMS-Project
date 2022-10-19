let currentPage = 1,
  numberOfPages = 5,
  mouseIsClicked = false,
  buttonText = 'next page';

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  textAlign(CENTER);
  textSize(30);
  noStroke();
  fill(33);
}

function draw() {
  background(220);

  switch (currentPage) {
    case 1:
      drawPage(currentPage);
      buttonText = 'next exercise';
      break;

    case 2:
      drawPage(currentPage);
      buttonText = 'next exercise';
      break;
    case 3:
      drawPage(currentPage);
      buttonText = 'next exercise';
      break;
    case 4:
      drawPage(currentPage);
      buttonText = 'next exercise';
      break;
    case 5:
      drawPage(currentPage);
      buttonText = 'finish exercise';
      break;
      
  }

  customButton(width / 2, height * 0.8, 40);

  mouseIsClicked = false;
}

function customButton(x, y, r) {
  push();
  fill(100, 130, 200);
  ellipse(x, y, r);
  fill(33);
  textSize(10);
  text(buttonText, x, y);
  pop();

  if (dist(mouseX, mouseY, x, y) < r / 2 && mouseIsClicked) {
    if (currentPage >= numberOfPages) {
      currentPage = 1;
    } else {
      currentPage++;
    }
  }
}


function drawPage(page) {
  switch (page) {
    case 1:
      push();
      textSize(16);
      text('Welcome to the FMS project! Click the button to start', width/2, height*.2);
      pop();
      break;
    case 2:
      push();
      rect(width / 2, height / 2, 100, 100);

      text('Exercise 1', width / 2, height * 0.2);
      pop();
      break;
    case 3:
      push();
      ellipse(width / 2, height / 2, 100);

      text('Exercise 2', width / 2, height * 0.2);
      pop();
      break;
    case 4:
      push()
      triangle(width/2, height/2-100, width/2 - 50, height/2, width/2+50, height/2);
      
      text('Exercise 3', width / 2, height * 0.2);
      pop();
      break;
    case 5:
      push();
      arc(width/2, height/2, 50, 50, 0, HALF_PI);
      
      text('Exercise 4', width / 2, height * 0.2);
      pop();
  }
}

function mouseClicked() {
  mouseIsClicked = true;
}
