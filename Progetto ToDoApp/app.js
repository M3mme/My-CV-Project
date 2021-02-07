const taskInput = document.querySelector('#input');
const inputButton = document.querySelector('#input-button');
const taskList = document.querySelector('#task-list');

// Aggiungo un evento //
inputButton.addEventListener('click', addTask)
taskList.addEventListener('click', removeTask)


function addTask(e) {
    // Se non scrivi nulla //
    if(taskInput.value === '') {
        alert('scrivi qualcosa')
    }

    // Creare li e aggiungere classe //
    const li = document.createElement('li');
    li.className = 'task';

    // Creare nuovo textnode e metterlo dentro li //
    li.appendChild( document.createTextNode(taskInput.value));

    // Creare link //
    const link = document.createElement('a')

    // Aggiungere classe ad a //
    link.className = 'delete-todo'

    // Aggiungi x ad a //
    link.innerHTML = '<h3>X</h3>';
     
    
    // Mettere link nel li //
    li.appendChild(link)


    // Mettere li dentro ul //
    taskList.appendChild(li)

    // Pulisco il text dopo l'add //
    taskInput.value = ''

    console.log(li);
    e.preventDefault();
}

// Cancello quando si clicca sulla x //
function removeTask(e) {
    if(e.target.parentElement.classList.contains('delete-todo')) {
        e.target.parentElement.parentElement.remove()
    }




    e.preventDefault();
}