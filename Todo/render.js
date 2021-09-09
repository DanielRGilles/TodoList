import { completeToDos, getTodos } from '../utils.js';
const toDos = document.getElementById('append-here');


export function renderTodo(arrayItem) {
    const li = document.createElement('li');
    const btn = document.createElement('button');
    
    li.append(btn);
    btn.classList.add('todos');
    btn.setAttribute('id', arrayItem.id);
    btn.textContent = arrayItem.todos;
    
    btn.addEventListener('click', () => {
        completeToDos(arrayItem.id);
        btn.style.textDecoration = 'line-through';
    });
    if (arrayItem.completed) {
        btn.style.textDecoration = 'line-through';
    }  
    
    return li;
}
export function callRender() {
    const Todos = getTodos(); 
    for (let Todo of Todos) {
        const liItem = renderTodo(Todo);
        toDos.append(liItem);
    }
}
