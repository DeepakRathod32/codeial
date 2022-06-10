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




// var a = {};
// var a = new Object();

// function createStudent(name, rollNo){
// //  var student = {};
//     this.name = name;
//     this.rollNo = rollNo;

//     // return student

// }

// var student1 = new createStudent('Deepak', 98);

// var b = (a,b) => {   return a+b;}

// b(2,6);

// // Code 1:

// function func1(){
//     setTimeout(()=>{
//       console.log(x);
//       console.log(y);
//     },3000);
  
//     var x = 2;
//     let y = 12;
//   }
  
//   func1();
  
//   // Code 2:
  
//   function func2(){
//     for(var i = 0; i < 3; i++){
//       setTimeout(()=> console.log(i),2000);
//   }
//   333
//   }
  
//   func2();
  
  
//   // Code 3:
  
  
//   (
//       function(){
//             setTimeout(()=> console.log(1),2000);
//                 console.log(2);
//             setTimeout(()=> console.log(3),0);
//                 console.log(4);
//         }
//   )();
// 2
// 4
// 3
// 1{

// }
