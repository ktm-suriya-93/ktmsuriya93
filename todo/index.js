document.getElementById("addTaskButton").addEventListener("click", function() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();
  
    if (taskText === "") {
      alert("Please enter a task!");
      return;
    }
  
    let taskList = document.getElementById("taskList");
  
    let listItem = document.createElement("li");
    listItem.textContent = taskText;
  
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function() {
      taskList.removeChild(listItem);
    });
  
    listItem.appendChild(deleteButton);
  
    taskList.appendChild(listItem);
  
    taskInput.value = "";
  });
  