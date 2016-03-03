function setup() {
	createCanvas(windowWidth, windowHeight);
	noLoop();

	stroke(random());

}

function draw() {
	background(250, 200, 200);

	// fill(random(0,255), random(0,255), random(0,255));

	var rows = height / 50;
	var cols = width / 50;

	for (row = 0; row < rows; row++) {
		for (col = 0; col < rows; col++) {
			// fill(random(0,255), random(0,255), random(0,255));
			drawThing(col * random(150) + random(55), row * random(50) + 25);

		}
	}


}


var brownianRadius = 25;

function drawThing(x, y) {
	var radius;

	// even
	// radius = random(0, width * random(3));

	// very strong low bias
	// radius = min(random(0, 50), random(0, 50), random(0, 50), random(0, 50), random(0, 50));

	// very strong high bias
	// radius = max(random(0, 50), random(0, 50), random(0, 50), random(0, 50), random(0, 50));

	// very strong middle bias
	radius = (random(0, 50) + random(0, 50) + random(0, 50) + random(0, 50) + random(0, 50)) * 0.2;


	////////////////////////////////////////////////////////////////////
	// curated sizes
	// var r = random(100);
	// if (r < 10) {
	// 	radius = 10;
	// } else if (r < 95) {
	// 	radius = 20;
	// } else {
	// 	radius = 40;
	// }

	////////////////////////////////////////////////////////////////////
	// brownian
	// brownianRadius += random(-5, 5);
	// radius = brownianRadius;

	line(x, y, radius, radius);
	rect(y, x, radius, radius);
	ellipse(x, y, radius * 1.5, radius);

}
