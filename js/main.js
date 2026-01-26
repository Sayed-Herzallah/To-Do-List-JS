
// variables to use page elements
const form = document.querySelector("#task-form");
const input = document.querySelector("#works");
const result = document.querySelector("#result");

// tasks from local storage
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
renderTasks();

// add task
form.addEventListener("submit", function(event) {
    event.preventDefault();
    const text = input.value.trim();
    if (text === "") {
        alert("Please Enter Your Works");
        return;
    }
    tasks.push(text);
    saveTasks();     
    renderTasks();    
    input.value = ""; 
});

// save tasks
function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// read tasks
function renderTasks() {
    result.innerHTML = "";
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-items-center";
        li.innerHTML = `
            <span>${task}</span>
            <div>
                <button class="btn btn-sm btn-warning edit-btn">تعديل</button>
                <button class="btn btn-sm btn-danger delete-btn">مسح</button>
            </div>
        `;

      // edit
        li.querySelector(".edit-btn").addEventListener("click", () => {
            const newTask = prompt("عدل مهمتك:", task);
            if (newTask !== null && newTask.trim() !== "") {
                tasks[index] = newTask.trim();
                saveTasks();
                renderTasks();
            }
        });

        // delete 
        li.querySelector(".delete-btn").addEventListener("click", () => {
            tasks.splice(index, 1);
            saveTasks();
            renderTasks();
        });

        result.appendChild(li);
    });
}

// change navbar
document.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    const scrollY = window.scrollY;
    if (scrollY > 350) {
        navbar.setAttribute("class", "navbar navbar-expand-lg navbar-dark bg-danger");
    } else {
        navbar.setAttribute("class","navbar navbar-expand-lg navbar-dark bg-dark");
    }
});
