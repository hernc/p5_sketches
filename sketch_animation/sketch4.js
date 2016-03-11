// basic template sketch showing how to use the Turtle class
var myTurtle;
var TURN_ANGLE = 1;

function setup() {
	createCanvas(640, 640);
	// pixelDensity(1); // disable high-res mode on retina displays
	frameRate(10);
	myTurtle = new Turtle();
}



function draw() {
	myTurtle.moveTo(320,320);
	myTurtle.turnTo(cos(10));

// 	randomSeed(cos(-5));
	background(0);
	stroke(random(255),56,78);
	// strokeWeight();
	TURN_ANGLE = frameCount;
	// TURN_ANGLE = TURN_ANGLE / (sin(0.2));

	for (var i = 0; i < 500; i++) {
		for (var j = 0; j < i % cos(120); j++) {
			myTurtle.moveForward(-100);
			// myTurtle.turnLeft(TURN_ANGLE);
			myTurtle.turnRight(TURN_ANGLE * millis(5));
		}

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
