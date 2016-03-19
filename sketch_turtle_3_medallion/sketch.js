// basic template sketch showing how to use the Turtle class
var myTurtle;


function setup() {
	createCanvas(windowWidth, windowHeight);
	noFill();
	stroke(random(255), random(255), random(255));
	background(0);
	frameRate(15);
	// noLoop();

	myTurtle = new Turtle();
	uglyTurtle = new Turtle();
	// evilTurtle = new Turtle();
}



function draw() {
	// move to starting position (without drawing)
	myTurtle.penUp();
	myTurtle.moveForward(25);
	myTurtle.penDown();

	// uglyTurtle.penDown();
	// uglyTurtle.moveForward(noise(60));
	// uglyTurtle.penUp();

	// // star
	for (var i = 0; i < 15; i++) {
		for (var j = i * sin(30); j < 9; j++) {
			myTurtle.moveForward(7);
			myTurtle.turnLeft(j + i);
			myTurtle.turnRight(40 * i);
			myTurtle.moveBackward(53 + j);

			// uglyTurtle.moveBackward(i * noise(14, j));
			// uglyTurtle.turnTo(i * noise(j * (17, i)));
			// uglyTurtle.turnRight(cos(360) % 135);

			// uglyTurtle.moveTo(i / 140);
			// uglyTurtle.turnRight(i % 70);
			// uglyTurtle.turnTo(i * 17);

		}

	}

	// //sprial
	// for (var k = noise(i); k < 50; k++) {
	// 	for (var l = k; l < i; l++) {
	// 		uglyTurtle.moveForward(k * 15.1);
	// 		uglyTurtle.turnLeft(k * i);
	// 		uglyTurtle.moveTo(i * [k]);
	// 		uglyTurtle.turnTo(k * [i]);
	// 	}
	//
	// }

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
