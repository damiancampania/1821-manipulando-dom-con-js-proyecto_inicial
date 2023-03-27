const btn = document.querySelector("[data-form-btn]");
const input = document.querySelector("[data-form-input]");
console.log(btn);

btn


const createTask = (evento) => {
    evento.preventDefault();
    const input = document.querySelector("[data-form-input]");
    console.log (input.value);
    }

    console.log(btn);
// arrow o funciones anonimas =>
btn.addEventListener("click", createTask); 





