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
                    $('.fademe').fadeIn(150);   
                });
            });
        });
    });
    $("#about").removeAttr('onclick');
    $("#home").attr('onclick', 'home();');
    $("#projects").attr('onclick', 'projects();');
    $("#contact").attr('onclick', 'contact();');
    current_hobby = null;
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

function resume() {
    window.open("../files/resume.pdf", '_blank');   
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
var div_end = "</div>";
var cw = "<div id='hobby-content'>";
var cw2 = "<div id='hobby-content2'>";
var current_hobby = null;
var bball = "<h1>Ball Is Life</h1></p><img src='../img/lakers.png' style='width: 40%'><p>Being born and raised in Southern California, I am naturally a die-hard Lakers fan. Although the Lakers are going through a rough patch right now, they have a solid, promising young core in Randle, Russell, and Clarkson.</p><p>I've played basketball since I was 8, but I am no Kobe. My offensive skills are quite limited, but I try to contribute as much as possible through off ball movement. I focus most of my energy on the defensive end and I pride myself in that.</p><p>If you ever want to talk about basketball or play a pick up game, feel free to contact me!</p>";
var piano = "<h1>Piano</h1><img id='image' src='../img/pianoplaying.jpg' style='width: 80%'><p>I have been studying and playing piano for as long as I can remember. Due to my terrible piano performance nerves, I only enjoy playing for myself. For 7th through 12th grade, I attended OCHSA with Piano as my main art/focus.</p><p>I love playing pieces from the Romantic to late Romantic era and anything that is composed by Chopin. My favorite piano pieces are </p><a href='https://www.youtube.com/watch?v=GETFcTMU1JA' target='_blank'>Improvisation No. 15 in C Minor by Poulenc </a><span>and </span><a href='https://www.youtube.com/watch?v=YGRO05WcNDk' target='_black'>Nocturne Op. 9 No. 2 by Chopin</a><span>.</span>";
var cars = "<h1>Fast and Furious</h1><img id='image' src='../img/car.jpg' style='width: 80%'><p>I absolutely love driving! There's something about it that makes me feel very relaxed. I am an avid car enthusiast and enjoy working on my car.</p><p>One day I eventually want to own a R34 Nissan GTR or a MKIV Toyota Supra (or both!). I am currently driving a Honda Civic Si and am working on making it track ready. To see what I have done to my car and my past cars, click on the following link.</p><a onclick='car();'>To my garage!</a>";
var tech = "<h1>Technology</h1>";
var food = "<h1>Food</h1>";
var finance = "<h1>Finance and Investments</h1>";



function expand(hobby) {
    if(current_hobby == null) {
        $('#clickable').fadeOut(300, function() {
            $(div_begin + cw + cw2 + hobby + div_end + div_end + div_end).hide().appendTo('#content').fadeIn(300);
            $('html,body').animate({scrollTop: $("#divider").offset().top}, 'slow');
            current_hobby = hobby;
        });
    } else if(current_hobby == hobby) {
        $('html,body').animate({scrollTop: $(".all").offset().top}, 'slow');
        $('#divider').fadeOut(500, function() {
            $(this).empty();
            $(this).remove();
            current_hobby = null;
            $('#clickable').fadeIn(400);
        });
    } else if(current_hobby != hobby) {
        $('#hobby-content').fadeOut(300, function() {
            $('#hobby-content2').replaceWith(cw2 + hobby + div_end);
            $('#hobby-content').fadeIn(300);
            current_hobby = hobby;
            $('html,body').animate({scrollTop: $("footer").offset().top}, 'slow');
        });
    }
}