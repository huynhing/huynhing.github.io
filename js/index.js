function about() {
    $('#css_profile').attr('href', 'css/about.css');
    $("#content").remove();
	$("#content-wrapper").load("../about.html");
    $("#about").removeAttr('onclick');
    $("#about").removeAttr('href');
    $("#home").attr('onclick', 'home();');
    $("#home").attr('href', 'javascript:;');
    $("#projects").attr('onclick', 'projects();');
    $("#projects").attr('href', 'javascript:;');
    $("#contact").attr('onclick', 'contact();');
    $("#contact").attr('href', 'javascript:;');
}

function home() {
    $('#css_profile').attr('href', 'css/home.css');
    $("#content").remove();
	$("#content-wrapper").load("../home.html");
    $("#home").removeAttr('onclick');
    $("#home").removeAttr('href');
    $("#about").attr('onclick', 'about();');
    $("#about").attr('href', 'javascript:;');
    $("#projects").attr('onclick', 'projects();');
    $("#projects").attr('href', 'javascript:;');
    $("#contact").attr('onclick', 'contact();');
    $("#contact").attr('href', 'javascript:;');
    
}
function projects() {
    $('#css_profile').attr('href', 'css/projects.css');
    $("#content").remove();
	$("#content-wrapper").load("../projects.html");
    $("#projects").removeAttr('onclick');
    $("#projects").removeAttr('href');
    $("#home").attr('onclick', 'home();');
    $("#home").attr('href', 'javascript:;');
    $("#about").attr('onclick', 'about();');
    $("#about").attr('href', 'javascript:;');
    $("#contact").attr('onclick', 'contact();');
    $("#contact").attr('href', 'javascript:;');
}

function contact() {
    $('#css_profile').attr('href', 'css/contact.css');
    $("#content").remove();
	$("#content-wrapper").load("../contact.html");
    $("#contact").removeAttr('onclick');
    $("#contact").removeAttr('href');
    $("#home").attr('onclick', 'home();');
    $("#home").attr('href', 'javascript:;');
    $("#about").attr('onclick', 'about();');
    $("#about").attr('href', 'javascript:;');
    $("#projects").attr('onclick', 'projects();');
    $("#projects").attr('href', 'javascript:;');
}

$(document).ready(function() {
	home();
});