"use strict";
const move_on = new Date();
const moveNow = new Date(move_on);

const moveOn = () => {
        document.querySelector("#button").disabled = false;
        document.querySelector("#explanation").hidden = true;
        alert("You can move on to the main website now. If you wish to move on, please click the button at the bottom of the page.");
};

document.addEventListener("DOMContentLoaded", () => {
    canMove = setTimeout(moveOn, 120000);
});