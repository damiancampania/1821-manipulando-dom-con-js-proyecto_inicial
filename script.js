const btn = document.querySelector("[data-form-btn]");
const input = document.querySelector("[data-form-input]");

const createTask = (evento) => {
    evento.preventDefault();
    const input = document.querySelector("[data-form-input]");
    const value = input.value;
    
    const list =document.querySelector ("[data-list]");
    
    const task = document.createElement ("li");
    task.classList.add("card");
    input.value = "";
    const taskContent = document.createElement ("div");
    const titleTask = document.createElement ("span")
    list.appendChild(task);
    task.appendChild (taskContent) ;
    taskContent.appendChild(checkComplete() );
    taskContent.appendChild (titleTask);
    
    titleTask.classList.add("task");
    titleTask.innerText= value;
  

   /* const content =  /* ` <div> /////////////////////////////estructura del content que luego se reemplaza en constantes
    <i class="far fa-check-square icon"></i>
    <span class="task" >${value}</span>
  </div>
  <i class="fas fa-trash-alt trashIcon icon" ></i>`
   `  
  <i class="fas fa-trash-alt trashIcon icon" ></i>`*/

task.appendChild(basura());
//task.innerHTML = content;


  



    }

    
// arrow o funciones anonimas =>
btn.addEventListener("click", createTask); 
const checkComplete = () => {
  const i = document.createElement('i');
  i.classList.add('far', 'fa-check-square', 'icon' );
  i.addEventListener("click", completeTask);
  
  return i;

}

const completeTask = (event) => {
const element = event.target;
element.classList.toggle("fas");
element.classList.toggle ("completeIcon");
element.classList.toggle ("far");

}

const basura = () => {
  const i = document.createElement('i');
  i.classList.add('fas' );
  i.classList.add('fa-trash-alt');
  i.classList.add('trashIcon');
  i.classList.add('icon');
  
  return i;

}




