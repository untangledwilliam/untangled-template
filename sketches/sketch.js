// USEFUL FUNCTIONS

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function bounceCheck() {
  console.log(rectX);
  console.log(rectY);
  if (rectX + rectXSize >= CANVAS_WIDTH)
    rectXVelocity = 0 - rectXVelocity;
  if (rectY + rectYSize >= CANVAS_HEIGHT)
    rectYVelocity = 0 - rectYVelocity;
  if (rectX <= 0)
    rectXVelocity = 0 - rectXVelocity;
  if (rectY <= 0)
    rectYVelocity = 0 - rectYVelocity;
}

// VARIABLES

// Constants

const CANVAS_WIDTH = window.innerWidth;
const CANVAS_HEIGHT = window.innerHeight;

// Non-constants

let colour;

let circleX = 50;
let circleY = 50;
let circleXVelocity = 1;
let circleYVelocity = 1;

let rectX = 150;
let rectY = 150;
let rectXSize = 100;
let rectYSize = 100;
let rectXVelocity = getRandomArbitrary(-5, 5);
let rectYVelocity = getRandomArbitrary(-5, 5);

// SETUP AND DRAW

function setup() {
  // create a canvas
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);

  colour = getRandomInt(0, 256);
}

function draw() {
  // colour the background black
  background(255);
  // select white as a colour
  fill(colour);
  // draw a rectangle
  rect(rectX, rectY, rectXSize, rectYSize);
  // draw a circle
  circle(circleX, circleY, 100);


  // check if it's touching the walls
  bounceCheck();

  // change the circle's X position
  circleX += circleXVelocity;

  // change the rectangle's X and Y position
  rectX += rectXVelocity;
  rectY += rectYVelocity;


}