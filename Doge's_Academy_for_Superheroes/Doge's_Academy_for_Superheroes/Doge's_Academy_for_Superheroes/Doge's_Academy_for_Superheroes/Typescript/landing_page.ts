"use strict";

const moveOn = () : void => {
        const button = document.querySelector('#button') as HTMLButtonElement;
        const explanation = document.querySelector('#explanation') as HTMLElement;

        if (button) button.disabled = false;
        if (explanation) explanation.hidden = true;

        alert("You can move on to the main website now. If you wish to move on, please click the button at the bottom of the page.");
};

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(moveOn, 1200);
});