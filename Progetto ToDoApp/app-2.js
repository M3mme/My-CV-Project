const inputText = document.querySelector('#add-text');
const inputButton = document.querySelector('#input-button');
const taskList = document.querySelector('#task-list');


inputButton.addEventListener('click', addTask)

function addTask(e) {
    if (inputText.value === '') {
        alert('Scrivi qualcosa mongoloide')
    }

    e.preventDefault();
}
