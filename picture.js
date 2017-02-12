var capture;
var picture;
var switched = false;

function setup() {
  background(255, 255, 0);
  createCanvas(320, 240);
  capture = createCapture(VIDEO);
  capture.size(320, 240);
  //capture.hide();
  b = createButton("Take Picture");
  button = createButton("Get Picture"); //document.getElementById("startTrip");
  button.addClass("btn btn-hg btn-primary");
}

function draw() {
  if(!switched) {
  		button.mousePressed(getImages);
  		switched = true;
  }
  b.mousePressed(function() {
  	picture = capture;
  	image(picture, 0, 0);
  });
  

}

function getImages() {

    $(document).ready(function(){

        $.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
        {
            tags: "paris",
            tagmode: "any",
            format: "json"
        },
        function(data) {
            var rnd = Math.floor(Math.random() * data.items.length);

            var image_src = data.items[rnd]['media']['m'].replace("_m", "_b");

            $('body').css('background-image', "url('" + image_src + "')");

        });

    });
}