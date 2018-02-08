var firstNav = document.querySelector("#first-nav");
firstNav.addEventListener("click", function(){
    changeNavColor("#first-nav");
}, false);

var secondNav = document.querySelector("#second-nav");
secondNav.addEventListener("click", function(){
    changeNavColor("#second-nav");
}, false);

var thirdNav = document.querySelector("#third-nav");
thirdNav.addEventListener("click", function(){
    changeNavColor("#third-nav");
}, false);

var fourthNav = document.querySelector("#fourth-nav");
fourthNav.addEventListener("click", function(){
    changeNavColor("#fourth-nav");
}, false);

var fifthNav = document.querySelector("#fifth-nav");
fifthNav.addEventListener("click", function(){
    changeNavColor("#fifth-nav");
}, false);

function changeNavColor(navId){
    var activeClass = document.querySelector(".active");
    activeClass.classList.remove("active");

    var addActiveClass = document.querySelector(navId);
    addActiveClass.classList.add("active");
}
