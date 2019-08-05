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
  // circle
  if (circleX + circleRadius >= CANVAS_WIDTH)
    circleXVelocity = 0 - circleXVelocity;

  if (circleY + circleRadius >= CANVAS_HEIGHT)
    circleYVelocity = 0 - circleYVelocity;

  if (circleX - circleRadius <= 0)
    circleXVelocity = 0 - circleXVelocity;

  if (circleY - circleRadius <= 0)
    circleYVelocity = 0 - circleYVelocity;
}

// VARIABLES

// Constants

const CANVAS_WIDTH = window.innerWidth;
const CANVAS_HEIGHT = window.innerHeight;

// Non-constants

let colour;

let circleX = 150;
let circleY = 150;
let circleDiameter = 100;
let circleRadius = circleDiameter / 2;
let circleXVelocity = getRandomArbitrary(-5, 5);
let circleYVelocity = getRandomArbitrary(-5, 5);

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
  // draw a circle
  circle(circleX, circleY, circleDiameter);


  // check if it's touching the walls
  bounceCheck();

  // change the circle's X position
  circleX += circleXVelocity;
  circleY += circleYVelocity;
}