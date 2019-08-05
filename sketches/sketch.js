// USEFUL FUNCTIONS

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

// VARIABLES

// Constants

const CANVAS_WIDTH = window.innerWidth;
const CANVAS_HEIGHT = window.innerHeight;

// Non-constants

let colour;

let circleList = [];
class Circle {
  circleX = 150;
  circleY = 150;
  circleDiameter = 100;
  circleRadius = this.circleDiameter / 2;
  circleXVelocity = getRandomArbitrary(-5, 5);
  circleYVelocity = getRandomArbitrary(-5, 5);

  bounceCheck() {
    // circle
    if (this.circleX + this.circleRadius >= CANVAS_WIDTH)
      this.circleXVelocity = 0 - this.circleXVelocity;
  
    if (this.circleY + this.circleRadius >= CANVAS_HEIGHT)
      this.circleYVelocity = 0 - this.circleYVelocity;
  
    if (this.circleX - this.circleRadius <= 0)
     this.circleXVelocity = 0 - this.circleXVelocity;
  
    if (this.circleY - this.circleRadius <= 0)
      this.circleYVelocity = 0 - this.circleYVelocity;
  }
}

// SETUP AND DRAW

function setup() {
  // create a canvas
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);

  colour = getRandomInt(0, 256);

  for (let i = 0; i <= 5; i++) { 
    circleList.push(new Circle())
  }

}

function draw() {
  // colour the background black
  background(255);
  // select white as a colour
  fill(colour);

  // loop through the 5 circles
  for (let i = 0; i < 5; i++) { 
    let currentCircle = circleList[i];
    circle(currentCircle.circleX, currentCircle.circleY, currentCircle.circleDiameter);

    // check if it's touching the walls
    currentCircle.bounceCheck();

    // change the circle's X position
    currentCircle.circleX += currentCircle.circleXVelocity;
    currentCircle.circleY += currentCircle.circleYVelocity;
  }
}