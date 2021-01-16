//Selectors

const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//Event listners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);

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







