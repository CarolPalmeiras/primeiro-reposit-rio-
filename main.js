document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('taskInput');
    const taskDueDate = document.getElementById('taskDueDate');
    const prioritySelect = document.getElementById('prioritySelect');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    addTaskBtn.addEventListener('click', function() {
        const taskName = taskInput.value.trim();
        const dueDate = taskDueDate.value;
        const priority = prioritySelect.value;

        if (taskName === '') {
            alert('Por favor, digite o nome da tarefa.');
            return;
        }

        const taskItem = document.createElement('li');
        taskItem.classList.add('task', `priority-${priority}`);
        taskItem.innerHTML = `
            <span>${taskName}</span>
            <small>Prazo: ${dueDate}</small>
            <button class="delete-btn">Excluir</button>
        `;

        taskList.appendChild(taskItem);

        taskInput.value = '';
        taskDueDate.value = '';
    });

    taskList.addEventListener('click', function(e) {
        if (e.target.classList.contains('delete-btn')) {
            e.target.parentElement.remove();
        }
    });
});
