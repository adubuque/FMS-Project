let scene = 0;
let HPButton;
let E1Button;
let E2Button;
let E3Button;
let E4Button;
let c;

let exercise1 = document.getElementById('exercise1');
exercise1.style.display="none";

let exercise2 = document.getElementById('exercise2');
exercise2.style.display="none";

let exercise3 = document.getElementById('exercise3');
exercise3.style.display="none";

function setup() {
  createCanvas(500, 500);
  E1Button = createButton('Exercise 1');
  E1Button.style('border: none');
  E1Button.style('color: blue');
  E1Button.mousePressed(changeE1);
  
  E2Button = createButton('Exercise 2');
  E2Button.style('border: none');
  E2Button.style('color: blue');
  E2Button.mousePressed(changeE2);
  
  E3Button = createButton('Exercise 3');
  E3Button.style('border: none');
  E3Button.style('color: blue');
  E3Button.mousePressed(changeE3);
  
  HPButton = createButton('Homepage');
  HPButton.style('border: none');
  HPButton.style('color: blue');
  HPButton.mousePressed(changeHP);
  
  c = color('aqua');
}

function changeE1()
{
  scene = 1;
  exercise1.style.display="block";
  exercise2.style.display="none";
  exercise3.style.display="none";
}

function changeE2()
{
  scene = 2;
  exercise1.style.display="none";
  exercise2.style.display="block";
  exercise3.style.display="none";
}

function changeE3()
{
  scene = 3;
  exercise1.style.display="none";
  exercise2.style.display="none";
  exercise3.style.display="block";
}

function changeHP()
{
  scene = 0;
  exercise1.style.display="none";
  exercise2.style.display="none";
  exercise3.style.display="none";
}

function draw() {
  background(c);
  switch(scene)
  {
      case(0): 
        homepage();
        break;
      case(1):
        navbar();
        break;
      case(2):
        navbar();
        break;
      case(3):
        navbar();
        break;
      case(4):
        navbar();
        break;   
  }
}

function homepage()
{
  fill(0);
  c = color('aqua');
  textSize(32);
  fill(color('black'));
  text("Homepage",width/2-80,height/4);
  
  HPButton.hide();
  HPButton.size(100,25);
  HPButton.style('backgroundColor: white');
  
  E1Button.position(100,200);
  E1Button.size(100,25);
  E1Button.style('backgroundColor: white');
  cloud(100,200);
  
  E2Button.position(300,200)
  E2Button.size(100,25);
  E2Button.style('backgroundColor: white');
  cloud(300,200);
  
  E3Button.position(200,350);
  E3Button.size(100,25);
  E3Button.style('backgroundColor: white');
  cloud(200,350);
}

function cloud(x,y)
{
  fill(color('white'));
  noStroke(); 
  let ellipse1 = ellipse(x+50,y,100,50);
  let ellipse2 = ellipse(x+50,y+25,100,50);
  let circle1 = circle(x,y+13,40);
  let circle2 = circle(x+100,y+13,40);
}

function navbar()
{
  HPButton.show();
  HPButton.position(50+25,460);
  HPButton.size(70,25);
  
  E1Button.position(120+25,460);
  E1Button.size(70,25)
  
  E2Button.position(190+25,460);
  E2Button.size(70,25);
  
  E3Button.position(260+25,460);
  E3Button.size(70,25);
}
