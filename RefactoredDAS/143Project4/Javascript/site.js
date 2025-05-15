"use strict";
const nav = document.querySelector(".navs");
const showNav = () => {
    const hide_nav = document.querySelector("#hide_nav");
    hide_nav.hidden = false;
    const show_nav = document.querySelector("#show_nav");
    show_nav.hidden = true;
    nav.classList.remove("hidden");
    const navs = document.querySelectorAll(".nav");
    for (let x = 0; x <= navs.length; ++x) {
        navs[x].hidden = false;
    }
};
const hideNav = () => {
    const hide_nav = document.querySelector("#hide_nav");
    hide_nav.hidden = true;
    const show_nav = document.querySelector("#show_nav");
    show_nav.hidden = false;
    nav.classList.add("hidden");
    const navs = document.querySelectorAll(".nav");
    for (let x = 0; x <= navs.length; ++x) {
        navs[x].hidden = true;
    }
};
document.addEventListener("DOMContentLoaded", () => {
    const hide_nav = document.querySelector("#hide_nav");
    hide_nav.addEventListener("click", hideNav);
    const show_nav = document.querySelector("#show_nav");
    show_nav.addEventListener("click", showNav);
});
