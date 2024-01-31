const button = document.querySelector('.button');
const button2 = document.querySelector('.button2');
const form = document.querySelector('.form');
const input = document.querySelector('.input');
const listContainer = document.querySelector('.list-container');


 
form.addEventListener('submit', handleSubmit);
        
menssage();

function menssage(){
        const h3 = document.createElement('h3');
        h3.classList.add('task-menssage');

         h3.textContent = listContainer.firstElementChild?
         'Tareas por hacer' : 'No hay tareas aun';
         //  listContainer.parentElement.insertBefore(h3, listContainer); manera obsoleta
         
    const prevMessage = document.querySelector('.task-menssage');
    

    
    if(prevMessage){  
      prevMessage.replaceWith(h3);
       return;
    }
    listContainer.before(h3);
    
}   
function handleSubmit(e){
            e.preventDefault();
            const inputV = input.value;
            createTask(inputV);
            this.reset();
            menssage();
}   
function createTask(value){ 
            const newTask = document.createElement("li");
            newTask.textContent = value
            newTask.classList.add('nueva-clase');
        
            listContainer.prepend(newTask);
            addEvents(newTask);
}     
function addEvents(element){
            element.addEventListener('dblclick', function(){
            //    element.parentElement.removeChild(element) obsoleto
            element.remove(element);
            menssage();
            });
}

const wrap = document.querySelector('.wrapper');


// para clonar un elemento en el DOM
 const copiawrap = wrap.cloneNode(true);
// console.log(copiawrap);
// wrap.after(copiawrap);
// wrap.before(copiawrap);
// el codigo copiado se inserta en el dom 