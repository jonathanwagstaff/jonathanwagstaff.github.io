const getElement = selector => document.querySelector(selector); 
const ul = document.createElement("ul");

const errors = error => {
    ul.classList.add("messages");

    for (let error1 of error) {
        const li = document.createElement("li");
        const text = document.createTextNode(error1);
        li.appendChild(text);
        ul.appendChild(li);
    }

    const node = getElement("ul");
    if (node == null) {
        const form = getElement("form");

        form.parentNode.insertBefore(ul, form);
    } else {
        node.parentNode.replaceChild(ul, node);
    } 
}

const checking = () => {
    const email = getElement("#email_address");
    const phone = getElement("#phone");
    const error = [];

    if (email.value === "") {
        error.push("Please enter an email address.");
    };
    if (!email.value.includes("@")|| !email.value.includes(".")){
        error.push("The email does not have a correct format.");
    };
    if (phone.value === "") {
        error.push("Please enter a mobile phone number."); 
    };

    if (error.length == 0) {
        ul.hidden = true;

        document.querySelector("#para").hidden = false;
        getElement("form").submit();
    } else {
        errors(error);
    };
};

document.addEventListener("DOMContentLoaded", () => {
    getElement("#submit").addEventListener("click", checking);
});