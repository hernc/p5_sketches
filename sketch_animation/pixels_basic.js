// makes an image pixel by pixel

var myImage;

function setup() {
  // create a place to draw
  createCanvas(320, 320);
  myImage = createImage(320, 320);
  noLoop();


}


function draw() {
  // clear the background
  // background(0, 0, 0);

  // begin editing pixel data directly
  myImage.loadPixels();


  for (y = 0; y < 320; y++) {
    // A
    for (x = 0; x < 320; x++) {
      // B

      var pixelIndex = (y * 320 + x) * 4;

      // var col = ;
      // DEMO 1: Simple Gradients
      if (x > 140 && x < 160 && y > 140 && y < 160) {
        myImage.pixels[pixelIndex] = 0;
        myImage.pixels[pixelIndex + 1] = 0;
        myImage.pixels[pixelIndex + 2] = 255;
      } else {
        myImage.pixels[pixelIndex] = 255;
        myImage.pixels[pixelIndex + 1] = 0;
        myImage.pixels[pixelIndex + 2] = 0;
      }



      // DEMO 2: Sin Waves
      // myImage.pixels[pixelIndex] = (sin(x / 320.0 * PI * 2) + 1) * 128;
      // myImage.pixels[pixelIndex + 1] = ((sin(x / 320.0 * PI * 2 * 10) + 1) + (sin(
      // 	y / 320.0 * PI * 2 * 8) + 1)) * 64;
      // myImage.pixels[pixelIndex + 2] = 0;



      myImage.pixels[pixelIndex + 3] = 40;
    }
  }

  //update image with modified pixel data
  myImage.updatePixels();

  image(myImage, 0, 0);
}

// download the image
function mouseReleased() {
  console.log("save");
  save();
}
