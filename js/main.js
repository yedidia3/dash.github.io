//Selectors

const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

//Event listners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);

//Functions

function addTodo(event){
    event.preventDefault(); //prevent form from resubmitting
    
    //create to do div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    // create li
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    
    //add todo to local storage
    saveLocalTodos(todoInput.value);
    
    
    //completed button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);
    
    //delete button
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.classList.add('delete-btn');
    todoDiv.appendChild(deleteButton);
    
    //append to list
    todoList.appendChild(todoDiv);
    
    //clear todo input value
    todoInput.value = "";
}

//delete or strikethrough checked items
function deleteCheck(e){
    const item = e.target;
    
    //delete to do
    if(item.classList[0] === "delete-btn"){
        const todo = item.parentElement;
        //animate the fall
        todo.classList.add("fall");
        //wait for the animation to end
        todo.addEventListener('transitionend', function(){
            todo.remove();
        });
          
    }
    
    //check mark
    if(item.classList[0] === "complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
    
}


//filter to do list
function filterTodo(e){
    const todos = todoList.childNodes;
    todos.forEach(function(todo) {
       switch (e.target.value) {
           case "all":
               todo.style.display = "flex";
               break;
           case "completed":
               if(todo.classList.contains('completed')){
                   todo.style.display = "flex";
               } else {
                   todo.style.display = "none";
               }
               break;
            case "unfinished":
               if(!todo.classList.contains('completed')){
                   todo.style.display = "flex";
               } else {
                   todo.style.display = "none";
               }
               break;
       }
    });
}

//local storage to save the list
function saveLocalTodos(todo){
    //check if I already have todos 
    let todos;
    if(localStorage.getItem("todos") === null){
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    
    //grab todos and push them into the to do list array
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
}
