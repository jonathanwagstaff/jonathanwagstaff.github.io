"use strict";
let starStudents = ["Images/student_images/Tai_not_raging.png", "Images/student_images/Lily.png", "Images/student_images/Kai.webp", "Images/student_images/Swordedger.jpg"];
const image = document.querySelector("#image");
image.src = starStudents[0];

const Tai = document.querySelector("#Tai");
const Lily = document.querySelector("#Lily");
const Kai = document.querySelector("#Kai");
const Swordedger = document.querySelector("#Swordedger");

const leftButton = () => {
    const image1 = starStudents.pop();
    starStudents.unshift(image1);
    image.src = starStudents[0];

    if(starStudents[0] == "Images/student_images/Tai_not_raging.png"){
        Tai.hidden = false;
        Lily.hidden = true;
        Kai.hidden = true;
        Swordedger.hidden = true;
    } else if(starStudents[0] == "Images/student_images/Lily.png") {
        Tai.hidden = true;
        Lily.hidden = false;
        Kai.hidden = true;
        Swordedger.hidden = true;
    } else if(starStudents[0] == "Images/student_images/Kai.webp") {
        Tai.hidden = true;
        Lily.hidden = true;
        Kai.hidden = false;
        Swordedger.hidden = true;
    } else if(starStudents[0] == "Images/student_images/Swordedger.jpg") {
        Tai.hidden = true;
        Lily.hidden = true;
        Kai.hidden = true;
        Swordedger.hidden = false;
    }
};
const rightButton = () => {
    const image2 = starStudents.shift();
    starStudents.push(image2);
    image.src = starStudents[0];

    if(starStudents[0] == "Images/student_images/Tai_not_raging.png"){
        Tai.hidden = false;
        Lily.hidden = true;
        Kai.hidden = true;
        Swordedger.hidden = true;
    } else if(starStudents[0] == "Images/student_images/Lily.png") {
        Tai.hidden = true;
        Lily.hidden = false;
        Kai.hidden = true;
        Swordedger.hidden = true;
    } else if(starStudents[0] == "Images/student_images/Kai.webp") {
        Tai.hidden = true;
        Lily.hidden = true;
        Kai.hidden = false;
        Swordedger.hidden = true;
    } else if(starStudents[0] == "Images/student_images/Swordedger.jpg") {
        Tai.hidden = true;
        Lily.hidden = true;
        Kai.hidden = true;
        Swordedger.hidden = false;
    }
};
document.addEventListener("DOMContentLoaded", () => {
    const left_button = document.querySelector("#left_button");
    left_button.addEventListener("click", leftButton);
    const right_button = document.querySelector("#right_button");
    right_button.addEventListener("click", rightButton);
});
