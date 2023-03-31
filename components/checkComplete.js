//funcion de checkcomplete exportada a un archivo, antes estaba dentro del script

const checkComplete = () => {
    const i = document.createElement('i');
    i.classList.add('far', 'fa-check-square', 'icon' ); //se peude escribir asi todo junto o como puse en basura
    i.addEventListener("click", completeTask);
    
    return i;
  
  }
  
  const completeTask = (event) => {
  const element = event.target;
  element.classList.toggle("fas");
  element.classList.toggle ("completeIcon");
  element.classList.toggle ("far");
  
  }

  export default checkComplete // deja a la funcion lista para ser llamada en script o en otra pagina