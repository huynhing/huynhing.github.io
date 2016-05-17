function about() {
    $("#main_content").load("../content/about_content", function() {});
}

function main_content() {
    $("#main_content").load("../content/main_content", function(){});
}

function contact() {
    $("#main_content").load("../content/contact", function(){});
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
$.get('../about/random_facts', function(response) {
    facts = response.toLowerCase().split("\n");
});

function rand_fact() {
    facts = shuffle(facts);
    if (facts.length === 0) {
        $('#fact').css('color', '#ae81ff');
        $('#fact').text('""');
    } else {
        $('#fact').css('color', '#e6db74');
        var num = Math.floor((Math.random() * facts.length));
        if ($('#randfact').length != 0) {
            $('#randfact').fadeOut(480, function() {
                $(this).remove();
                $('#fact').text('"' + facts.pop() + '"');
            });
        } else {
            $('#fact').text('"' + facts.pop() + '"');
        }
    }
}






