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
}


function draw() {
	// clear the background
	background(0, 0, 0);

	// set drawing styles
	// stroke(255, 0, 0);
	// fill(255, 255, 255);
	// strokeWeight(10);
	imageMode(CENTER);

	image(lion,width/2,height/2, lion.width, lion.height);
	var c = get(random(400,150),random(550,600));
  fill(c);
  noStroke();

	for (var i = 0; i < 500; i++) {
		rect(random(windowWidth), random(windowHeight),  random(10,50),random(10,90));
	}




	if (frameCount < 150) {
		saveFrame("frame", frameCount);
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
