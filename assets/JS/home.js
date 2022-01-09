let list = [];
const taskList = document.getElementById('list');
const addTodo = document.getElementById('add');
const deleteTodo = document.getElementById('delete');

// console.log('dhid', taskList);

function render(){}

function showNotification(text){
    alert(text);
}

// function toggleTask(taskId){
//     let newList = list.filter( (tasks) => {
//         return tasks.taskId === taskId;
// });
// }

function deleteTask(taskId){
    let newList = list.filter( (tasks) => {
            return tasks.taskId !== taskId;
    });
    list  = newList;
 }

function addTodoTask(tasks){
    list.push(tasks);
    // showNotification()
    render();
    return;
}

function handleEvents(e){

    const task = e.target.value;
    let categories =  document.getElementById('category').value;
    let dueDate =  document.getElementById('date').value;

    if( e.key === 'Enter'){
        
        console.log(task);
    
        if(!task){
            showNotification("task cann't be empty");
        }

        let tasks = {
            task : task,
            category : categories,
            date : dueDate,
            taskId : Date.now().toString()
        };

        e.target.value = "";
        categories.html = "";
        dueDate.html = "";
        // console.log(tasks);
        addTodoTask(tasks);
    }   
}


taskList.addEventListener('keyup', handleEvents);