const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = 'todos';




let todo_list= [];


function saveTodos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(todo_list));
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text : newTodo,
        id: new Date()
    };
    todo_list.push(newTodoObj);
    paintTodos(newTodoObj);
    saveTodos();
}

function paintTodos(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button= document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function deleteTodo(event) {
    event.preventDefault();
    console.log(event);
    const li = event.target.parentElement;
    li.remove();
    todo_list.filter((todo) => todo.id != parseInt(li.id));
    saveTodos();


}



toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);


if(saveTodos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintTodos);
}