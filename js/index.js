function about() {
    $('#css_profile').attr('href', '../css/about.css');
	$(".all").load("../about.html");
}

function home() {
    $('#css_profile').attr('href', '../css/home.css');
	$(".all").load("../home.html");
}

function projects() {
    $('#css_profile').attr('href', '../css/projects.css');
	$(".all").load("../projects.html");
}

function contact() {
    $('#css_profile').attr('href', '../css/contact.css');
	$(".all").load("../contact.html");
}

$(document).ready(function() {
	home();
});