// just draws a circle

function setup() {
	// create a place to draw
	createCanvas(windowWidth, windowHeight);
	noLoop();
}


function draw() {
	// clear the background
	background(0, 0, random(55));
	noFill();
	// set drawing styles

	// fill(random(255), random(255), random(255));
	strokeWeight(random(0.9, 20));

	// draw a circle
	for (var i = 0; i < random(50 * height); i++) {
		for (var x = 0; x < random(100 * 2); x++) {
			stroke(random(255), random(255), random(255));
			ellipse(random(width), random(height), random(500), random(500));

		}

	}

}
