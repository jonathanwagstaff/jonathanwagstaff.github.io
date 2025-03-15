//Get the needed elements
const getElement : any = (selector : string) => document.querySelector(selector); 

const clearSpan = (form: { elements: any; }) => {
    for (let element of form.elements) {
        const span = element.nextElementSibling;
        if(span) span.textContent = "*";
    };
}

document.addEventListener("DOMContentLoaded", () => {
    const form = getElement("form");

    form.noValidate = true;

    for(let element of form.elements) {
        element.addEventListener("invalid", (evt: { currentTarget: any; }) => {
            const current = evt.currentTarget;
            const msg = current.title;
        })
    }

    form.addEventListener("submit", (evt: { preventDefault: () => void; }) => {
        clearSpan(form);

        //const 

        if(!form.checkValidity()){
            evt.preventDefault();
        } else{
            const para = getElement("#para");
            para.hidden = false;
        }
    })
})