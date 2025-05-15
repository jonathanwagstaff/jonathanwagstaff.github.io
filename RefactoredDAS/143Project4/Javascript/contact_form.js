"use strict";
//Get the needed elements
const getElement = (selector) => document.querySelector(selector);
const form = getElement("form");

/*const clearSpan = (form) => {
    for (let element of form.elements) {
        const span = element.nextElementSibling;
        if (span)
            span.textContent = "*";
    }
    ;
};*/

const submit = getElement("#submit");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    const toast = document.getElement("#toast");

    setTimeout(() => {toast.style.display = "none";}, 3000);
});

/*const validateForm = () => {
    const email = getElement("#email_address");
    const phone = getElement("#phone");

    if(email.textContent == ""|| !(email.checkValidity)) {
        const span = email.nextElementSibling;
        span.textContent = email.title;
    }

    if(phone.textContent == ""|| !(phone.checkValidity)) {
        const span = phone.nextElementSibling;
        span.textContent = phone.title;
    }
}*/

/*document.addEventListener("DOMContentLoaded", () => {
    //validateForm();
    form.addEventListener("submit", () => {
        if (!(form.checkValidity())) {
            validateForm();
            evt.preventDefault();
        }
        else {
            const para = getElement("#para");
            para.hidden = false;
            clearSpan(form);
        }
    });
});*/
