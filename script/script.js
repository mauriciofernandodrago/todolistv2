const localStorageKey = "todolist"


function validateTaskRepetition()
{
    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
    let inputTextValue = document.getElementById("input-task-field").value
    exists = values.find(x => x.name == inputTextValue)
    return !exists ? false : true
}

function addNewTask(){
    let inputText = document.getElementById("input-task-field")
    if(!inputText.value){
        alert("Digite alguma coisa")
    }
    else if(validateTaskRepetition())
    {   
        alert("Já existe uma tarefa com essa descrição")
    }
    else{
        let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
        values.push({
            name: inputText.value
        })
        localStorage.setItem(localStorageKey,JSON.stringify(values))
        showTasks()
    }
    
}
function showTasks(){
    let taskList = document.getElementById("list")
    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
    taskList.innerHTML = ""
    for(let i = 0 ; i<values.length; i++){
        taskList.innerHTML += `<li>${values[i].name}<button id="btn-delete-task" onclick="deleteTask('${values[i].name}')"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
      </svg></button></li>`
    }


}
function deleteTask(data){
    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
    let index = values.findIndex(x => x.name == data);
    values.splice(index,1)
    localStorage.setItem(localStorageKey,JSON.stringify(values))
    showTasks()

}
showTasks()