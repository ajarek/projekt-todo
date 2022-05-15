let containerSelector = 'body'

const loadTasks = function () {
  return JSON.parse(localStorage.getItem('tasks')) || []
}

const saveTasks = function () {
  localStorage.setItem('tasks', JSON.stringify(tasks))
}

const addTask = (e) => {
  e.preventDefault();
  const task ={
    text: e.target.parentNode.firstChild.value,
    time: new Date().toLocaleString()
  }
 tasks=tasks.concat(task);
  saveTasks();
  render(containerSelector)
  
}

const createForm = (formContainer) => {
  const container = document.createElement("div")
  container.classList.add("container")
  const form = document.createElement("form")
  form.classList.add("form")
  const input = document.createElement("input")
  input.classList.add("input")
  input.setAttribute("type", "text")
  input.setAttribute("placeholder", "Enter your task")
  const button = document.createElement("button")
  button.classList.add("button")
  button.addEventListener("click", addTask)
  button.innerHTML = "Add"
  form.appendChild(input)
  form.appendChild(button)
  container.appendChild(form)
  formContainer.appendChild(container)
  return formContainer
}

const createList = function (task) {
  const li = document.createElement("li")
  li.innerText = task.text+' ;created: '+task.time
  return li
}

const createTasks = (tasksContainer) => {
  const container = document.createElement("div")
  const ol = document.createElement("ol")
  for (let i = 0; i < tasks.length ;i++) {
    const li = createList(tasks[i])
    ol.appendChild(li)
  }
  container.appendChild(ol)
  tasksContainer.appendChild(container)
  return tasksContainer
}

const render = (containerSelector ) => {
  const container = document.querySelector(containerSelector)
  if (!container) return
  container.innerHTML = ""
  createForm(container)
  createTasks(container)
  
}

let tasks = loadTasks()
createForm(document.querySelector(containerSelector))
createTasks(document.querySelector(containerSelector))