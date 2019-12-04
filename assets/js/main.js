$(document).ready(function() {
    $(".tester1").hide();
});



$(".appleii").mouseover(function () {
    $(".codeTextHover").text("<_CODE>");
});
$(".appleii").mouseout(function () {
    $(".codeTextHover").text("");
});


$(".mePic").mouseover(function () {
    $(".mePicHover").text("<E Ward>");
});
$(".mePic").mouseout(function () {
    $(".mePicHover").text("");
});


$(".saw").mouseover(function () {
    $(".sawTextHover").text("<_BUILD>");
});
$(".saw").mouseout(function () {
    $(".sawTextHover").text("");
});


$(".meCartoon").mouseover(function () {
    $(".aboutTextHover").text("<_ABOUT>");
});
$(".meCartoon").mouseout(function () {
    $(".aboutTextHover").text("");
});


//special stuff
$(".E_magic").click(function () {
    $(".meCartoon").hide();
    $(".appleii").hide();
    $(".saw").hide();
    $(".tester1").show();
    $(".pokemonChoice").append('<button class="pikaBtn"> <img id="pikachu" src="assets/images/pikachu.png" /> </button>');
    $(".E_magic").hide();
});


$(".test1Btn").click(function () {
    $(".meCartoon").show();
    $(".appleii").show();
    $(".saw").show();
    $(".tester1").hide();
    $(".pokemonChoice").empty();
    $(".E_magic").show();
});




