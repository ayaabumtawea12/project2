 
let task1={description:'homework solution',due_date:"2023-05-01",priority_level:3,state:'complete'}

let task2 = Object.create(task1);
task2.description='training';
task2.due_date="2023-05-02";
task2.priority_level=1;
task2.state='complete';

let task3 = Object.create(task1);
task3.description='cleaning';
task3.due_date='2023-05-03';
task3.priority_level=2;
task3.state='Notcomplete';

 

let tasks=[];
tasks.push(task1,task2,task3)

//function addtask(){
   class task {
    constructor(description, due_date,priority_level,state){  
    this.description = description;
    this.due_date = due_date;
    this.priority_level=priority_level;
    this.status = state;
  }
  }
 
  let description;
  let due_date;
  let priority_level ;
  let  state; 
const prompt = require('prompt-sync')();
for(let x=0; x<1000; x++){ 

    console.log(`
Welcome to JS TODO-APP
***************************
Select an action:
1) Add a new task
2) List all tasks
3) List completed tasks
4) Mark the task as done
5) Delete a task
6) Sort tasks by the due date
7) Sort tasks by priority
8) Clear all tasks
***************************
`);
const choice=prompt('what is your choice?');
if(choice== 1){
 //addtask(); 
  description = prompt('description task?');
  due_date = prompt('due_date?');
  priority_level = prompt('priority_level?');
  state = prompt('What is your status?');
  tasks.push(new task(description,due_date,priority_level,state))
  console.log(tasks);
 }
  
 
if(choice==2){
console.log(tasks); 
}

else if(choice==3){
   for(var i=0; i<tasks.length; i++){
    if(tasks[i].state=='complete')
       console.log(`${tasks[i].description} is complete`);
    }
}

else if(choice==4){
  let c=tasks.filter((task)=>task.state=='complete');
  console.log(c);
}

else if(choice==5){
  tasks.splice(0,1);
  console.log(tasks)
}

else if(choice==6){
  function prioritylevel(a, b) {
    if (a.priority_level < b.priority_level) {
        return -1;
    }
    if (a.age > b.age) {
        return 1;
    }
    return 0;
};

tasks.sort(prioritylevel);
console.log(tasks);
}


else if(choice==7){
 function sortBydate(a,b){
    if (new Date(a.due_date) < new Date(b.due_date)){
        return -1;
    }
    else if (new Date(a.due_date) > new Date(b.due_date)) {
        return 1;
    }
}
tasks.sort(sortBydate);
console.log(tasks);
}

else if(choice==8){
  tasks=[]
  console.log(tasks)
}
}
