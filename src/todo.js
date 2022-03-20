
const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector("#todo-list");
const todoInput = document.querySelector("#todo-input");
let toDos = [];
const TODOS_KEY = "toDos";

function saveToDo(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}
 
function deleteToDo(event){    
    const deleteItemCName = event.path[2].className;
    const elements = document.getElementsByClassName(deleteItemCName);
    const deleteId = elements[0].id;  
    while (elements.length > 0) elements[0].remove(); 
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(deleteId));
    saveToDo();
}

function paintToDo(newTodo){
    const toDoListCount = todoList.childElementCount;

    const ul = document.createElement("ul");
    ul.className = "todoItemList" + toDoListCount;   
    ul.style.setProperty('list-style-type','none'); 
    ul.id = newTodo.id;

    const liA = document.createElement("li");
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("mousedown", deleteToDo);  
    button.style.setProperty('background-color','transparent');  

    const liB = document.createElement("li");
    const spanText = document.createElement("span"); 
    spanText.innerText = newTodo.text;   
 
    liA.appendChild(button);
    liB.appendChild(spanText);
    ul.appendChild(liA);
    ul.appendChild(liB);

    ul.style.setProperty("display", "inline-flex");
    ul.style.setProperty("flex-direction", "icolumn"); 

    todoList.appendChild(ul);   

    todoInput.focus();

}

function handleToDoSubmit(event){ 
    const newToDo = todoInput.value; 
    event.preventDefault(); 
    todoInput.value = "";
    
    const toDoObj = {
        text:newToDo,
        id:Date.now()
    };
    toDos.push(toDoObj);
    saveToDo();
    paintToDo(toDoObj); 
}


todoForm.addEventListener("submit", handleToDoSubmit);
 
const saveToDos = localStorage.getItem(TODOS_KEY);
console.log(saveToDos);
if(saveToDos){
    const parsedToDos = JSON.parse(saveToDos);
    //console.log(parsedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}