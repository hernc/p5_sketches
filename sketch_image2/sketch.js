// assults your eyes

var lion;

function preload() {
	lion = loadImage("assets/lion.jpg");
	// noLoop();
}

function setup() {
	// create a place to draw
	createCanvas(lion.width, lion.height);
	frameRate(30);
	lion.loadPixels();
}


function draw() {
	// clear the background
	background(0, 0, 0);

	// set drawing styles
	// stroke(255, 0, 0);
	// fill(255, 255, 255);
	// strokeWeight(10);
	imageMode(CENTER);

	image(lion, width / 2, height / 2, lion.width, lion.height);
	var c = get(300, 350);
	fill(c);
	noStroke();

	var d = pixelDensity;
	for (var i = 0; i < d; i++) {
		for (var j = 0; j < d; j++) {
			// loop over
			idx = 4 * ((y * d + j) * width * d + (x * d + i));
			pixels[idx] = r;
			pixels[idx + 1] = g;
			pixels[idx + 2] = b;
			pixels[idx + 3] = a;
		}
	}

	// for (var k = 9; k < 30; k++) {
	// 	rect(random(width), random(height), (10, 50), (10, 90));
	// }
	lion.updatePixels();



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
