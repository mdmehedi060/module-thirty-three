function loadTodos() {
  fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
  .then(data=> displayTodos(data))
}

function displayTodos(todos) {
  const todoContainer = document.getElementById('todo-container');
  for (const todo of todos) {
    const todoDiv = document.createElement('div');
    todoDiv.innerHTML = `
    <h3>title: ${todo.title}</h3>
    <p>User Id: ${todo.userId}</p>
    <p>It's copleted; ${todo.completed === true ?'complete': 'not complete'}</p>`;
    todoContainer.appendChild(todoDiv);
  }
}


loadTodos();

