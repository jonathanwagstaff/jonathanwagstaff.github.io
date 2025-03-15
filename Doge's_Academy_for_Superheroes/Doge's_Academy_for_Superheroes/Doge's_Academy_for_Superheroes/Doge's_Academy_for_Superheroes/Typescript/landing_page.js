"use strict";
const moveOn = () => {
    const link = document.querySelector('#link');
    const explanation = document.querySelector('#explanation');
    if (link)
        link.hidden = false;
    if (explanation)
        explanation.hidden = true;
    alert("You can move on to the main website now. If you wish to move on, please click the button at the bottom of the page.");
    
};
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(moveOn, 20000);
});
