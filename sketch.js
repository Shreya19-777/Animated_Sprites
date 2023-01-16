//Declaring constant variables needed prior to preload and setup
let spritesheet;
let spritedata;
let spritesheetUp;
let spritedataUp;
let spritesheetRight;
let spritedataRight;
let spritesheetDown;
let spritedataDown;
let spritesheetLeft;
let spritedataLeft;

let animation = [];
let animationUp = [];
let animationRight = [];
let animationDown = [];
let animationLeft = [];

let skeletons = [];
let skeletonsUp = [];
let skeletonsRight = [];
let skeletonsDown = [];
let skeletonsLeft = [];

//Loads the spritesheet images and their respective JSON files for each skeleton walking direction
function preload() {
  spritedata = loadJSON('skeletonDown.json');
  spritesheet = loadImage('skeletonDown.png');
  spritedataUp = loadJSON('skeletonUp.json');
  spritesheetUp = loadImage('skeletonUp.png');
  spritedataRight = loadJSON('skeletonRight.json');
  spritesheetRight = loadImage('skeletonRight.png');
  spritedataDown = loadJSON('skeletonDown.json');
  spritesheetDown = loadImage('skeletonDown.png');
  spritedataLeft = loadJSON('skeletonLeft.json');
  spritesheetLeft = loadImage('skeletonLeft.png');
}


function setup() {
  //Creates the canvas size
  createCanvas(640, 480);

  //Randomly picks a value used to determine the framerate as the skeleton moves which changes the speed at which the skeleton appears to be moving
  let speed = random(0.1, 0.3);

  //Saves each frame to a spot in the animation array using it's respective spritesheet
  let frames = spritedata.frames;
  for (let i = 0; i < frames.length; i++) {
    let pos = frames[i].position;
    let img = spritesheet.get(pos.x, pos.y, pos.w, pos.h);
    animation.push(img);
  }

  //Inputs the required values to create the object
  for (let i = 0; i < 1; i++) {
    skeletons[i] = new Sprite(animation, 0, i * 75, speed);
  }
  
  let framesUp = spritedataUp.frames;
  for (let i = 0; i < frames.length; i++) {
    let pos = frames[i].position;
    let img = spritesheetUp.get(pos.x, pos.y, pos.w, pos.h);
    animationUp.push(img);
  }

  for (let i = 0; i < 1; i++) {
    skeletonsUp[i] = new SpriteUp(animationUp, 0, i * 75, speed);
  }
  
  let framesRight = spritedataRight.frames;
  for (let i = 0; i < frames.length; i++) {
    let pos = frames[i].position;
    let img = spritesheetRight.get(pos.x, pos.y, pos.w, pos.h);
    animationRight.push(img);
  }

  for (let i = 0; i < 1; i++) {
    skeletonsRight[i] = new SpriteRight(animationRight, 0, i * 75, speed);
  }
  
  let framesDown = spritedataDown.frames;
  for (let i = 0; i < frames.length; i++) {
    let pos = frames[i].position;
    let img = spritesheetDown.get(pos.x, pos.y, pos.w, pos.h);
    animationDown.push(img);
  }

  for (let i = 0; i < 1; i++) {
    skeletonsDown[i] = new SpriteDown(animationDown, 0, i * 75, speed);
  }
  
  let framesLeft = spritedataLeft.frames;
  for (let i = 0; i < frames.length; i++) {
    let pos = frames[i].position;
    let img = spritesheetLeft.get(pos.x, pos.y, pos.w, pos.h);
    animationLeft.push(img);
  }

  for (let i = 0; i < 1; i++) {
    skeletonsLeft[i] = new SpriteLeft(animationLeft, 0, i * 75, speed);
  }
}

//Allows the player to press specific keys and have the sprite on screen move a certain way in response
function keyPressed() {
  for (let skeleton of skeletons) {
    for (let skeletonUp of skeletonsUp) {
      for (let skeletonRight of skeletonsRight) {
        for (let skeletonDown of skeletonsDown) {
          for (let skeletonLeft of skeletonsLeft) {
            //When the player presses the 'w' key the sprite moves up
            if (key == 'w') {
              skeletonUp.show();
              skeletonUp.animate();
              skeletonUp.moveUp();
              skeletonRight.moveUp();
              skeletonDown.moveUp();
              skeletonLeft.moveUp();
              skeleton.moveUp();
            }
            //When the player presses the 'd' key the sprite moves right
            else if (key == 'd') {
              skeletonRight.show();
              skeletonRight.animate();
              skeletonRight.moveRight();
              skeletonUp.moveRight();
              skeletonDown.moveRight();
              skeletonLeft.moveRight();
              skeleton.moveRight();
            }
            //When the player presses the 's' key the sprite moves down
            else if (key == 's') {
              skeletonDown.show();
              skeletonDown.animate();
              skeletonDown.moveDown();
              skeletonUp.moveDown();
              skeletonRight.moveDown();
              skeletonLeft.moveDown();
              skeleton.moveDown();
            }
            //When the player presses the 'a' key the sprite moves left
            else if (key == 'a') {
              skeletonLeft.show();
              skeletonLeft.animate();
              skeletonLeft.moveLeft();
              skeletonUp.moveLeft();
              skeletonRight.moveLeft();
              skeletonDown.moveLeft();
              skeleton.moveLeft();
            }
            //Before the player presses anything or when the player presses any key aside from the ones already mentioned the sprite stops moving and faces towards the player
            else {
              skeleton.show();
              skeleton.animate();
            }
          }
        }
      }
    }
  }
}

//Draws the sprite onto the screen
function draw() {
  //Picks the background colour
  background(0);
            
  //Calls the function that allows the sprite to move in the desired direction
  keyPressed();
}
