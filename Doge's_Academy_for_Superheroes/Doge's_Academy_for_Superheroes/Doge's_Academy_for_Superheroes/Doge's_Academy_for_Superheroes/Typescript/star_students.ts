let starStudents = ["../Images/student_images/Tai_not_raging.png", "../Images/student_images/Tai_raging.png", "../Images/student_images/Lily.png", "../Images/student_images/Kai.webp", "../Images/student_images/Swordedger.jpg"];

const image : any = document.querySelector("#image");
    image.src = starStudents[0];

const leftButton = () => {
    const image1 : any = starStudents.pop();
    starStudents.unshift(image1);
    image.src = starStudents[0];
};

const rightButton = () => {
    const image2 :  any = starStudents.shift();
    starStudents.push(image2);
    image.src = starStudents[0];
};

document.addEventListener("DOMContentLoaded", () => {
    const left_button = document.querySelector("#left_button") as HTMLElement;
    left_button.addEventListener("click", leftButton);
    const right_button = document.querySelector("#right_button") as HTMLElement;
    right_button.addEventListener("click", rightButton);
});