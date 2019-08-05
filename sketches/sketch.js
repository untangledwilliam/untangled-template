// USEFUL FUNCTIONS

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

/** I got this function from https://p5js.org/examples/form-regular-polygon.html, but I
 *  changed the npoints variable to always be six to create a hexagon. */
function hexagon(x, y, radius) {
  let angle = TWO_PI / 6;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

// VARIABLES

// Constants

const CANVAS_WIDTH = window.innerWidth;
const CANVAS_HEIGHT = window.innerHeight;

const NUM_OF_HEXAGONS = getRandomInt(1, 10);

// Non-constants

let hexagonList = [];
class Hexagon {
  colour = getRandomInt(0, 255);
  x = 150;
  y = 150;
  diameter = 100;
  radius = this.diameter / 2;
  xVelocity = getRandomArbitrary(-5, 5);
  yVelocity = getRandomArbitrary(-5, 5);

  bounceCheck() {
    // hexagon
    if (this.x + this.radius >= CANVAS_WIDTH)
      this.xVelocity = 0 - this.xVelocity;
  
    if (this.y + this.radius >= CANVAS_HEIGHT)
      this.yVelocity = 0 - this.yVelocity;
  
    if (this.x - this.radius <= 0)
     this.xVelocity = 0 - this.xVelocity;
  
    if (this.y - this.radius <= 0)
      this.yVelocity = 0 - this.yVelocity;
  }
}

// SETUP AND DRAW

function setup() {
  // create a canvas
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);

  colour = getRandomInt(0, 256);

  for (let i = 0; i <= NUM_OF_HEXAGONS; i++) { 
    hexagonList.push(new Hexagon())
  }

}

function draw() {
  // colour the background black
  background(255);

  // loop through the 5 hexagons
  for (let i = 0; i < NUM_OF_HEXAGONS; i++) {
    let currentHexagon = hexagonList[i];

    // select white as a colour
    fill(currentHexagon.colour);

    hexagon(currentHexagon.x, currentHexagon.y, currentHexagon.diameter);

    // cHeck if it's toucHing tHe walls
    currentHexagon.bounceCheck();

    // cHange tHe Hexagon's X position
    currentHexagon.x += currentHexagon.xVelocity;
    currentHexagon.y += currentHexagon.yVelocity;
  }
}