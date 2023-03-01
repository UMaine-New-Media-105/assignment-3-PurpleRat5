function setup() {
  // ADD CONSTANT VARIABLES
  // Set values here that don't change over the course of the game,
  // but are convenient to name as variables because they are used
  // throughout the code. Eg, "groundY" could be the height of the ground.
  // The following constants don't change, but they are convenient
  // to set as variables because they are used throughout some programs.
  birdHeight = 50; // This is an approximation that depends on scale.
  birdWidth = 50; // This is an approximation that depends on scale.
  // These are the starting values of variables that may change.
  birdX = 50;
  birdY = 350;
  // ADD CHANGING VARIABLES
  // Set an initial value for variables here that may change later.
  // Eg, "birdX = 0" could start the catcher at the canvas' left edge.
  // "seedIsFalling = false" could ensure it doesn't fall until triggered.
  seedX = random(400);
  seedY = 0;
  seedFalling = false
  // Set up the canvas.
  createCanvas(400, 400);
  angleMode(DEGREES); // Use this to create shapes with arcs and degrees.
  
}

function draw() {
  // BACKGROUND
  // Draw the background color and any other shapes that don't change.
  background("skyblue");
  
  // ADD CATCHER
  // Add your catcher by calling its function with appropriate parameters.
  addJoe(mouseX, birdY, 0.8, mouseIsPressed)
  if(mouseIsPressed || seedFalling){
    seedFalling = true
    seedY+=2
    addSeed(seedX, seedY)
  }
  // ADD SEED
  // Add the falling shape, either directly here or via a function.
  // This code could include animating the fall, or checking for conditions.
  
}
function addJoe(x, y, scal, mousedown) {
  if(mousedown){
    push();
    translate(x, y); // Move the joe to the position requested.
    scale(scal)
    noStroke()
    fill("brown")
    rect(-40, 0, 80, 50)
    fill("tan")
    ellipse(0, 0, 80)
    fill("white")
    ellipse(-15, 0, 15, 10)
    ellipse(15, 0, 15, 10)
    fill("black")
    ellipse(-15, 1, 7)
    ellipse(15, 1, 7)
    fill("brown")
    ellipse(0, 20, 25,15)
    arc(0, 20, 30, 50, 0, 180)
    arc(0, -17, 70, 50, 180, 0)
    fill("black")
    arc(0, 20, 10, 20, 0, 180)
    pop();
  }
  else{
    push();
    translate(x, y); // Move the joe to the position requested.
    scale(scal)
    noStroke()
    fill("lightyellow")
    rect(-40, 0, 80, 50)
    fill("tan")
    ellipse(0, 0, 80)
    fill("white")
    ellipse(-15, 0, 15, 10)
    ellipse(15, 0, 15, 10)
    fill("black")
    ellipse(-15, 1, 7)
    ellipse(15, 1, 7)
    fill("lightyellow")
    ellipse(0, 20, 25,15)
    arc(0, 20, 30, 50, 0, 180)
    arc(0, -17, 70, 50, 180, 0)
    fill("black")
    arc(0, 20, 10, 20, 0, 180)
    rect(-30, -14, 20, 2)
    rect(10, -14, 20, 2)
    
    pop();
  }
}

function addSeed(x, y, pressed){
  //Tiger Code
  push()
  translate(x, y)
  fill("orange")
  ellipse(8, -7, 7)
  ellipse(-8, -7, 7)
  ellipse(0, 0, 20, 20)
  fill("black")
  stroke("black")
  triangle(0,-7, 3, -10, -3, -10)
  stroke("white")
  ellipse(5, 0, 5)
  ellipse(-5, 0, 5)
  stroke("black")
  fill("brown")
  triangle(0,0, 3, 3, -3, 3)
  arc(0, 5, 3, 6, 0, 180)
  pop()
  //Reset position
  if(y>370){
    seedY = 0
    seedX = random(400);
  }
}
// CATCHER
// Add a function here to build your "catcher" from shapes.
// This function can include parameters that tell it where to sit
// as well as conditions that change its appearance.
