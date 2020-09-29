let todoList = document.querySelector('.todo-list')
let btn_add = document.getElementById('btn-add')
let btn_fix = document.getElementById('btn-fix')
let todo_input = document.getElementById('todo-input')
let todo_option_item = document.querySelectorAll('.todo-option-item input')
var todosfilter
var fix_id

function create_UUID() {
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (dt + Math.random() * 16) % 16 | 0;
        dt = Math.floor(dt / 16);
        return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
}

let todos = [
    {
        id: create_UUID(),
        title: 'Hôm nay chơi game',
        status: true
    },
    {
        id: create_UUID(),
        title: 'Học lập trình Javascript',
        status: false
    }
]

btn_add.addEventListener('click', function () {
    if (todo_input.value == '') {
        alert('Viết tên công việc')
        return
    }

    let todoNew = {
        id: create_UUID(),
        title: todo_input.value,
        status: false
    }

    todos.push(todoNew)
    todo_input.value = ''
    // renderUI(todos)
    setTodoFromLocalStorage(todos)
})

btn_fix.addEventListener('click',function() {
    if (todo_input.value == '') {
        alert('Viết tên công việc cập nhật')
        return
    }
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].id == fix_id) {
            todos[i].title = todo_input.value
            btn_add.classList.remove('btn-unactive')
            btn_fix.classList.add('btn-unactive')
        }
    }
    
    todo_input.value = ''
    // renderUI(todos)
    setTodoFromLocalStorage(todos)
})

function filterTodo() {
    let value = ''
    for (let i = 0; i < todo_option_item.length; i++) {
        if (todo_option_item[i].checked) {
            value = parseInt(todo_option_item[i].value)
        }
    }
    switch (value) {
        case 1:
            todosfilter = [...todos]
            break
        case 2:
            todosfilter = todos.filter(ele => ele.status == false)
            break
        case 3:
            todosfilter = todos.filter(ele => ele.status == true)
            break
        default:
            todosfilter = [...todos]
            break
    }
}

function renderUI(todos) {
    todoList.innerHTML = ''
    filterTodo()
    if (todosfilter.length == 0) {
        todoList.innerText = "Không có công việc trong danh sách"
    }
    let content = ""
    todosfilter.forEach(ele => {
        content = `
            <div class="todo-item ${ele.status ? 'active-todo' : ''}">
            <div class="todo-item-title">
                ${ele.status
                ? `<input type="checkbox" checked onclick="toggleStatus('${ele.id}')">`
                : `<input type="checkbox" onclick="toggleStatus('${ele.id}')">`
            }
            <p>${ele.title}</p>
        </div>
        <div class="option">
            <button class="btn btn-update " onclick="updateTodo('${ele.id}')">
                <img src="./img/pencil.svg" alt="icon">
            </button>
            <button class="btn btn-delete" onclick="deleteTodo('${ele.id}')">
                <img src="./img/remove.svg" alt="icon">
            </button>
        </div>
        </div>`
        todoList.insertAdjacentHTML('beforeend', content)
    });
}

function toggleStatus(id) {
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].id == id) {
            todos[i].status = !todos[i].status
        }
    }
    // renderUI(todos)
    setTodoFromLocalStorage(todos)
}

function deleteTodo(id) {
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].id == id) {
            todos.splice(i, 1)
        }
    }
    // renderUI(todos)
    setTodoFromLocalStorage(todos)
}

function updateTodo(id) {
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].id == id) {
            fix_id = id
            todo_input.value = todos[i].title
            btn_fix.classList.remove('btn-unactive')
            btn_add.classList.add('btn-unactive')
        }
    }
    // renderUI(todos)
    // setTodoFromLocalStorage(todos)
}

function setTodoFromLocalStorage(todos) {
    localStorage.setItem("todos", JSON.stringify(todos))
    renderUI(todos)
}

function getTodoFromLocalStorage() {
    const todoLocalStorage = localStorage.getItem("todos")
    if (todoLocalStorage) {
        todos = JSON.parse(todoLocalStorage)
        renderUI(todos)
    }
}

function init() {
    getTodoFromLocalStorage()
    // renderUI(todos)
}

window.onload = init()

todo_option_item.forEach(btn => {
    btn.addEventListener('change', function() {
        // renderUI(todos)
        setTodoFromLocalStorage(todos)
    })
})


