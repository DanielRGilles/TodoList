
export function setUser(user) {
    const stringyUser = JSON.stringify(user);
    localStorage.setItem('USER', stringyUser);
}

export function getUser() {
    const stringyUser = localStorage.getItem('USER');
    const userInfo = JSON.parse(stringyUser);
    return userInfo;
}
export function getTodos() {
    const UserTo = getUser();
    const toDos = UserTo.todos;
    return toDos;
}
export function setTodos(todos) {
    const userTo = getUser();
    userTo.todos = todos;
    setUser(userTo);
}
export function addToDos(liMsg){
    const todos = getTodos();

    const newTodo = {
        id: Math.ceil(Math.random() * 999),
        todo: liMsg,
        completed: false,
    };
    todos.push(newTodo);
    setTodos(todos);
}
export function completeToDos(id) {
    const toDos = getTodos();
    const findTodo = toDos.find(toDos => toDos.id === id);
    findTodo.completed = true;
    setTodos(toDos);
}
export function createUser(formData) {
    const newUser = { name:formData.get('name'), 
        password:formData.get('password'), 
        
    };
    return newUser;}