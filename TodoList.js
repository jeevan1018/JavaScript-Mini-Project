
function addTask() {
    var taskInput = document.getElementById("new-task");
    var taskText = taskInput.value.trim();

    if (taskText !== "") {
        console.log("helloooo");
        var todoList = document.getElementById("todo-list");

        
        var listItem = document.createElement("li");
        listItem.className = "todo-item";
        listItem.style.margin="9px";
        

        
        var taskSpan = document.createElement("span");
        taskSpan.textContent = taskText;

        // delete
        var deleteBtn = document.createElement("button");
        deleteBtn.style.width="50px";
        deleteBtn.style.height="25px";
        deleteBtn.className = "delete-btn";
        deleteBtn.textContent = "Undo";
        deleteBtn.onclick = function () {
            todoList.removeChild(listItem);
        };

        
        listItem.appendChild(taskSpan);
        listItem.appendChild(deleteBtn);

    
        todoList.appendChild(listItem);

    
        taskInput.value = "";
    }
    else{
        alert("please enter text")
    }
}