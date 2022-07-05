const form = document.getElementById('task-form');
const taskList = document.getElementById('tasks-container')

var id = 0;
form.onsubmit = function (e) {
    e.preventDefault();
    const input = document.getElementById('input');
    if(input.value)
        addtask(input.value);
    input.value = '';
}


function checked () {
    console.log(this.class);
}

function addtask(input) {
    const taskContainer = document.createElement('div');
    const newTask =  document.createElement('input');
    const tasklable = document.createElement('label');
    const taskDescription = document.createTextNode(input);

    newTask.setAttribute('type','checkbox');
    newTask.setAttribute('name',input);
    newTask.setAttribute('id', input);

    tasklable.setAttribute('for', input);
    tasklable.appendChild(taskDescription);

    taskContainer.classList.add('task-item');
    taskContainer.appendChild(newTask);
    taskContainer.appendChild(tasklable);

    taskList.appendChild(taskContainer);
}