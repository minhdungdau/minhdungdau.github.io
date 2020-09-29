let todo_list = document.querySelector(".todo-list");
let btn_add = document.querySelector("#btn-add")
let todo_input = document.querySelector("#todo-input")
let todo_option_item = document.querySelectorAll('.todo-option-item input')

function create_UUID(){
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (dt + Math.random()*16)%16 | 0;
        dt = Math.floor(dt/16);
        return (c=='x' ? r :(r&0x3|0x8)).toString(16);
    });
    return uuid;
}

let todos = []
// let todos = [
//     {
//         id: create_UUID(),
//         title : "Hôm nay chơi game",
//         status : true
//     },
//     {
//         id: create_UUID(),
//         title : "Học lập trình Javascript",
//         status : false
//     }
// ]

btn_add.addEventListener('click', function() {
    // Lấy ra value trong ô input + Kiểm tra rỗng hay không
    let todo = todo_input.value

    if(todo == "") {
        alert('Công việc không được để trống')
        return
    }

    // Tạo object todo mới
    let newTodo = {
        id : create_UUID(),
        title: todo,
        status : false
    }

    // Push vào mảng todos
    todos.push(newTodo)
    
    // Render lại UI
    todo_input.value = ""
    setTodosFromLocalStorage(todos)
})

function renderUI(todos) {
    todo_list.innerHTML = ""

    let optionSelected = getOptionSelected()
    let newTodos

    switch(optionSelected) {
        case 1: // All
            newTodos = [...todos]
            break
        case 2: // Chưa hoàn thành
            newTodos = todos.filter(todo => todo.status == false)
            break
        case 3: // Hoàn thành
            newTodos = todos.filter(todo => todo.status == true)
            break
        default: 
            newTodos = [...todos]
            break
    }

    // Trường hợp danh sách rỗng thì hiển thị 'không có công việc'
    if(newTodos.length == 0) {
        todo_list.innerHTML = `<p class="todos-empty">Không có công việc nào trong danh sách</p>`
        return
    }
    // Dùng vòng lặp để hiển thị danh sách todo
    for (let i = 0; i < newTodos.length; i++) {
        const t = newTodos[i];
        todo_list.innerHTML += `
            <div class="todo-item ${t.status ? 'active-todo' : ''} ">
                <div class="todo-item-title">

                    ${
                        t.status
                        ? `<input type="checkbox" checked onclick="toggleStatus('${t.id}')">`
                        : `<input type="checkbox" onclick="toggleStatus('${t.id}')">`
                    }
                   
                    <p>${t.title}</p>
                </div>
                <div class="option">
                    <button class="btn btn-update">
                        <img src="./img/pencil.svg" alt="icon" onclick="updateTodo(${t.id})">
                    </button>
                    <button class="btn btn-delete" onclick="deleteTodo('${t.id}')">
                        <img src="./img/remove.svg" alt="icon">
                    </button>
                </div>
            </div>
        `
    }
}

todo_option_item.forEach(btn => {
    btn.addEventListener('change', function() {
        // renderUI(todos)
        setTodosFromLocalStorage(todos)
    })
})

// Lấy giá trị trong ô radio
function getOptionSelected() {
    for(let i =0; i< todo_option_item.length; i++) {
        if(todo_option_item[i].checked) {
            return parseInt(todo_option_item[i].value)
        }
    }
}

function toggleStatus(id) {
    for(let i =0; i< todos.length; i++) {
        if(todos[i].id == id) {
            todos[i].status = !todos[i].status
        }
    }
    // renderUI(todos)
    setTodosFromLocalStorage(todos)
}

function deleteTodo(id) {
    for(let i =0; i< todos.length; i++) {
        if(todos[i].id == id) {
            todos.splice(i,1)
        }
    }
    // renderUI(todos)
    setTodosFromLocalStorage(todos)
}

function setTodosFromLocalStorage(todos) {
    localStorage.setItem("todos", JSON.stringify(todos))
    renderUI(todos)
}

function getTodosFromLocalStorage() {
    const todoLocalStorage = localStorage.getItem("todos")
    if(todoLocalStorage) {
        todos = JSON.parse(todoLocalStorage)
        renderUI(todos)
    }
}


function init() {
    getTodosFromLocalStorage()
    // renderUI(todos)
}

window.onload = init()

