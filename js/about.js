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

function test() {
    alert("BALL IS LIFE!");   
}

$(document).ready(function() {
	home();
});