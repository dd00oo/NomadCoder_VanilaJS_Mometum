
const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector("#todo-list");
const todoInput = document.querySelector("#todo-input");

 

function deleteToDo(event){ 
    const li = event.target.parentElement;  
    li.remove(); 
}

function paintToDo(newTodo){  
    const li = document.createElement("li"); 
    const span = document.createElement("span");  
    span.innerText = newTodo; 
    const button = document.createElement("button"); 
    button.innerText = "❌"; 
    button.addEventListener("mousedown", deleteToDo); 
    
    li.appendChild(span); 
    li.appendChild(button);
    todoList.appendChild(li);   
}

function handleToDoSubmit(event){ 
    const todoListValue = todoInput.value; 
    event.preventDefault(); 
    todoInput.value = "";
    paintToDo(todoListValue); 
}

todoForm.addEventListener("submit", handleToDoSubmit);

/*todoForm.addEventListener("keydown", function (e) {
    const keyCode = e.keyCode;
    console.log("pushed key : " + e.key);
  
    if (keyCode === 13) {
      // Enter key
      if (todoInput.value.length > 0) { 
        handleToDoSubmit(e);
      }else{
        console.log("no");
      }
    }
  });*/
