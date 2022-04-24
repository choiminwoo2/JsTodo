const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos= [];

function saveToDos(){
    localStorage.setItem( TODOS_KEY, JSON.stringify(toDos));
}

function handleToDoSumbit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    console.log(`newTodo = ${newTodo}`);
    toDoInput.value="";
    let newToDosObj = {
        text: newTodo,
        id: Date.now()
    };
    console.log(`newTOdosObj = ${newToDosObj.text}\n id:${newToDosObj.id}`);
    toDos.push = newToDosObj;
    paintTodo(newToDosObj);
    saveToDos(newTodo);


}

function deleteTodo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id != parseInt(li.id) );
    saveToDos();
}

function paintTodo(newTodo){
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

console.log(toDoInput);

toDoForm.addEventListener("submit", handleToDoSumbit);

const savedToDos = localStorage.getItem(TODOS_KEY);


if(saveToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintTodo);
}