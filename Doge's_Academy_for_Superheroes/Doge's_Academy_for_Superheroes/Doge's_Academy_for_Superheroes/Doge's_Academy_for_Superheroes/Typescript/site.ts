const nav : any = document.querySelector(".navs");

const showNav = () => {
    const hide_nav = document.querySelector("#hide_nav") as HTMLElement;
    hide_nav.hidden = false;

    const show_nav = document.querySelector("#show_nav") as HTMLElement;
    show_nav.hidden = true;

    nav.classList.remove("hidden");

    const navs : any = document.querySelectorAll(".nav");
    for(let x=0; x <= navs.length; ++x){
        navs[x].hidden = false;
    }
};

const hideNav = () => {
    const hide_nav = document.querySelector("#hide_nav") as HTMLElement;
    hide_nav.hidden = false;

    const show_nav = document.querySelector("#show_nav") as HTMLElement;
    show_nav.hidden = true;

    nav.classList.add("hidden");

    const navs : any = document.querySelectorAll(".nav");
    for(let x=0; x <= navs.length; ++x){
        navs[x].hidden = true;
    }
};

document.addEventListener("DOMContentLoaded", () => {
    const hide_nav = document.querySelector("#hide_nav") as HTMLElement;
    hide_nav.addEventListener("click", showNav);
    const show_nav = document.querySelector("#show_nav") as HTMLElement;
    show_nav.addEventListener("click", hideNav);
});