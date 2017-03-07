getTodos();

function getTodos() {

    console.log('get todos');

    fetch('http://localhost:3000/todos')
    .then(function(response) {
        return response.json();
    })
    .then(function(response) {
        loopTodos(response);
        console.log('response' + response)
    })
}

function loopTodos(todos) {
    console.log(todos);

    todos.forEach(function(todo) {
        showTodo(todo);
    });
}

function showTodo(todo) {
    var todoItem = `<li class="text-center list-group-item">${todo.todo}</li>`;

        document.querySelector('#todos').innerHTML += todoItem;
}