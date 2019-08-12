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
}
document.querySelector(".fas.fa-bars").addEventListener("click", showMenu);