document.getElementById('taskForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const taskDescription = document.getElementById('taskDescription').value;
    const dueDate = document.getElementById('dueDate').value;

    if (taskDescription && dueDate) {
        addTask(taskDescription, dueDate);
        document.getElementById('taskForm').reset();
    }
});

function addTask(description, dueDate) {
    const taskList = document.getElementById('taskList');
    const listItem = document.createElement('li');
    listItem.textContent = `${description} - Fecha de entrega: ${dueDate}`;
    taskList.appendChild(listItem);
}
document.getElementById('taskForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const taskDescription = document.getElementById('taskDescription').value;
    const dueDate = document.getElementById('dueDate').value;

    if (taskDescription && dueDate) {
        addTask(taskDescription, dueDate);
        scheduleReminder(taskDescription, dueDate);
        document.getElementById('taskForm').reset();
    }
});

function addTask(description, dueDate) {
    const taskList = document.getElementById('taskList');
    const listItem = document.createElement('li');
    listItem.textContent = `${description} - Fecha de entrega: ${dueDate}`;
    taskList.appendChild(listItem);
}

function scheduleReminder(taskDescription, dueDate) {
    const reminderTime = new Date(dueDate).getTime() - Date.now();
    
    // Asegúrate de que el tiempo de recordatorio sea positivo
    if (reminderTime > 0) {
        setTimeout(() => {
            showNotification(taskDescription);
        }, reminderTime);
    }
}

function showNotification(taskDescription) {
    if (Notification.permission === "granted") {
        new Notification("Recordatorio de Tarea", {
            body: `¡Es hora de hacer: ${taskDescription}!`,
            icon: 'icon.png' // Opcional: Cambia el icono si tienes uno
        });
    } else if (Notification.permission !== "denied") {
        Notification.requestPermission().then(permission => {
            if (permission === "granted") {
                new Notification("Recordatorio de Tarea", {
                    body: `¡Es hora de hacer: ${taskDescription}!`,
                    icon: 'icon.png'
                });
            }
        });
    }
}
