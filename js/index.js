var images = [];

function preload_spinner() {
    images[0] = new Image();
    images[0].src = "../img/loading.gif";
}

function preload(callback) {
    var arrayofimages = ["../img/under-construction.jpg",
    		"../img/about/piano/pianoplaying.jpg", 
            "../img/about/car/car2.jpg", 
            "../img/about/basketball/lakers.png", 
            "../img/me.jpg", 
            "../img/about/emojis/phone.png", 
            "../img/about/emojis/computer.png", 
            "../img/about/emojis/pho.png", 
            "../img/about/emojis/basketball.png", 
            "../img/about/emojis/sushi.png", 
            "../img/about/emojis/burger.png", 
            "../img/about/emojis/money.png",
            "../img/about/emojis/finance.png",
            "../img/about/emojis/pizza.png", 
            "../img/about/emojis/car.png", 
            "../img/about/emojis/tool.png", 
            "../img/about/emojis/jdm.png", 
            "../img/about/emojis/piano.png"];
    for(i=0; i < arrayofimages.length; i++) {
        images[i+1] = new Image();
        images[i+1].src = arrayofimages[i];
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

var tries = 0;
//Basic resume password protection
function resume() {
    var pass = prompt("Please enter the password", "Enter password here");
    //Congratulations, you were smart enough to read my code for the password.
    //I plan on changing this up in the future.
    if (!pass) {
        alert('You did not enter a password.');
    }
    else if (pass == "I am a Huynher." || tries == 3) {
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

//This version needs fixing.
function expand2(hobbylink) {
    $.get(hobbylink, function(response) {
        hobby = response;
        if(current_hobby == null) {
            $('#clickable').fadeOut(300, function() {
                $(div_begin + cw + cw2 + hobby + div_end + div_end + div_end).hide().appendTo('#content').fadeIn('slow');
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
            $('#hobby-content').fadeOut('fast', function() {
                $('#hobby-content2').replaceWith(cw2 + hobby + div_end);
                $('#hobby-content').fadeIn('slow');
                current_hobby = hobby;
//                $('html,body').animate({scrollTop: $("footer").offset().top}, 'fast');
            });
        }
    });
}

function expand(hobbylink) {
    $.get(hobbylink, function(response) {
        hobby2 = response;
        hobby = hobby2.split("\n");
        if(current_hobby == null) {
            $('#clickable').fadeOut(300, function() {
                $('#temp').attr('id', 'divider');
                $('#divider h1').hide().text(hobby[0]).fadeIn('slow');
                if(hobby.length > 2) {
//                    $('#image').attr('src', hobby[1]).fadeIn('slow');
//                    $('#image').attr('style', hobby[2]);
                    $('#image').attr({
                        src: hobby[1],
                        style: hobby[2]
                    }).fadeIn('fast');
                    $('#text').hide().html(hobby[3]).fadeIn('slow');
                } else {
                    $('#text').hide().html(hobby[1]).fadeIn('slow');   
                }
                $('html,body').animate({scrollTop: $("#fact").offset().top}, 'slow');
                current_hobby = hobby2;
            });
        } else if(current_hobby == hobby2) {
            $('html,body').animate({scrollTop: $(".all").offset().top}, 'slow');
            $('#divider').fadeOut(500, function() {
                $(this).empty();
                $(this).remove();
                current_hobby = null;
                $('#content').append("<div id='temp'><h1></h1><div id='hobby-content'><img id='image'><p id='text'></p></div></div>");
                $('#clickable').fadeIn(400);
            });
        } else if(current_hobby != hobby2) {
            $('#divider h1').fadeOut('slow', function() {
                $(this).text(hobby[0]).fadeIn('slow');
            });
            if(hobby.length > 2) {
                $('#image').fadeOut('slow', function() {
//                    $(this).attr('src', hobby[1]).fadeIn('slow');
//                    $(this).attr('style', hobby[2]);
                    $(this).attr({
                        src: hobby[1],
                        style: hobby[2]
                        }).fadeIn('fast');
                });
                $('#text').fadeOut('slow', function() {
                    $(this).html(hobby[3]).fadeIn('slow');
                });
            } else if (hobby.length == 2) {
                $('#image').fadeOut('slow', function() {
                    $(this).replaceWith("<img id='image'>");
//                    $(this).removeAttr('src');
//                    $(this).removeAttr('style');
//                    $(this).attr('src', '');
//                    $(this).attr('style', '');
                });
                $('#text').fadeOut('slow', function() {
                    $(this).html(hobby[1]).fadeIn('slow');
                });
            }
            current_hobby = hobby2;
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
        $('#randfact').fadeOut('slow', function() {
            $(this).remove();
            $('#fact').append("<span>You've gone through all of them!</span>");
        });
    } else {
        var num = Math.floor((Math.random() * facts.length));
        if ($('#randfact').length != 0) {
            $('#randfact').fadeOut('slow', function() {
                $(this).remove();
                $('#fact').append(facts.pop());
            });
        } else {
            $('#fact').append(facts.pop());
        }
    }
}