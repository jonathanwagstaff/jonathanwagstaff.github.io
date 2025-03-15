let faculty = ["../Images/combat_teacher.jpg", "../Images/foster.jpg", "../Images/janitor.jpg"];

const picture: any = document.querySelector("#faculty");
picture.src = faculty[0];

const changePhotos = () => {
    let image1 = faculty.shift();
    if(image1) faculty.push(image1);
}

 let timer = null;

 document.addEventListener("DOMContentLoaded", () => {
    timer = setInterval(changePhotos, 1000);
 })