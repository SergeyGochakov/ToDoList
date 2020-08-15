// Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
// Event listen
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
// Function
function addTodo(e) {
  // Reset default setting
  e.preventDefault();
  // Create DIV Element
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  // Element Li
  const todoItem = document.createElement("li");
  todoItem.innerText = todoInput.value;
  todoItem.classList.add("todo-item");
  todoDiv.appendChild(todoItem);
  // Create Button Mark
  const buttonComplete = document.createElement("button");
  buttonComplete.innerHTML = '<i class = "fas fa-check"></i>';
  buttonComplete.classList.add("complete-btn");
  todoDiv.appendChild(buttonComplete);
  // Create Button Trash
  const buttonDelete = document.createElement("button");
  buttonDelete.innerHTML = '<i class = "fas fa-trash"></i>';
  buttonDelete.classList.add("trash-btn");
  todoDiv.appendChild(buttonDelete);
  // Append Todo list
  todoList.appendChild(todoDiv);
  // Clear To Do input value
  todoInput.value = "";
}

function deleteCheck(e) {
  const item = e.target;
  // DELETE
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    // Animation
    todo.classList.add("fall");
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }
  // CHECK MARK
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}