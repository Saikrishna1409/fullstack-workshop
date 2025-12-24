// task-manager.js

const TASKS_KEY = 'tasks';
let tasks = [];
let currentFilter = 'all';

// DOM Elements
const taskForm = document.getElementById('task-form');
const taskTitleInput = document.getElementById('task-title');
const taskDescriptionInput = document.getElementById('task-description');
const tasksList = document.getElementById('tasks-list');
const filterButtons = document.querySelectorAll('.filter-btn');
const taskCountEl = document.getElementById('task-count');

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    loadTasks();
    renderTasks();
    setupEventListeners();
});

// Event Listeners
const setupEventListeners = () => {
    // Form submission
    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const title = taskTitleInput.value.trim();
        const description = taskDescriptionInput.value.trim();
        
        if (title === '') return;
        
        addTask(title, description);
        taskForm.reset();
    });

    // Filter buttons
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            currentFilter = btn.dataset.filter;
            updateFilters();
            renderTasks();
        });
    });

    // Event delegation for tasks
    tasksList.addEventListener('click', (e) => {
        const taskItem = e.target.closest('.task-item');
        if (!taskItem) return;

        const id = parseInt(taskItem.dataset.id);
        if (e.target.matches('.delete-btn')) {
            deleteTask(id);
        } else if (e.target.matches('.toggle-btn') || e.target.matches('.task-checkbox')) {
            toggleTask(id);
        }
    });
};

const updateFilters = () => {
    filterButtons.forEach(btn => btn.classList.remove('active'));
    document.querySelector(`[data-filter="${currentFilter}"]`).classList.add('active');
};

// Core Functions
const addTask = (title, description = '') => {
    const newTask = {
        id: Date.now(),
        title,
        description,
        completed: false,
        createdAt: new Date().toISOString()
    };
    
    tasks.unshift(newTask); // Add to beginning
    saveTasks();
    renderTasks();
};

const deleteTask = (id) => {
    tasks = tasks.filter(task => task.id !== id);
    saveTasks();
    renderTasks();
};

const toggleTask = (id) => {
    tasks = tasks.map(task =>
        task.id === id
            ? { ...task, completed: !task.completed }
            : task
    );
    saveTasks();
    renderTasks();
};

const filterTasks = (filter) => {
    switch (filter) {
        case 'active':
            return tasks.filter(task => !task.completed);
        case 'completed':
            return tasks.filter(task => task.completed);
        default:
            return tasks;
    }
};

const saveTasks = () => {
    localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
};

const loadTasks = () => {
    const saved = localStorage.getItem(TASKS_KEY);
    tasks = saved ? JSON.parse(saved) : [];
};

const renderTasks = () => {
    const filteredTasks = filterTasks(currentFilter);
    const taskCount = tasks.length;
    
    // Update count
    taskCountEl.textContent = taskCount;
    
    if (filteredTasks.length === 0) {
        tasksList.innerHTML = '<li class="empty-state">No tasks yet. Add one above!</li>';
        return;
    }
    
    // Generate HTML with template literals
    const tasksHTML = filteredTasks.map(task => `
        <li class="task-item ${task.completed ? 'completed' : ''}" data-id="${task.id}">
            <input type="checkbox" class="task-checkbox" ${task.completed ? 'checked' : ''}>
            <div class="task-content">
                <div class="task-title">${escapeHtml(task.title)}</div>
                ${task.description ? `<div class="task-description">${escapeHtml(task.description)}</div>` : ''}
                <div class="task-meta">Created: ${formatDate(task.createdAt)}</div>
            </div>
            <div class="task-actions">
                <button class="toggle-btn">${task.completed ? 'Undo' : 'Complete'}</button>
                <button class="delete-btn">Delete</button>
            </div>
        </li>
    `).join('');
    
    tasksList.innerHTML = tasksHTML;
};

// Utility Functions
const escapeHtml = (text) => {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
};

const formatDate = (isoString) => {
    return new Date(isoString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
};
