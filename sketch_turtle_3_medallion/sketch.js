// basic template sketch showing how to use the Turtle class
var myTurtle;


function setup() {
	createCanvas(windowWidth, windowHeight);
	noFill();
	stroke(random(255), random(255), random(255));
	background(0);
	frameRate(60);
	// noLoop();

	myTurtle = new Turtle();
	uglyTurtle = new Turtle();
	evilTurtle = new Turtle();
}



function draw() {
	// move to starting position (without drawing)
	myTurtle.penUp();
	myTurtle.moveBackward(noise(115));
	myTurtle.penDown();

	uglyTurtle.penDown();
	uglyTurtle.moveBackward((360));
	uglyTurtle.penUp();

	// // star
	for (var i = 0; i < 50; i++) {
		for (var j = i * cos(50); j < 100; j++) {
			myTurtle.moveForward(i * noise(14,360));
			myTurtle.turnLeft(i * noise(j * noise(17,180)));

			uglyTurtle.moveBackward(i * noise(40));
			uglyTurtle.turnRight(i * 170);
		}

	}

	// //sprial
	for (var k = noise(i); k < 50; k++) {
		for (var l = k; l < i; l++) {
			uglyTurtle.moveBackward(k * noise(50.1));
			uglyTurtle.turnTo(k * noise(i));
			uglyTurtle.moveTo(i * noise(k));
			uglyTurtle.turnTo(k * noise(90));
		}

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
