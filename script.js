let bodyContainer = document.body;
let tasks = [];
const addInputValue = (e) => {
  e.preventDefault();
  const task = e.target.parentNode.firstChild.value;
  tasks = tasks.concat(task);
  render();
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
  button.addEventListener("click", addInputValue);
  button.innerHTML = "Add";
  form.appendChild(input);
  form.appendChild(button);
  container.appendChild(form);
  formContainer.appendChild(container);
  return formContainer;
};

const renderTask = function (task) {
  const li = document.createElement("li");
  li.innerText = task;
  return li;
};

const renderTasks = () => {
  const tasksContainer = document.createElement("div");
  const ol = document.createElement("ol");
  for (let i = 0; i < tasks.length; i++) {
    const li = renderTask(tasks[i]);
    ol.appendChild(li);
  }
  tasksContainer.appendChild(ol);
  return tasksContainer;
};

const render = (containerSelector = "body") => {
  const container = document.querySelector(containerSelector);
  if (!container) return;
  container.innerHTML = "";
  createForm(bodyContainer);
  const tasksContainer = renderTasks();
  container.appendChild(tasksContainer);
};

createForm(bodyContainer);
