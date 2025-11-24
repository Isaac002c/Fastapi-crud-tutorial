function createTaskElement(task, onUpdate, onDelete) {
    const div = document.createElement("div");
    div.className = "task";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    checkbox.addEventListener("change", () => {
        onUpdate(task.id, {
            title: task.title,
            description: task.description,
            completed: checkbox.checked
        });
    });

    const content = document.createElement("div");
    content.className = "content";
    content.innerHTML = `
        <strong>${task.title}</strong>
        <small>${task.description || ""}</small>
    `;

    const btnDelete = document.createElement("button");
    btnDelete.className = "delete";
    btnDelete.innerText = "Excluir";
    btnDelete.addEventListener("click", () => onDelete(task.id));

    div.append(checkbox, content, btnDelete);
    return div;
}
