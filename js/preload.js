var images = [];
function preload(arrayofimages) {
    var path = "../img/";
    for(i=0; i < arrayofimages.length; i++) {
        images[i] = new Image();
        images[i].src = path + arrayofimages[i];
    }
}

$(document).ready(function() {
    preload(["under-construction.jpg",
    		"pianoplaying.jpg", 
            "car.jpg", 
            "lakers.png", 
            "me.jpg", 
            "phone.png", 
            "computer.png", 
            "pho.png", 
            "basketball.png", 
            "sushi.png", 
            "burger.png", 
            "sleeping.png", 
            "pizza.png", 
            "car.png", 
            "tool.png", 
            "jdm.png", 
            "piano.png"] function() {
        
           	$('#status').fadeOut(); // will first fade out the loading animation
				$('#preloader').delay(800).fadeOut('slow'); // will fade out the white DIV that covers the website.
				$('body').delay(800).css({'overflow':'visible'});
    });
});