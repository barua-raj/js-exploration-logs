const loadToDo = async() => {
    const url = "https://jsonplaceholder.typicode.com/todos";
    const res = await fetch(url);
    const data = await res.json();
    displayToDo(data);
};
const displayToDo = (todos) => {
    const todoContainer = document.getElementById("to-do-container");
    todoContainer.innerHTML = "";
    todos.forEach((todo) => {
        console.log(todo);
        const todoCard = document.createElement("div");
        todoCard.innerHTML = `
            <div class="todo-card">
                <p>${todo.completed == true
                    ? `<i class="fa-solid fa-square-check"></i>`
                    : `<i class="fa-regular fa-square-check"></i>` }</p>
                <h4>${todo.title}</h4>
            </div>
        `;
        todoContainer.append(todoCard)
    });
}
loadToDo();