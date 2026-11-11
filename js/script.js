const goals = document.querySelectorAll(".study-goal input");
const progress = document.getElementById("goalProgress");
const progressFill = document.getElementById("progressFill");

if (goals.length > 0 && progress && progressFill) {

    function updateProgress() {
        let completed = 0;

        goals.forEach(function(goal) {
            if (goal.checked) {
                completed++;
            }
        });

        progress.textContent = completed + " of " + goals.length + " goals completed";

        let percentage = (completed / goals.length) * 100;
        progressFill.style.width = percentage + "%";
    }

    goals.forEach(function(goal) {
        goal.addEventListener("change", updateProgress);
    });

    updateProgress();
}

// Live Date and Time
function updateDateTime() {
    const dateElement = document.getElementById("currentDate");
    const timeElement = document.getElementById("currentTime");

    if (dateElement && timeElement) {
        const now = new Date();

        dateElement.textContent = now.toDateString();

        timeElement.textContent = now.toLocaleTimeString();
    }
}

updateDateTime();
setInterval(updateDateTime, 1000);

// Dark and Light Mode Toggle
const themeButton = document.getElementById("themeToggle");

if (themeButton) {
    themeButton.addEventListener("click", function() {
        document.body.classList.toggle("light-mode");

        if (document.body.classList.contains("light-mode")) {
            themeButton.textContent = "Dark Mode";
        } else {
            themeButton.textContent = "Light Mode";
        }
    });
}

// Add, complete and delete new study tasks
(function () {
    const addButton = document.getElementById("addTaskBtn");
    const taskInput = document.getElementById("newTaskInput");
    const taskList = document.getElementById("taskList");

    if (!addButton || !taskInput || !taskList) return;

    addButton.addEventListener("click", function () {
        const taskName = taskInput.value.trim();

        if (taskName === "") {
            alert("Please enter a task first.");
            return;
        }

        const task = document.createElement("div");
        task.className = "study-goal";

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        const label = document.createElement("label");
        label.textContent = taskName;

        const deleteButton = document.createElement("button");
        deleteButton.type = "button";
        deleteButton.textContent = "Delete";

        deleteButton.addEventListener("click", function () {
            task.remove();
        });

        task.appendChild(checkbox);
        task.appendChild(label);
        task.appendChild(deleteButton);

        taskList.appendChild(task);

        taskInput.value = "";
    });
})();