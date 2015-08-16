var images = [];
function preload(callback) {
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
    if (callback && typeof(callback) === "function") {
        $('body').load('../init.html', function() {
            callback();
        });
    }
}

function about() {
    $('#css_profile').attr('href', 'css/about.css');
    $(".mess h1").text('About Me');
    $("#content").remove();
	$("#content-wrapper").load("../about.html");
    $("#about").removeAttr('onclick');
    $("#home").attr('onclick', 'home();');
    $("#projects").attr('onclick', 'projects();');
    $("#contact").attr('onclick', 'contact();');
}

function home() {
    if($('.loading').length != 0) {
        $('.loading').remove();
    }
    $('#css_profile').attr('href', 'css/home.css');
    $(".mess h1").text('Welcome to my personal website!');
    $("#content").remove();
	$("#content-wrapper").load("../home.html");
    $("#home").removeAttr('onclick');
    $("#about").attr('onclick', 'about();');
    $("#projects").attr('onclick', 'projects();');
    $("#contact").attr('onclick', 'contact();');
}

function projects() {
    $('#css_profile').attr('href', 'css/projects.css');
    $(".mess h1").text('Projects');
    $("#content").remove();
	$("#content-wrapper").load("../projects.html");
    $("#projects").removeAttr('onclick');
    $("#home").attr('onclick', 'home();');
    $("#about").attr('onclick', 'about();');
    $("#contact").attr('onclick', 'contact();');
}

function contact() {
    $('#css_profile').attr('href', 'css/contact.css');
    $(".mess h1").text('Contact');
    $("#content").remove();
	$("#content-wrapper").load("../contact.html");
    $("#contact").removeAttr('onclick');
    $("#home").attr('onclick', 'home();');
    $("#about").attr('onclick', 'about();');
    $("#projects").attr('onclick', 'projects();');
}

var div_begin = "<div id='divider'>";
var ball = "<img id='lakers' src='../img/lakers.png'>";
var content = "<p>Favorite Team: Los Angeles Lakers</p><p>Favorite Players: Kobe Bryant & Pau Gasol</p><p>Basketball Arenas Visited: Staples Center, Oracle Arena</p><p>Potential Future Lakers Season Ticket Holder</p><p>BALL IS LIFE</p>";
var div_end = "</div>";

function test() {
    if($('#divider').length == 0) {
        $(div_begin + ball + content+ div_end).hide().appendTo('#content').fadeIn(500);
        $('html,body').animate({
        scrollTop: $("#divider").offset().top},
        'slow');
    } else {
        $('html,body').animate({
        scrollTop: $(".all").offset().top},
        'fast');
        $('#divider').fadeOut(500, function() {
                    $(this).empty();
                    $(this).remove();
        });
    }
}