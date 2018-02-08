/*
Variables: numberOfSlide means the number of current slide,
headingText is the array that it possess HTML code and text of the slider descriptions,
headingButtons variable possess HTML code of the slider's buttons
*/
var numberOfSlide = 1;
var headingText = [
    "<h1>Electronic Pianos</h1><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet perferendis ullam distinctio laudantium, temporibus a! Ab, eligendi magni. Excepturi voluptatem libero nisi omnis recusandae dolorum dolor a iste minima alias. Consectetur adipisicing elit eveniet perferendis.</p>",

    "<h1>Classical Pianos</h1><p>People have already forgot about classical pianos. Now only real gourmets have these beautifull, classic instruments. Maybe it's because of the big price or because of lack of the other functionalities than piano sound. Our pianos are cheap anyways. Buy now, be a real pianist!</p>",

    "<h1>Digital Pianos</h1><p>The digital piano is a bit similar to keyboard but there's one important difference between these. Digital sounds like a real piano. Digital piano also have at least one pedal - sustain pedal. Keyboard doesn't have it. Click \"Read more\" button to know more differences!</p>",

    "<h1>Keyboards</h1><p>Keyboard is the most universal musical instrument in the world. Having it you can play piano, organ, violin, guitar, percussion and a lot more in the same time. Keyboard takes up little space and it can imitate even over 50 musical instruments. See our offers!</p>"
];
var headingButtons = "<form><button class=\"store-button\"><span class=\"fa fa-shopping-cart\" aria-hidden=\"true\"></span>Buy now</button><button class=\"more-button\"><span class=\"fa fa-plus\" aria-hidden=\"true\"></span>Read more</button></form>";

//This function will start when the page start
window.addEventListener("load", function(){
    changeSlide();
});

//The function and handle will start when user click LEFT slider arrow
var leftArrow = document.querySelector("#left-arrow");
leftArrow.addEventListener("click", function(){
    directionalArrow(false);
}, false);

//The function and handle will start when user click RIGHT slider arrow
var rightArrow = document.querySelector("#right-arrow");
rightArrow.addEventListener("click", function(){
    directionalArrow(true);
}, false);

//It'll check the conditional then increment or decrement the variable and go to hideSlide function
function directionalArrow(conditional){
    if(conditional) {
        numberOfSlide++;
    } else {
        numberOfSlide--;
    }
    hideSlide();
}

//It will hide the current image, descriptions and buttons
function hideSlide(){
    $('.heading-image').fadeOut(500);
    $('.heading-text').fadeOut(500);
    setTimeout("changeSlide()", 500);
}

//It'll check the conditional then skip or change the value of variable and put current image and description to proper divs
function changeSlide(){
    if(numberOfSlide > 4) {
        numberOfSlide = 1;
    } else if(numberOfSlide < 1) {
        numberOfSlide = 4;
    }

    var headingImage = "<img src=\"img/piano" + numberOfSlide + ".png\">";

    document.querySelector(".heading-image").innerHTML = headingImage;
    document.querySelector(".heading-text").innerHTML = headingText[numberOfSlide - 1] + headingButtons;
    $('.heading-image').fadeIn(500);
    $('.heading-text').fadeIn(500);
}
