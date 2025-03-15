"use strict";
let faculty = ["Images/combat_teacher.jpg", "Images/foster.jpg", "Images/janitor.jpg", "Images/Bird_Man.jpg"];
const picture = document.querySelector("#facultyImg1");
const picture1 = document.querySelector("#facultyImg2");
picture.src = faculty[0];
picture1.src = faculty[1];
const changePhotos = () => {
    let image1 = faculty.shift();
    let image2 = faculty.shift();
    if (image1)
        faculty.push(image2);
        faculty.push(image1);
    picture.src = faculty[0];
    picture1.src = faculty[1];
};
let timer = null;
document.addEventListener("DOMContentLoaded", () => {
    timer = setInterval(changePhotos, 5000);
});
