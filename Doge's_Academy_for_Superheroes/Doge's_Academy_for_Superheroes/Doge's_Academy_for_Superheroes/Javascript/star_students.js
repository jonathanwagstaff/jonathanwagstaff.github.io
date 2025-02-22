let starStudents = ["../../Images/student_images/Tai_not_raging.png", "../../Images/student_images/Tai_raging.png", "../../Images/student_images/Lily.png"];

const image = document.querySelector("#image");
    image.src = starStudents[0];

const leftButton = () => {
    const image1 = starStudents.pop();
    starStudents.unshift(image1);
    image.src = starStudents[0];
};

const rightButton = () => {
    const image2 = starStudents.shift();
    starStudents.push(image2);
    image.src = starStudents[0];
};

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#left_button").addEventListener("click", leftButton);
    document.querySelector("#right_button").addEventListener("click", rightButton);
});