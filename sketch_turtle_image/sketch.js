// basic template sketch showing how to use the Turtle class
var myTurtle;
var leafImage;

function preload() {
	leafImage = loadImage("assets/leaf_white.png");
}

function setup() {
	createCanvas(640, 640);
	noFill();
	stroke(random(255), random(255), random(255));
	background(random(255), random(255), random(255));
	// frameRate(5);
	// noLoop();

	myTurtle = new Turtle();
}



function draw() {
	// move to starting position (without drawing)
	myTurtle.penUp();
	myTurtle.moveBackward(750);
	myTurtle.penDown();

	// star
	for (var i = 0; i < 85; i++) {
		for (var ii = 0; ii < 15; ii++) {
			myTurtle.moveForward(90);
			myTurtle.turnLeft(1080);
			myTurtle.image(leafImage, 15, 2);
		}

		myTurtle.turnRight(173);
		myTurtle.image(leafImage, 20, -10);
		// stroke(random(255), random(255), random(255));

	}


}
