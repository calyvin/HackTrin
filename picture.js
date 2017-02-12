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
  b.addClass("btn btn-hg btn-primary");
  var a = document.createElement("br");
  button = createButton("Get Picture From Trip!"); //document.getElementById("startTrip");
  button.addClass("btn btn-hg btn-primary");
}

function draw() {
  if(!switched) {
  		button.mousePressed(getImages);
  		switched = true;
      b.mousePressed(function() {
        //picture = capture;
        image(capture, 0, 0);
        saveCanvas("myCavas", "jpg");
      });
  }
  
}

function getImages() {
    $(document).ready(function(){

        $.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
        {
            tags: "paris people",
            tagmode: "any",
            format: "json"
        },
        function(data) {
            
              var rnd = Math.floor(Math.random() * data.items.length);
              var image_src = data.items[rnd]['media']['m'].replace("_m", "_b");
              var img = document.createElement('img');
              img.src = image_src;
              img.id = "img" + rnd;
              img.setAttribute("width", "200");
              img.setAttribute("width", "200");

              document.body.appendChild(img);
              

              var tracker = new tracking.ObjectTracker(['face']);
              tracker.setStepSize(.7);
              tracking.track('#img' + rnd, tracker);
              tracker.on('track', function(event) {
                event.data.forEach(function(rect) {
                  window.plot(rect.x, rect.y, rect.width, rect.height);
                  
                });
              });
      window.plot = function(x, y, w, h) {

        var rect = document.createElement('IMG');
        document.querySelector('.demo-container').appendChild(rect);
        rect.classList.add('rect');
        rect.src = "myhead.jpg";//"url('" + "myhead.jpg"+"')";
        rect.style.width = w + 'px';
        rect.style.height = h + 'px';
        rect.style.left = (img.offsetLeft + x) + 'px';
        rect.style.top = (img.offsetTop + y) + 'px';
        
        // rect.css('background-image', "url('" + image_src + "')");
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