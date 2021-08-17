const todoForm = document.getElementById("todo");
const todoList = document.getElementById("todo_list");
const todoInput = todoForm.querySelector("input")
let savedTode = []; // 배열
const TODO_key = 'savedTode';



function saveTodo(NewValue){
    localStorage.setItem(TODO_key, JSON.stringify(savedTode)); // 문자열화);
}

function deleteTOdo(event){
    const li = event.target.parentElement; // event는 클릭 target은 내가 누른것 parentElement는 li     
    li.remove();
    savedTode = savedTode.filter(todo => todo.id != parseInt(li.id));
    saveTodo();
}
function paintToDO(newTOdoObj){
    const li = document.createElement("Li");
    li.id = newTOdoObj.id;
    const span = document.createElement("span");
    span.innerText = newTOdoObj.text;
    const button = document.createElement('button');
    button.innerText = '👍';
    button.addEventListener('click', deleteTOdo);
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
    
}
function handleToDOSubmit (event) {
    event.preventDefault();
    const NewValue = todoInput.value;
    todoInput.value = '';
    const newTOdoObj = {
        text: NewValue,
        id: Date.now(),
    };
    savedTode.push(newTOdoObj); 
    saveTodo(savedTode);
    paintToDO(newTOdoObj); // newvalue로 저장된 내용을 li의 저장
}


todoForm.addEventListener("submit", handleToDOSubmit);

const savedInBrower = localStorage.getItem('savedTode');
if(savedInBrower != null){
    const parsedTodos = JSON.parse(savedInBrower); //배열화시킴
    savedTode = parsedTodos;
    parsedTodos.forEach(paintToDO);
}

