l// Elements
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

// Function to create a new task item
function createTaskItem(taskText) {
    // Create list item
    const li = document.createElement('li');
    
    // Add task text
    const span = document.createElement('span');
    span.textContent = taskText;
    li.appendChild(span);
    
    // Create delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    
    // Add delete functionality
    deleteBtn.addEventListener('click', () => {
        li.remove();
    });

    li.appendChild(deleteBtn);

    return li;
}

// Add task when button is clicked
addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();

    if (taskText) {
        const taskItem = createTaskItem(taskText);
        taskList.appendChild(taskItem);
        taskInput.value = ''; // Clear the input field
    } else {
        alert('Please enter a task');
    }
});

// Add task when Enter key is pressed
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const taskText = taskInput.value.trim();
        
        if (taskText) {
            const taskItem = createTaskItem(taskText);
            taskList.appendChild(taskItem);
            taskInput.value = ''; // Clear the input field
        } else {
            alert('Please enter a task');
        }
    }
});
