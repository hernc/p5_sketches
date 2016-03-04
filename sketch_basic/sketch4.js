var img;

// images must be loaded before they can be used
// use the preload() function to load your images and p5 will make sure they
// are loaded before setup() and draw() are called
// note that in your sketches, your load image probably won't require a path.
// you will use something like loadImage("shell.jpg")

function preload() {
	img = loadImage("lion.jpg");
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	noLoop();
	imageMode(CENTER);
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
			drawThing(random(width), random(height));

		}
	}


}



function drawThing(x, y) {
	var radius;

	// very strong middle bias
	radius = (random(0, 50) + random(0, 50) + random(0, 50) + random(0, 50) +
		random(0, 50)) * 0.2;



	// line(x, y, radius, radius);
	rect(x, y, radius, radius);
	// image(img, x, y, radius * 1.5, radius);

}
