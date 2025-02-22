const showNav = () => {
    document.querySelector("#hide_nav").hidden = false;
    document.querySelector("#show_nav").hidden = true;

    const navs = document.querySelectorAll(".nav");
    for(let x=0; x <= navs.length; ++x){
        navs[x].hidden = false;
    }
};

const hideNav = () => {
    document.querySelector("#hide_nav").hidden = true;
    document.querySelector("#show_nav").hidden = false;

    const navs = document.querySelectorAll(".nav");
    for(let x=0; x <= navs.length; ++x){
        navs[x].hidden = true;
    }
};

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#show_nav").addEventListener("click", showNav);
    document.querySelector("#hide_nav").addEventListener("click", hideNav);
});