var temp = 1;

function showInputSearch() {
    var inputTxt = document.querySelector(".nav-mobile input");

    if (temp % 2 != 0)
        inputTxt.style.display = "block";
    else if (temp % 2 != 0 || inputTxt.value == "")
        inputTxt.style.display = "none";
    temp++;
    console.log(inputTxt.value);
}
//// show menu


function showMenu() {
    var menu = document.querySelector("ul.menu");
    if (menu.style.display == "none")
        menu.style.display = "block";
    else
        menu.style.display = "none";
};

// document.querySelector(".menu").addEventListener("mouseout", function() {
//     document.querySelector("ul.menu").style.display = "none";
// });

function imageHover() {
    var image = document.querySelector("ul.project-images>li>img");
    image.setAttribute("src", "images/image_hover.png");
};

// ramdom banner

// function ramdomBanner() {
//     var num = Math.floor(Math.random() * 3) + 1;
//     var head = "../image/bg-banner";
//     var tail = ".jpg";
//     var urlImage = head + num.toString() + tail;
//     console.log(urlImage);
//     var bgBanner = document.querySelector("section.banner");
//     bgBanner.style.backgroundImage = "url(urlImage)";
// }
// ramdomBanner();
function ramdomBanner() {
    var num = Math.floor(Math.random() * 3) + 1;
    var bgBanner = document.querySelector("section.banner");
    switch (num) {
        case 1:
            bgBanner.style.backgroundImage = "url('../images/bg-banner1.jpg')";
            break;
        case 2:
            bgBanner.style.backgroundImage = "url('../images/bg-banner2.jpg')";
            break;
        case 3:
            bgBanner.style.backgroundImage = "url('../images/bg-banner3.jpg')";
            break;
        default:
            break;
    }



}
setInterval(ramdomBanner, 3000);

// slide top

var slideIndex = 1;

var loops;

function loopSlide(n) {
    slideIndex = n;
    loops = setInterval(function() {
        if (slideIndex > 4) slideIndex = 1;
        showSlide(++slideIndex);
    }, 4000);
}

function stopSlide() {
    clearInterval(loops);
}

function currentSlides(n) {
    showSlide(slideIndex = n);
}

function showSlide(n) {
    var i;
    var slides = document.querySelector(".slide");
    var arrDots = document.querySelectorAll("ul.pointer>i");
    if (n > 4) slideIndex = 1;
    if (n < 1) slideIndex = 4;
    switch (n) {
        case 1:
            slides.style.backgroundImage = "url('../images/slide1.jpg')";
            break;
        case 2:
            slides.style.backgroundImage = "url('../images/slide2.jpg')";
            break;
        case 3:
            slides.style.backgroundImage = "url('../images/slide3.jpg')";
            break;
        case 4:
            slides.style.backgroundImage = "url('../images/slide4.jpg')";
            break;

        default:
            break;
    }
    for (i = 0; i < arrDots.length; i++) {
        arrDots[i].className = arrDots[i].className.replace("visit", "")
    }
    arrDots[slideIndex - 1].className += " visited";

}