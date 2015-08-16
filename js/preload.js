var images = [];
function preload() {
    var path = "../img/";
    var arrayofimages = ["under-construction.jpg",
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
            "piano.png"];
    for(i=0; i < arrayofimages.length; i++) {
        images[i] = new Image();
        images[i].src = path + arrayofimages[i];
    }
}