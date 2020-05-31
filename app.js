//Defne UI
let taskForm = document.querySelector('#task-form')
let TaskInput = document.querySelector('#TaskInput')
let taskCollection = document.querySelector('.collection')
let clear = document.querySelector('.clears')
let filter = document.querySelector('#filter')

//Load All Events
loadEventListeners()

//add Task
function loadEventListeners() {
    //Add task
    taskForm.addEventListener('submit', addTask)

    //Remove Task
    taskCollection.addEventListener('click', removes)

    //clears
    clear.addEventListener('click', clears)

    //filter
    filter.addEventListener('keyup', filterTask)
}

function addTask(e) {
    if (TaskInput.value === '') {
        alert('Please Add Value')
    }

    let li = document.createElement('li')
    li.className = 'list-group-item'
    li.appendChild(document.createTextNode(TaskInput.value))

    let link = document.createElement('a')
    link.className = 'close'
    link.innerHTML = '<i class="fas fa-minus"></i>'
    li.appendChild(link)

    taskCollection.appendChild(li)
    TaskInput.value = ''
    e.preventDefault()
}

//Remove Task
function removes(e) {
    if (e.target.parentElement.classList.contains('close'))
        if (confirm('Are You sure')) {
            e.target.parentElement.parentElement.remove()
        }
}

//clears Task

function clears(e) {
    taskCollection.innerHTML = ''
    e.preventDefault()
}

//filters Item

function filterTask(e) {
    let text = e.target.value.toLowerCase()
    document.querySelectorAll('.list-group-item').forEach(function(task) {
        const item = task.firstChild.textContent;
        if (item.toLowerCase().indexOf(text) != -1) {
            task.style.display = 'block'
        } else {
            task.style.display = 'none'
        }
    })
}