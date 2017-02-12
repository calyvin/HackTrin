var capture;
var picture;

function setup() {
  background(255, 255, 0);
  createCanvas(320, 240);
  capture = createCapture(VIDEO);
  capture.size(320, 240);
  //capture.hide();
  b = createButton();
}

function draw() {
  b.mousePressed(function() {
  	picture = capture;
  	image(picture, 0, 0);
  })
  

}