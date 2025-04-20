const getElement = selector => document.querySelector(selector);
const button = getElement("#button");

button.addEventListener("click", () => {
    window.location.href = "answer.html";
})