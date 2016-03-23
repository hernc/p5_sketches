// basic template sketch showing how to use the Turtle class
var myTurtle;
var r, g, b;

function setup() {
	createCanvas(640, 640);
	noFill();
	stroke(255);
	background(50);
	// noLoop();
	frameRate(20);


}



function draw() {
	r = random(255);
	g = random(255);
	b = random(255);
	// move to starting position (without drawing)

	myTurtle = new Turtle(320, 600);
	var outer, loop, i;

	stroke(r, g, b);

	for (outer = 0; outer < 40; outer++) {
		myTurtle.pushState();

		myTurtle.turnLeft(outer * 3.5);
		for (loop = 0; loop < 50; loop++) {

			for (i = 0; i < 30; i++) {
				strokeWeight(sin(myTurtle.bearingRadians) * 2 + 2);
				myTurtle.moveForward(i - loop * 0.05);
				myTurtle.turnLeft(-loop + i);
			}

			for (i = 0; i < 30; i++) {
				strokeWeight(sin(myTurtle.bearingRadians) * 2 + 2);
				myTurtle.moveForward(i - loop * 0.05);
				myTurtle.turnLeft(-8.025 + (loop - i));
			}
		}
		myTurtle.popState();
	}


}

function mouseReleased() {
	saved();
}
