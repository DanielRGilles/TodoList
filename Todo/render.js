import { getTodos } from '../utils.js';
const toDos = document.getElementById('append-here');


export function renderTodos(arrayItem) {
    const li = document.createElement('li');
    const liMsg = document.createElement('p');
    
    li.append(liMsg);
    liMsg.classList.add('todos');
    liMsg.textContent = arrayItem.todos; 
    return li;
}
export function callRender() {
    const Todos = getTodos(); 
    for (let Todo of Todos) {
        const liItem = renderTodos(Todo);
        toDos.append(liItem);
    }
    
}