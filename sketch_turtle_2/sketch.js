// basic template sketch showing how to use the Turtle class
var myTurtle;


function setup() {
	createCanvas(windowWidth, windowHeight);
	noFill();
	stroke(random(255), random(255), random(255));
	background(random(255), random(255), random(255));
	frameRate(30);
	// noLoop();

	myTurtle = new Turtle();
	uglyTurtle = new Turtle();
	evilTurtle = new Turtle();
}



function draw() {
	// move to starting position (without drawing)
	myTurtle.penUp();
	myTurtle.moveBackward(random(150));
	myTurtle.penDown();

	// // star
	for (var i = 0; i < 50; i++) {
		for (var j = i; j < 50; j++) {
			myTurtle.moveForward(j > -400);
			myTurtle.turnLeft(i % 170);
		}

	}

	// //sprial
	for (var k = 0; k < 50; k++) {
		uglyTurtle.moveBackward(k * sin(5.1));
		uglyTurtle.turnTo(k * random(100));
		uglyTurtle.moveTo(i * cos(5.1));
		uglyTurtle.turnTo(k * millis(900));
	}

	//house
	// evilTurtle.turnLeft(90); // left wall
	// evilTurtle.moveForward(100);
	// evilTurtle.turnLeft(90); // begin roof
	// evilTurtle.moveForward(200);
	// evilTurtle.turnRight(cos(frameCount) * 135);
	// evilTurtle.moveForward(100);
	// evilTurtle.turnRight(90);
	// evilTurtle.moveForward(100);
	// evilTurtle.turnRight(135);
	// evilTurtle.moveForward(20);
	// evilTurtle.turnLeft(90); // right wall
	// evilTurtle.moveForward(100);

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
