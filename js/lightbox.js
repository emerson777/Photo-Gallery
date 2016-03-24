var $overlay = $('<div id="overlay"><div></div></div>');
var $image = $("<img>");
var $caption = $("<p></p>");

$overlay.hide();


var $index = 0;

var $galleryLength = $("#gallery img").length;


//Add image
$overlay.children("div").append($image);




//add buttons
$overlay.children("div").append($caption);
$overlay.children("div").append("<button id='close'></button>");
$overlay.children("div").append("<button id='btnPrev'></button>");
$overlay.children("div").append("<button id='btnNext'></button>");




// Add overlay
$("body").append($overlay);


// Update image overlay
var updateImage = function(imageLocation, imageCaption){


  $image.attr("src", imageLocation);

  $caption.text(imageCaption);

};

// Click <a> event to an image
$("#gallery a").click(function(event){
  event.preventDefault();
  var imageLocation = $(this).attr("href");
  var imageCaption =  $(this).children("img").attr("data-caption");

  
  $index = $(this).parent().index(); 

  updateImage(imageLocation, imageCaption);

  $overlay.fadeIn(imageLocation);

});





var prevNext = function(prev) {
 
  if(!prev) {
       $index++; 
       } else { 
       $index--;
   }

  //if out of index reset
  if ($index < 0) { 
    $index = $galleryLength-1;
  }
  if ($index > 10) {
   $index = 0;
    }

  
  var newImgSelected = $("#gallery li").get($index).getElementsByTagName("a");
  var imageLocation = $(newImgSelected).attr("href");
  var imageCaption =  $(newImgSelected).children('img').attr("data-caption");

  updateImage(imageLocation, imageCaption);
};



//Button events

$("#btnPrev").click(function(event){
  prevNext(true);
});

$("#btnNext").click(function(event){
  prevNext();
});

$('#close').click(function(event){
  $overlay.fadeOut("slow");

});



//When overlay is click
$overlay.click(function(event){

    if(event.target.id == "overlay")
    $(this).fadeOut("slow");
      
});


//KEYBOARD EVENTS

 $(document).keydown(function(event){
    if(event.keyCode == "27"){
    $overlay.fadeOut();
   }  
 });


 $(document).keydown(function(event){
    if(event.keyCode == "39"){
      prevNext();
   }
 });
 
 $(document).keydown(function(event){
    if(event.keyCode == "37"){
    prevNext(true);
   }
 });
