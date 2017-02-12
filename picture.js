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
  facialRecognition();
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
            tags: "paris tourist",
            tagmode: "any",
            format: "json"
        },
        function(data) {
            var rnd = Math.floor(Math.random() * data.items.length);

            var image_src = data.items[rnd]['media']['m'].replace("_m", "_b");
            
            document.getElementById("img").src = image_src;

      var img = document.getElementById('img');
      var tracker = new tracking.ObjectTracker(['face']);
      tracker.setStepSize(1.7);
      tracking.track('#img', tracker);
      tracker.on('track', function(event) {
        event.data.forEach(function(rect) {
          window.plot(rect.x, rect.y, rect.width, rect.height);
          
        });
      });
      window.plot = function(x, y, w, h) {
        var rect = document.createElement('div');
        document.querySelector('.demo-container').appendChild(rect);
        rect.classList.add('rect');
        rect.style.width = w + 'px';
        rect.style.height = h + 'px';
        rect.style.left = (img.offsetLeft + x) + 'px';
        rect.style.top = (img.offsetTop + y) + 'px';
      };
            //facialRecognition();
            //$('body').css('background-image', "url('" + image_src + "')");

        });

    });
}

function facialRecognition() {
      var img = document.getElementById('img-holder');
      var tracker = new tracking.ObjectTracker(['face']);
      tracker.setStepSize(1.7);
      tracking.track('#img', tracker);
      tracker.on('track', function(event) {
        event.data.forEach(function(rect) {
          window.plot(rect.x, rect.y, rect.width, rect.height);
          
        });
      });
      window.plot = function(x, y, w, h) {
        var rect = document.createElement('div');
        document.querySelector('.demo-container').appendChild(rect);
        rect.classList.add('rect');
        rect.style.width = w + 'px';
        rect.style.height = h + 'px';
        rect.style.left = (img.offsetLeft + x) + 'px';
        rect.style.top = (img.offsetTop + y) + 'px';
      };
    };