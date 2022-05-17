const inputElement = document.querySelector(".new-task-input");
const addTaskButton = document.querySelector(".new-task-button");
const tasksContainer = document.querySelector(".tasks-container");
const validateInput = () => inputElement.value.trim().length > 0;

const handleAddTask = () => {
    const inputValid = validateInput();
  
    if (!inputValid) {
      return inputElement.classList.add("error");
    }
  
    const taskItemContainer = document.createElement("div");
    taskItemContainer.classList.add("task-item");
  
    const taskContent = document.createElement("p");
    taskContent.innerText = inputElement.value;
  
    taskContent.addEventListener("click", () => handleClick(taskContent));
  
    const deleteItem = document.createElement("i");
    deleteItem.classList.add("far");
    deleteItem.classList.add("fa-trash-alt");
    deleteItem.classList.add("delete-task-button");
  
    deleteItem.addEventListener("click", () => handleDelete(taskItemContainer, taskContent));
  
    taskItemContainer.appendChild(taskContent);
    taskItemContainer.appendChild(deleteItem);
  
    tasksContainer.appendChild(taskItemContainer);
  
    inputElement.value = "";
};

const handleInputChange = () => {
    const inputValid = validateInput();
  
    if (inputValid) {
      return inputElement.classList.remove("error");
    }
};

const handleClick = (taskContent) => {
    const tasks = tasksContainer.childNodes;

    for(const task of tasks){
        if(task.firstChild.isSameNode(taskContent)){
            task.firstChild.classList.toggle('completed');
        }
    }
}

const handleDelete = (taskItemContainer, taskContent) => {
    const tasks = tasksContainer.childNodes;

    for(const task of tasks){
        if(task.firstChild.isSameNode(taskContent)){
            taskItemContainer.remove();
        }
    }

}


addTaskButton.addEventListener("click", () => handleAddTask());
inputElement.addEventListener("change", () => handleInputChange())



  
  