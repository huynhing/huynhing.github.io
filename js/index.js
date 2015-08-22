var images = [];

function preload_spinner() {
    images[0] = new Image();
    images[0].src = "../img/loading.gif";
}

function preload(callback) {
	var arrayofimages = [];
	$.get('../listofimg', function(response) {
    	arrayofimages = response.split("\n");
        for(i=0; i < arrayofimages.length; i++) {
            images[i+1] = new Image();
            images[i+1].src = arrayofimages[i];
        }
        if (callback && typeof(callback) === "function") {
            callback();
        }
	});
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

function projects(callback) {
    $('.fademe').fadeOut(150, function() {
        $("#content-wrapper").fadeOut(150, function() {
            $("#content").remove();
            $('#css_profile').attr('href', 'css/projects.css');
            $(".mess h1").fadeOut(150, function() {
                $(".mess h1").fadeIn(150);
                $(".mess h1").text('Projects');
                $("#content-wrapper").fadeIn(150).load("../projects.html", function() {
                    $('.fademe').fadeIn(150);
                    if (callback && typeof(callback) === "function") {
                        callback();   
                    }
                });
            });
        });
    });
    $("#projects").removeAttr('onclick');
    $("#home").attr('onclick', 'home();');
    $("#about").attr('onclick', 'about();');
    $("#contact").attr('onclick', 'contact();');
    curr_car = null;
}


String.prototype.hashCode = function() {
  var hash = 0, i, chr, len;
  if (this.length == 0) return hash;
  for (i = 0, len = this.length; i < len; i++) {
    chr   = this.charCodeAt(i);
    hash  = ((hash << 5) - hash) + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
};

var tries = 0;
//Basic resume password protection
function resume() {
    var pass = prompt("Please enter the password", "Enter password here");
    //You're trying to see what the password is. Smart.
    if (!pass) {
        alert('You did not enter a password.');
    }
    else if (pass.hashCode() == -426800532 || tries == 3) {
        window.open("../files/resume.pdf", '_blank');   
    } else {
        tries++;
        alert("You have entered the password incorrectly " + tries + " times. Please try again or email me for the password. If you keep on trying you might be able to get in.....");   
    }
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

function expand(hobbylink) {
    $.get(hobbylink, function(response) {
        hobby = response;
        if(current_hobby == null) {
            $('#clickable').fadeOut(300, function() {
                $(div_begin + cw + cw2 + hobby + div_end + div_end + div_end).hide().appendTo('#content').fadeIn(400);
                $('html,body').animate({scrollTop: $("#fact").offset().top}, 'slow');
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
            $('#hobby-content').fadeOut(400, function() {
                $('#hobby-content2').replaceWith(cw2 + hobby + div_end);
                $('#hobby-content').fadeIn(400);
                current_hobby = hobby;
                $('html,body').animate({scrollTop: $("#fact").offset().top}, 'slow');
            });
        }
    });
}

//Credit --> Fisher-Yates Shuffle
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

var facts = [];
$.get('about/RandomFacts', function(response) {
    facts = response.split("\n");
});

function rand_fact() {
    facts = shuffle(facts);
    if (facts.length === 0) {
        $('#randfact').fadeOut('fast', function() {
            $(this).remove();
            $('#fact').append("<p>You've gone through all of them!</p>");
        });
    } else {
        var num = Math.floor((Math.random() * facts.length));
        if ($('#randfact').length != 0) {
            $('#randfact').fadeOut(480, function() {
                $(this).remove();
                $('#fact').append("<p id='randfact'>" + facts.pop() + "</p>");
            });
        } else {
            $('#fact').append("<p id='randfact'>" + facts.pop() + "</p>");
        }
    }
}

var curr_car = null;
function carproj() {
    if(curr_car != null) {
        $('html,body').animate({scrollTop: $(".nav").offset().top}, 500);
        $('#specificproj').fadeOut(300, function() {
            curr_car = null;
            $('#specificproj').empty();
            $('#specificproj').remove();
            $('#intro').fadeIn(400);
        });
    } else {
        $('#content').append("<div id='specificproj'></div>");
         $.get('../projects/cars/sivi', function(response) {
            curr_car = response;
            $('#intro').fadeOut(300, function () {
                var wrap = "<div id='projcontent'>"
                var head = "<h2 id='projcat'>My Garage</h2>"
                $('#specificproj').fadeIn('fast', function() {
                    $(head + wrap + response + div_end).hide().appendTo('#specificproj').fadeIn(400);
                    $('html,body').animate({scrollTop: $("#carproj").offset().top}, 500);
                });
            });
        });
    }
}

function nextcar(link) {
        $.get(link, function(response) {
            curr_car = link;
            $('#car').fadeOut('slow', function() {
                $(this).remove();
                $('#projcontent').hide().append(response).fadeIn(400);
            });
        });
        $('#specificproj').fadeIn(400);
}

function to_garage() {
    projects(carproj);
}