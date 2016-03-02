// adapted from Joshua Nimoy's tutorial
// https://github.com/jtnimoy/scripting-for-illustrator-tutorial
// go read it now

var doc = app.activeDocument;

// doc.pathItems contains common functions for generating shapes, etc.
// here we alias doc.pathItems to a variable named p, just so future code will be shorter
var p = doc.pathItems;

// rectangle parameter order is top, left, width, height
var myRect = p.rectangle(0,0,50,50);

// an ellipse
p.ellipse(100,100,50,50);

// polygon parameter order is centerX, centerY, radius, sides
p.polygon(200,25,25,6);

// the coordinate system in Illustrator is different than p5. Positive Y values mean up, not down.


// rectangle returns a pathItem, a pathItem has many properties that are interesting
// http://yearbook.github.io/esdocs/#/Illustrator/PathItem
myRect.strokeWidth = 2;

// we can create a color like this
var myColor = new RGBColor();
myColor.red = 255;
myColor.green = 0;
myColor.blue = 0;

// and assign it to the rectangle stroke like this
myRect.strokeColor = myColor;

// note that scripting illustrator is very different from using p5.
// in p5 when you draw a rectangle, it is immediately rasterized and can't be changed.
// in illustrator you create a pathItem representing the rectangle and can change its properties



// you can make arbitrary shapes with setEntirePath
var shape = p.add();
shape.setEntirePath([
    [0, 0],
    [0, 100],
    [100, 100],
]);
shape.closed = true;
shape.filled = false;
shape.strokeCap = StrokeCap.ROUNDENDCAP;
shape.strokeJoin = StrokeJoin.ROUNDENDJOIN;
shape.strokeWidth = 10;
