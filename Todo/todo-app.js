import { addToDos, getTodos, setTodos } from '../utils.js';
import { callRender } from './render.js';
const formEl = document.getElementById('add-items');
const toDos = document.getElementById('append-here');
const clearbtn = document.getElementById('clear-task');
callRender();

clearbtn.addEventListener('click', () => {
    let doings = getTodos();
    doings = [];
    setTodos(doings);
    toDos.innerHTML = '';
    callRender();
});


formEl.addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(formEl);
    const newTodos = formData.get('todo') ;
    addToDos(newTodos);
    toDos.innerHTML = '';
    callRender();  
});

