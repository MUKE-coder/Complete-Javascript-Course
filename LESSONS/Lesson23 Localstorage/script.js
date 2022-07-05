const userNameInput = document.getElementById("username");
const todoForm = document.querySelector(".to-do-form");
const todoList = document.querySelector(".to-do-list");
const todoInput = document.getElementById("todo");
userNameInput.value = localStorage.getItem("username") || "";
todos = [];
userNameInput.addEventListener("change", () => {
  const username = userNameInput.value;
  console.log(username);
  localStorage.setItem("username", username);
});

todoForm.addEventListener("submit", addToDo);

function addToDo(e) {
  // prevent page refresh
  console.log(e);
  e.preventDefault();
  const todo = todoInput.value;
  console.log(todo);
  todos.push(todo);
  console.log(todos);
  e.target.reset();
  updateTodos();
}
updateTodos();
function updateTodos() {
  todos.map((todo) => {
    todoList.innerHTML = "";
    // todoList.insertAdjacentHTML("beforeend", `<p>${todo}</p>`);
    const todoItem = document.createElement("p");
    todoItem.innerHTML = todo;
    todoList.appendChild(todoItem);
  });
}
