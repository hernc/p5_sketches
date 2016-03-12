// basic template sketch showing how to use the Turtle class
var myTurtle;
var TURN_ANGLE = 1;
var lion;



// images must be loaded before they can be used
// use the preload() function to load your images and p5 will make sure they
// are loaded before setup() and draw() are called
// note that in your sketches, your load image probably won't require a path.
// you will use something like loadImage("shell.jpg")

function preload() {
  lion = loadImage("lion.jpg");
}



function setup() {
  createCanvas(640, 960);
  // pixelDensity(1); // disable high-res mode on retina displays
  frameRate(10);
  myTurtle = new Turtle();
  noLoop();

}


function draw() {
  image(lion, 0, 0);
  myTurtle.moveTo(320, 320);
  myTurtle.turnTo(cos(10));

  stroke(random(255), 150, 78);
  TURN_ANGLE = frameCount;
  // TURN_ANGLE = TURN_ANGLE / (sin(0.2));


  for (var i = 0; i < 500; i++) {
    for (var j = 0; j < i % cos(120); j++) {
      myTurtle.moveForward(-100);
      myTurtle.turnRight(TURN_ANGLE * millis(5));
    }

  }

  lion.loadPixels();

  for (var x = 0; x < 640; x++) {
    for (var y = 0; x < 960; y++) {
      var pixelIndex = (y * 640 + x) * 4;


      lion.pixels[pixelIndex] = random(255);
      lion.pixels[pixelIndex + 1] = 0;
      lion.pixels[pixelIndex + 2] = 255;


    }
    lion.updatePixels();
  }



  if (frameCount < 150) {
    // saveFrame("frame", frameCount);
  } else {
    noLoop();
  }
}

// saveFrame - a utility function to save the current frame out with a nicely formatted name
function saveFrame(name, frameNumber) {
  // remove the decimal part (just in case)
  frameNumber = floor(frameNumber);
  // zero-pad the number (e.g. 13 -> 0013);
  var paddedNumber = ("0000" + frameNumber).substr(-4, 4);

  save(name + "_" + paddedNumber);
}
