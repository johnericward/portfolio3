$(document).ready(function () {
    
    //secret button stuff
    $(".gameExitBtn").hide();

    //about color text "_" under cartoon of me on index page to keep spacing consistent
    $(".aboutTextHover").css("color","white");

    //title fade in animations across all pages
    $(".titleSpan").hide();
    $(".titleSpan").fadeIn(2000);
    //end of title fade in animations across all pages

    // index fade in animations
    $(".meCartoon").hide();
    $(".meCartoon").delay(1000).fadeIn(1500);

    $(".appleii").hide();
    $(".appleii").delay(2000).fadeIn(1500);

    $(".saw").hide();
    $(".saw").delay(3000).fadeIn(1500);
    // end of index fade in animations

    // about fade in animations
    $(".mePic").hide();
    $(".mePic").delay(1000).fadeIn(1500);

    $(".aboutText").hide();
    $(".aboutText").delay(2000).fadeIn(1500);
    //end of about fade in animations

    //code fade in animations
    $(".codeSiteCards").hide();

    $(".codeCard1, .codeCard3, .codeCard5").delay(1000).fadeIn(1500);
    $(".codeCard2, .codeCard4, .codeCard6").delay(2000).fadeIn(1500);
    //end of code fade in animations
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
    $(".aboutTextHover").text("<_ABOUT>").css("color", "rgb(145, 253, 21)");
});
$(".meCartoon").mouseout(function () {
    $(".aboutTextHover").text("_").css("color","white");
});





//special stuff
$(".E_magic").click(function () {
    $(".meCartoon").hide();
    $(".appleii").hide();
    $(".saw").hide();
    $(".gameExitBtn").show();
    // $(".gameGoesHere").append('<button class="pikaBtn"> <img id="pikachu" src="assets/images/pikachu.png" /> </button>');
    $(".gameGoesHere").append('<canvas id="gameCanvas" width="480" height="320"></canvas>');
    $(".E_magic").hide();
});


$(".gameExitBtn").click(function () {
    $(".meCartoon").show();
    $(".appleii").show();
    $(".saw").show();
    $(".gameExitBtn").hide();
    $(".gameGoesHere").empty();
    $(".E_magic").show();
});


var sketchProc = function (processingInstance) {
     
    with (processingInstance) {
            
        size(400, 700);
            
        frameRate(30);

        draw = function () {
        
            background(255, 255, 255);
           
            noStroke();

            fill(100, 100, 100);
            rect(20, 20, 20, 20);
        };
    }};

// Get the canvas that Processing-js will use
    
var canvas = document.getElementById("gameCanvas"); 
  
  // Pass the function sketchProc (defined in myCode.js) to Processing's constructor.
    
var processingInstance = new Processing(canvas, sketchProc); 