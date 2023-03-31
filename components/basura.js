//funcion de basura exportada a un archivo, antes estaba dentro del script

const basura = () => {
    const i = document.createElement('i');
    i.classList.add('fas' );
    i.classList.add('fa-trash-alt');
    i.classList.add('trashIcon');
    i.classList.add('icon');
    i.addEventListener("click", deleteTask);
    return i;
  
  }
  
  const deleteTask = (eliminar) => {
  const objetosEliminados = eliminar.target.parentElement;
  objetosEliminados.remove();
  
  
  }

export default basura; //deja listo el archivo para llamar dicha funcion en el script   