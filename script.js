let containerSelector = 'body'
let tasks = [];
const addTask = (e) => {
  e.preventDefault();
  const task = e.target.parentNode.firstChild.value;
  tasks = tasks.concat(task);
  render(containerSelector);
};

const createForm = (formContainer) => {
  const container = document.createElement("div");
  container.classList.add("container");
  const form = document.createElement("form");
  form.classList.add("form");
  const input = document.createElement("input");
  input.classList.add("input");
  input.setAttribute("type", "text");
  input.setAttribute("placeholder", "Enter your task");
  const button = document.createElement("button");
  button.classList.add("button");
  button.addEventListener("click", addTask);
  button.innerHTML = "Add";
  form.appendChild(input);
  form.appendChild(button);
  container.appendChild(form);
  formContainer.appendChild(container);
  return formContainer;
};

const createList = function (task) {
  const li = document.createElement("li");
  li.innerText = task;
  return li;
};

const createTasks = (tasksContainer) => {
  const container = document.createElement("div");
  const ol = document.createElement("ol");
  for (let i = 0; i < tasks.length; i++) {
    const li = createList(tasks[i]);
    ol.appendChild(li);
  }
  container.appendChild(ol);
  tasksContainer.appendChild(container)
  return tasksContainer;
};

const render = (containerSelector ) => {
  const container = document.querySelector(containerSelector);
  if (!container) return;
  container.innerHTML = "";
  createForm(container);
  createTasks(container);
  
};

createForm(document.querySelector(containerSelector));
