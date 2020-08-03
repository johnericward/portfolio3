$(document).ready(function () {
    
    //secret button stuff
    $(".gameExitBtn").hide();
    $(".gameboy").hide();

    //about color text "_" under cartoon of me on index page to keep spacing consistent
    $(".aboutTextHover").css("color","white");

   
    
    // $(".titleInit").hide();
    // $(".titleInit").fadeIn(2000);
    // $(".titleInit").delay(3000).replaceWith($(".titleSpan"));
    
    
    
    
    



    //title fade in animations across all pages
    $(".titleDiv").hide();
    $(".titleDiv").fadeIn(2000);
    //end of title fade in animations across all pages

    

    // index fade in animations
    $(".meCartoon").hide();
    $(".meCartoon").fadeIn(1500);

    $(".appleii").hide();
    $(".appleii").delay(1000).fadeIn(1500);

    $(".saw").hide();
    $(".saw").delay(2000).fadeIn(1500);

    $(".titleSpan1").hide();
    $(".titleSpan1").delay(3000).fadeIn(2000);
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
// });

$(".titleSpan1").mouseover(function () {
    $(".E_magic").css("color", "rgb(145, 253, 21)");
});
$(".titleSpan1").mouseout(function () {
    $(".E_magic").css("color", "rgb(72,72,72");
});

$(".appleii").mouseover(function () {
    $(".codeTextHover").text("<_CODE>");
});
$(".appleii").mouseout(function () {
    $(".codeTextHover").text("");
});


$(".mePic").mouseover(function () {
    $(".mePicHover").text('<me in the apple park restroom>');
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


// $(".alcott").mouseover(function () {
//     $(".arrBoxBuild").any("<_BUILD>");
// });
// $(".alcott").mouseout(function () {
//     $(".arrBoxBuild").empty();
// });




//special stuff
$(".E_magic").click(function () {
    $(".meCartoon").hide();
    $(".appleii").hide();
    $(".saw").hide();
    $(".gameExitBtn").show();
    // $(".container").show();

    $(".gameboy").show();
    // $(".gameGoesHere").show();

    // $(".gameGoesHere").append('<button class="pikaBtn"> <img id="pikachu" src="assets/images/pikachu.png" /> </button>');
    // $(".gameGoesHere").append('<canvas id="gameCanvas" width="480" height="320"></canvas>');
    $(".E_magic").hide();
    $(".E_replace").show().text("_");
});


$(".gameExitBtn").click(function () {
    $(".meCartoon").show();
    $(".appleii").show();
    $(".saw").show();
    $(".gameExitBtn").hide();
    // $(".gameGoesHere").hide();
    $(".gameboy").hide();
    $(".E_magic").show();
    $(".E_replace").hide();
});
    
    //BUILD PAGE  ====================================================================
    
    
// var imgLinkPart1 = "<a href=";
    // var imgLinkPart3 = " target='blank'>";
    // var imgLinkPart4 = "</a>";
    // var imgLinkPart2Arr = [
    //     "'http://unfol.io'",
    //     "'http://unfol.io'",
    //     "'http://unfol.io'",
    //     "'http://unfol.io'",
    //     "'http://unfol.io'",
    //     "'http://unfol.io'",
    //     "'http://unfol.io'",
    //     "'http://unfol.io'",
    //     "'http://unfol.io'"
    // ];

    //version with external links        
    // for (i = 0; i < buildImgArr.length; i++) {
    //     $(".arrBoxBuild").append(imgLinkPart1 + imgLinkPart2Arr[i] + imgLinkPart3 + imgArrPart1 + buildImgArr[i] + imgArrPart2 + imgLinkPart4);
    // };
    
    //build page pushes images into page from buildImgArr
    var imgArrPart1 = "<img src=";
    var imgArrPart2 = ">";
    var buildImgArr = [
        "'assets/images/Alcott.jpg' class='imgArr alcottArr'", 
        "'assets/images/Fans.jpg' class='imgArr fansArr'", 
        "'assets/images/Lowell.jpg' class='imgArr lowellArr'",
        "'assets/images/Q_Close.jpg' class='imgArr quiltCloseArr'",
        "'assets/images/Noyer.jpg' class='imgArr noyerArr'",
        "'assets/images/Whale.jpg' class='imgArr whaleArr'",
        "'assets/images/Q_Trees.jpg' class='imgArr quiltTreesArr'",
        "'assets/images/Rele_Wall.jpg' class='imgArr releWallArr'",
        "'assets/images/Rele_Studio.jpg' class='imgArr releStudioArr'"
    ];
    
    //version without links
    function buildImgArrFxn() {
        for (i = 0; i < buildImgArr.length; i++) {
            $(".arrBoxBuild").append(imgArrPart1 + buildImgArr[i] + imgArrPart2);
        };
        console.log("buildImgArrFxn is run");
    };
    //runs fxn from above
    buildImgArrFxn();


    //made these vars global just in case
    var alcottPart1 = "<img src=";
    var alcottMainSrc = "'assets/images/Alcott.jpg' class='bigAlcott outClass'";
    var alcottPart3 = ">";
    //once the buildImgArrFxn runs on page load you can click the first image in the array
    $(".alcottArr").click(function () {

        $(".highlightBoxBuild").append(alcottPart1 + alcottMainSrc + alcottPart3);
        $(".arrBoxBuild").empty();
        console.log("alcott from the buildArr is clicked")
    });

    //after clicking Alcott from the array it should be clickable via its classes of bigAlcott or outClass from line187
    $(".outClass").bind('click', function () {
        console.log("outClass is clicked")
        buildImgArrFxn();
        $(".highlightBoxBuild").empty();
    });
    
    
    //end of doc ready fxn
});




// var sketchProc = function (processingInstance) { 
     
//     with (processingInstance) {
            
//         size(400, 700);
            
//         frameRate(30);

//         draw = function () {
        
//             background(255, 255, 255);
           
//             noStroke();

//             fill(100, 100, 100);
//             rect(20, 20, 20, 20);
//         };
//     }};

// Get the canvas that Processing-js will use
    
// var canvas = document.getElementById("gameCanvas"); 
  
  // Pass the function sketchProc (defined in myCode.js) to Processing's constructor.
    
// var processingInstance = new Processing(canvas, sketchProc); 




//===================================================================================================
//experiment media query from JS

/*

function myFunction(x) {
    if (x.matches) { // If media query matches
      document.body.style.backgroundColor = "yellow";
    } else {
     document.body.style.backgroundColor = "pink";
    }
  }
  
  var x = window.matchMedia("(max-width: 992px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes


*/

/*
function displayAboutText(z) {
    if (z.matches) {
        $(".mePicHover").text('<me in the apple park restroom>');
    } else {
        $(".mePicHover").text("");
    }
}
  
var z = window.matchMedia("(max-width: 992px)")
displayAboutText(z)
z.addListener(displayAboutText)

*/