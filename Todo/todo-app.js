import { addToDos } from '../utils.js';
import { callRender } from './render.js';
const formEl = document.getElementById('add-items');
const toDos = document.getElementById('append-here');

callRender();

formEl.addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(formEl);
    const newTodos = formData.get('todo') ;
    addToDos(newTodos);
    toDos.innerHTML = '';
    callRender();  
});

