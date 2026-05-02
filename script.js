// Get DOM elements
const todoInput = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');

// Load todos from localStorage on page load
document.addEventListener('DOMContentLoaded', loadTodos);

// Add todo on button click
addBtn.addEventListener('click', addTodo);

// Add todo on Enter key press
todoInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTodo();
    }
});

// Add a new todo
function addTodo() {
    const todoText = todoInput.value.trim();

    if (todoText === '') {
        alert('Please enter a todo!');
        return;
    }

    // Create todo object
    const todo = {
        id: Date.now(),
        text: todoText,
        completed: false
    };

    // Add to localStorage
    addToLocalStorage(todo);

    // Render the todo
    renderTodo(todo);

    // Clear input
    todoInput.value = '';
    todoInput.focus();
}

// Render a single todo item
function renderTodo(todo) {
    const li = document.createElement('li');
    li.className = 'todo-item';
    li.innerHTML = `
        <input type="checkbox" class="todo-checkbox" ${todo.completed ? 'checked' : ''} onclick="toggleTodo(${todo.id})">
        <span class="todo-text ${todo.completed ? 'completed' : ''}">${escapeHtml(todo.text)}</span>
        <button class="delete-btn" onclick="deleteTodo(${todo.id})">Delete</button>
    `;
    todoList.appendChild(li);
}

// Delete a todo
function deleteTodo(id) {
    // Remove from localStorage
    removeFromLocalStorage(id);

    // Re-render todos
    loadTodos();
}

// Toggle todo completion
function toggleTodo(id) {
    const todos = getTodosFromLocalStorage();
    const todo = todos.find(t => t.id === id);
    if (todo) {
        todo.completed = !todo.completed;
        localStorage.setItem('todos', JSON.stringify(todos));
        loadTodos();
    }
}

// Load todos from localStorage
function loadTodos() {
    const todos = getTodosFromLocalStorage();
    todoList.innerHTML = '';

    if (todos.length === 0) {
        todoList.innerHTML = '<div class="empty-message">No todos yet. Add one to get started!</div>';
        return;
    }

    todos.forEach(todo => renderTodo(todo));
}

// LocalStorage functions
function getTodosFromLocalStorage() {
    const todos = localStorage.getItem('todos');
    return todos ? JSON.parse(todos) : [];
}

function addToLocalStorage(todo) {
    const todos = getTodosFromLocalStorage();
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}

function removeFromLocalStorage(id) {
    let todos = getTodosFromLocalStorage();
    todos = todos.filter(todo => todo.id !== id);
    localStorage.setItem('todos', JSON.stringify(todos));
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}
