var images = [];

function preload_spinner() {
    images[0] = new Image();
    images[0].src = "../img/loading.gif";
}

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
        images[i+1] = new Image();
        images[i+1].src = path + arrayofimages[i];
    }
    if (callback && typeof(callback) === "function") {
        callback();
    }
}

function init() {
    $('.all').fadeOut(150, function() {
        $('#css_profile').attr('href', 'css/home.css');
        $(".mess h1").text('Welcome to my personal website!');
        $("#content-wrapper").load("../home.html", function() {
            $('.all').fadeIn(150);
        });
    });
    $("#home").removeAttr('onclick');
    $("#about").attr('onclick', 'about();');
    $("#projects").attr('onclick', 'projects();');
    $("#contact").attr('onclick', 'contact();');   
}

function about() {  
    $('.fademe').fadeOut(150, function() {
        $("#content-wrapper").fadeOut(150, function() {
            $("#content").remove();
            $('#css_profile').attr('href', 'css/about.css');
            $(".mess h1").fadeOut(150, function() {
                $(".mess h1").fadeIn(150);
                $(".mess h1").text('About Me');
                $("#content-wrapper").fadeIn(150).load("../about.html", function() {
                    if(clicked_emoji) {
                        $('#clickable').hide();
                    }
                    $('.fademe').fadeIn(150);   
                });
            });
        });
    });
    $("#about").removeAttr('onclick');
    $("#home").attr('onclick', 'home();');
    $("#projects").attr('onclick', 'projects();');
    $("#contact").attr('onclick', 'contact();');
}

function home() {
    $('.fademe').fadeOut(150, function() {
        $("#content-wrapper").fadeOut(150, function() {
            $("#content").remove();
            $('#css_profile').attr('href', 'css/home.css');
            $(".mess h1").fadeOut(150, function() {
                $(".mess h1").fadeIn(150);
                $(".mess h1").text('Welcome to my personal site!');
                $("#content-wrapper").fadeIn(150).load("../home.html", function() {
                    $('.fademe').fadeIn(150);   
                });
            });
        });
    });
    $("#home").removeAttr('onclick');
    $("#about").attr('onclick', 'about();');
    $("#projects").attr('onclick', 'projects();');
    $("#contact").attr('onclick', 'contact();');
}

function projects() {
    $('.fademe').fadeOut(150, function() {
        $("#content-wrapper").fadeOut(150, function() {
            $("#content").remove();
            $('#css_profile').attr('href', 'css/projects.css');
            $(".mess h1").fadeOut(150, function() {
                $(".mess h1").fadeIn(150);
                $(".mess h1").text('Projects');
                $("#content-wrapper").fadeIn(150).load("../projects.html", function() {
                    $('.fademe').fadeIn(150);   
                });
            });
        });
    });
    $("#projects").removeAttr('onclick');
    $("#home").attr('onclick', 'home();');
    $("#about").attr('onclick', 'about();');
    $("#contact").attr('onclick', 'contact();');
}

function contact() {
    $('.fademe').fadeOut(150, function() {
        $("#content-wrapper").fadeOut(150, function() {
            $("#content").remove();
            $('#css_profile').attr('href', 'css/contact.css');
            $(".mess h1").fadeOut(150, function() {
                $(".mess h1").fadeIn(150);
                $(".mess h1").text('Contact');
                $("#content-wrapper").fadeIn(150).load("../contact.html", function() {
                    $('.fademe').fadeIn(150);   
                });
            });
        });
    });
    $("#contact").removeAttr('onclick');
    $("#home").attr('onclick', 'home();');
    $("#about").attr('onclick', 'about();');
    $("#projects").attr('onclick', 'projects();');
}

var div_begin = "<div id='divider'>";
var ball = "<img id='lakers' src='../img/lakers.png'>";
var content = "<p>Favorite Team: Los Angeles Lakers</p><p>Favorite Players: Kobe Bryant & Pau Gasol</p><p>Basketball Arenas Visited: Staples Center, Oracle Arena</p><p>Potential Future Lakers Season Ticket Holder</p>";
var div_end = "</div>";
var clicked_emoji = false;


function test() {
    if($('#divider').length == 0) {
        $('#clickable').fadeOut('fast', function() {
            $(div_begin + ball + content+ div_end).hide().appendTo('#content').fadeIn(500);
            $('html,body').animate({scrollTop: $("#divider").offset().top},'slow');
            clicked_emoji = true;
        });
    } else {
        $('html,body').animate({
        scrollTop: $(".all").offset().top},150);
        $('#divider').fadeOut(500, function() {
            $(this).empty();
            $(this).remove();
        });
    }
}