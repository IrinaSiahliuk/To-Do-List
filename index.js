const input = document.querySelector("#add-task-input");
const btn = document.querySelector("#add-task-btn");
const taskList = document.querySelector(".task-list");

btn.addEventListener('click', function(e){
    e.preventDefault();
    if(input.value.trim()){
        let newTask = document.createElement('div');
        newTask.classList.add('task');
        newTask.innerHTML = `
        <p class="task-content"> ${input.value} </p>
        <div class="task-actions">
            <button class="done-btn">Готово</button>
            <button class="remove-btn">Удалить</button>
        </div>
        `;
    taskList.appendChild(newTask);
    input.value = '';
    }
});

taskList.addEventListener('click', function(e){
    if(e.target.classList.contains('remove-btn')){
        e.target.parentElement.parentElement.remove();
    }
});

taskList.addEventListener('click', function(e){
    if(e.target.classList.contains('done-btn')){
        e.target.parentElement.parentElement.classList.toggle('done');
    }
});