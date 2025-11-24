async function apiGetTasks() {
    const res = await fetch(`${API_BASE}/tasks/`);
    return res.json();
}

async function apiCreateTask(payload) {
    const res = await fetch(`${API_BASE}/tasks/`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(payload)
    });
    return res.json();
}

async function apiUpdateTask(id, payload) {
    const res = await fetch(`${API_BASE}/tasks/${id}`, {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(payload)
    });
    return res.json();
}

async function apiDeleteTask(id) {
    const res = await fetch(`${API_BASE}/tasks/${id}`, {
        method: "DELETE"
    });
    return res.json();
}
