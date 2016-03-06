// basic template sketch showing how to use the Turtle class
var myTurtle;

function setup() {
	createCanvas(windowWidth, windowHeight);
	noFill();
	stroke(random(255), random(233));
	background(random(255), random(255), random(255));
	// noLoop();

	myTurtle = new Turtle();
}



function draw() {
	// move to starting position (without drawing)
	myTurtle.penUp();
	myTurtle.moveBackward(150);
	myTurtle.penDown();

	// star
	// for (var i = 0; i < 120; i++) {
	// 	myTurtle.moveForward(sin(400 * 5 + 128));
	// 	myTurtle.turnRight(cos(170 / 5));
	// }

	// sprial
	for (var i = 0; i < windowWidth; i++) {
		myTurtle.moveForward(i * 0.1);
		myTurtle.turnRight(10);
		// myTurtle.moveForward(i * 1.5);
		// myTurtle.turnLeft(sin(i));

	}

	//house
	// myTurtle.turnLeft(90); // left wall
	// myTurtle.moveForward(100);
	// myTurtle.turnLeft(90); // begin roof
	// myTurtle.moveForward(20);
	// myTurtle.turnRight(135);
	// myTurtle.moveForward(100);
	// myTurtle.turnRight(90);
	// myTurtle.moveForward(100);
	// myTurtle.turnRight(135);
	// myTurtle.moveForward(20);
	// myTurtle.turnLeft(90); // right wall
	// myTurtle.moveForward(100);

}
