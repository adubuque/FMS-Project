let shape1;
let shape2;
var e4Score = 0;
let draggable1Made = false;
let draggable2Made = false;
function setup() {
  createCanvas(500, 500);
  background(color("aqua"));
  titleText();
  buttonEasy = createButton("Easy");
  buttonEasy.size(175, 75, 20);
  buttonEasy.style("border-radius: 12px;");
  buttonEasy.position(150, 300);
  buttonEasy.mousePressed(buildEasyMaze);

  /*
  buttonHard = createButton('Hard');
    buttonHard.size(177, 75, 20);
    buttonHard.style('border-radius: 12px;')
    buttonHard.position(300, 300);
    buttonHard.mousePressed(buildHardMaze);
    */
}

function draw() {
  if ((draggable1Made == true) | (draggable2Made == true)) {
    background(color("aqua"));
  }

  if (draggable1Made == true) {
    shape1.over();
    shape1.update();
    shape1.show();

    stroke(color("black"));
    strokeWeight(6);

    // draws the walls of the maze
    wall1 = new mazeWall(135, 250, 135, 440);
    wall2 = new mazeWall(135, 250, 250, 250);
    wall3 = new mazeWall(45, 160, 250, 160);
    wall4 = new mazeWall(250, 10, 250, 160);
    wall5 = new mazeWall(250, 10, 340, 10);
    wall6 = new mazeWall(340, 10, 340, 350);
    wall7 = new mazeWall(250, 250, 250, 350);
    wall8 = new mazeWall(45, 440, 430, 440);
    wall9 = new mazeWall(430, 250, 430, 440);
    wall10 = new mazeWall(430, 250, 500, 250);
    wall11 = new mazeWall(430, 160, 500, 160);
    wall12 = new mazeWall(430, 10, 430, 160);
    wall13 = new mazeWall(430, 10, 340, 10);
    wall14 = new mazeWall(45, 160, 45, 440);
    //allows walls to have collision, sometimes?
    wall1.mazeCollision();
    wall2.mazeCollision();
    wall3.mazeCollision();
    wall4.mazeCollision();
    wall5.mazeCollision();
    wall6.mazeCollision();
    wall7.mazeCollision();
    wall8.mazeCollision();
    wall9.mazeCollision();
    wall10.mazeCollision();
    wall11.mazeCollision();
    wall12.mazeCollision();
    wall13.mazeCollision();
    wall14.mazeCollision();
    //makes the green area at the end
    fill(color("rgb(8,233,24)"));
    stroke(color("green"));
    strokeWeight(1);
    rect(430, 162, 85, 85);
    strokeWeight(1);
    stroke(color("black"));
    // if shape makes it to the green zone, increase score and start over. win.
    if (
      shape1.x > 430 &&
      shape1.x < 430 + 85 &&
      shape1.y > 162 &&
      shape1.y < 162 + 85
    ) {
      succeedMaze();
    }
  }
  if (draggable2Made == true) {
    shape2.over();
    shape2.update();
    shape2.show();
  }
  // displays the score in the top left
  fill("white");
  strokeWeight(2);
  stroke(color("black"));
  textSize(24);
  text("Score: " + e4Score, 65, 25);
}

function titleText() {
  //change font to be better.
  //Builds Title Text
  fill("white");
  stroke(color('black'));
  strokeWeight(2);
  textSize(32);
  textAlign(CENTER, CENTER);
  text("MAZE", 250, 50);
  textSize(16);
  textAlign(CENTER, CENTER);
  text("Select a Difficulty!", 250, 75);
}

// triggered when you collide with a wall and fail. send you back to the start
// deducts points.
function failedMaze() {
  e4Score -= 2;
  shape1 = new mazeDraggable(77, 375, 30, 30);
}

function succeedMaze() {
  e4Score += 10;
  draggable1Made = false;
  setup();
}

// triggers the building of the Easy mode maze.
function buildEasyMaze() {
  frameRate(240);
  background(color("aqua"));
  buttonEasy.remove();
  //buttonHard.remove();
  shape1 = new mazeDraggable(77, 375, 30, 30);
  draggable1Made = true;
}

/*
function buildHardMaze(){
  background(220);
  buttonEasy.remove();
  buttonHard.remove();
  shape2 = new mazeDraggable(65, 425, 25, 25);
  draggable2Made = true;
}
*/

function mousePressed() {
  if (draggable1Made == true) {
    shape1.pressed();
  }
  if (draggable2Made == true) {
    shape2.pressed();
  }
}

function mouseReleased() {
  if (draggable1Made == true) {
    shape1.released();
  }
  if (draggable2Made == true) {
    shape2.released();
  }
}

class mazeWall {
  constructor(x1, y1, x2, y2) {
    line(x1, y1, x2, y2);
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }

  mazeCollision() {
    if (
      shape1.x >= this.x1 &&
      shape1.x <= this.x2 &&
      shape1.y >= this.y1 &&
      shape1.y <= this.y2
    ) {
      failedMaze();
    }

    if (
      shape1.y >= this.y1 &&
      shape1.y <= this.y2 &&
      (shape1.x > shape1.x - 30 && shape1.x < shape1.x + 30) == this.x1 &&
      shape1.x == this.x2
    ) {
      failedMaze();
    }
  }
}

class mazeDraggable {
  constructor(x, y, w, h) {
    this.dragging = false; // Is the object being dragged?
    this.rollover = false; // Is the mouse over the ellipse?
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.offsetX = 0;
    this.offsetY = 0;
  }

  over() {
    // Is mouse over object
    if (
      mouseX > this.x &&
      mouseX < this.x + this.w &&
      mouseY > this.y &&
      mouseY < this.y + this.h
    ) {
      this.rollover = true;
    } else {
      this.rollover = false;
    }
  }

  update() {
    // Adjust location if being dragged
    if (this.dragging) {
      this.x = mouseX + this.offsetX;
      this.y = mouseY + this.offsetY;
    }
  }

  show() {
    stroke(0);
    // Different fill based on state
    if (this.dragging) {
      fill(50);
    } else if (this.rollover) {
      fill(100);
    } else {
      fill(175, 200);
    }
    rect(this.x, this.y, this.w, this.h);
  }

  pressed() {
    // Did I click on the rectangle?
    if (
      mouseX > this.x &&
      mouseX < this.x + this.w &&
      mouseY > this.y &&
      mouseY < this.y + this.h
    ) {
      this.dragging = true;
      // If so, keep track of relative location of click to corner of rectangle
      this.offsetX = this.x - mouseX;
      this.offsetY = this.y - mouseY;
    }
  }

  released() {
    // Quit dragging
    this.dragging = false;
  }
}
