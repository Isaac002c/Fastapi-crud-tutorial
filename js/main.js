const form = document.getElementById("form-create");
const list = document.getElementById("task-list");

async function loadTasks() {
    list.innerHTML = "";
    const tasks = await apiGetTasks();

    tasks.forEach(task => {
        const el = createTaskElement(
            task,
            async (id, data) => {
                await apiUpdateTask(id, data);
                loadTasks();
            },
            async id => {
                await apiDeleteTask(id);
                loadTasks();
            }
        );
        list.appendChild(el);
    });
}

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const title = document.getElementById("title").value.trim();
    const desc = document.getElementById("description").value.trim();

    await apiCreateTask({
        title,
        description: desc || null,
        completed: false
    });

    form.reset();
    loadTasks();
});

loadTasks();
