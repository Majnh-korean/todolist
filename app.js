
const TODOLIST = "TODOLIST"
let data = [
{
    task:'Run 2km',
    is_complete:true
}
];


const saveData = (data)=>{
    localStorage.setItem(TODOLIST,JSON.stringify(data));
}

if(!localStorage.getItem(TODOLIST)){
    saveData(data);
}


const addTask=(new_task)=>{
    let newdata ;
    newdata = loadData();
    newdata= [...newdata,new_task];
    saveData(newdata);
    
}

const loadData=()=>{
    let data ;
    data=JSON.parse(localStorage.getItem(TODOLIST));
    data=data?data:[];
    return data ;
};



const createTaskItem = (task,is_complete,index)=>{
    return `<li class="task-item" index = ${index} is-complete=${is_complete}>
    <span onclick="markTaskComplete(${index})" class="task">${task}</span>
    <div class="task-action">
      <button onclick='pushEditTask(${index})'>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="20"
          height="20"
          x="0"
          y="0"
          viewBox="0 0 682.667 682.667"
          style="enable-background: new 0 0 512 512"
          xml:space="preserve"
          class=""
        >
          <g>
            <defs>
              <clipPath id="a" clipPathUnits="userSpaceOnUse">
                <path
                  d="M0 512h512V0H0Z"
                  fill="currentColor"
                  opacity="1"
                  data-original="#000000"
                ></path>
              </clipPath>
            </defs>
            <g
              clip-path="url(#a)"
              transform="matrix(1.33333 0 0 -1.33333 0 682.667)"
            >
              <path
                d="m0 0 63.78-63.778c11.683-11.682 11.672-30.846-.001-42.518L-256.853-426.92l-162.609-56.311 56.312 162.607L-42.519 0C-30.826 11.693-11.69 11.688 0 0Z"
                style="
                  stroke-width: 20;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                  stroke-miterlimit: 22.926;
                  stroke-dasharray: none;
                  stroke-opacity: 1;
                "
                transform="translate(429.46 493.232)"
                fill="none"
                stroke="currentColor"
                stroke-width="20"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="22.926"
                stroke-dasharray="none"
                stroke-opacity=""
                data-original="#000000"
                class=""
                opacity="1"
              ></path>
              <path
                d="M0 0a59.238 59.238 0 0 1-35.267 35.266"
                style="
                  stroke-width: 20;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                  stroke-miterlimit: 22.926;
                  stroke-dasharray: none;
                  stroke-opacity: 1;
                "
                transform="translate(74.183 38.916)"
                fill="none"
                stroke="currentColor"
                stroke-width="20"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="22.926"
                stroke-dasharray="none"
                stroke-opacity=""
                data-original="#000000"
                class=""
                opacity="1"
              ></path>
              <path
                d="m0 0 97.883-97.882"
                style="
                  stroke-width: 20;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                  stroke-miterlimit: 22.926;
                  stroke-dasharray: none;
                  stroke-opacity: 1;
                "
                transform="translate(348.723 446.599)"
                fill="none"
                stroke="currentColor"
                stroke-width="20"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="22.926"
                stroke-dasharray="none"
                stroke-opacity=""
                data-original="#000000"
                class=""
                opacity="1"
              ></path>
              <path
                d="m0 0 97.883-97.883"
                style="
                  stroke-width: 20;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                  stroke-miterlimit: 22.926;
                  stroke-dasharray: none;
                  stroke-opacity: 1;
                "
                transform="translate(313.367 411.244)"
                fill="none"
                stroke="currentColor"
                stroke-width="20"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="22.926"
                stroke-dasharray="none"
                stroke-opacity=""
                data-original="#000000"
                class=""
                opacity="1"
              ></path>
              <path
                d="m0 0 48.857-7.883 1.295-44.782 44.783-1.295 7.882-48.858"
                style="
                  stroke-width: 20;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                  stroke-miterlimit: 22.926;
                  stroke-dasharray: none;
                  stroke-opacity: 1;
                "
                transform="translate(69.307 172.125)"
                fill="none"
                stroke="currentColor"
                stroke-width="20"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="22.926"
                stroke-dasharray="none"
                stroke-opacity=""
                data-original="#000000"
                class=""
                opacity="1"
              ></path>
              <path
                d="m0 0-221.103-221.102"
                style="
                  stroke-width: 20;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                  stroke-miterlimit: 22.926;
                  stroke-dasharray: none;
                  stroke-opacity: 1;
                "
                transform="translate(339.267 385.344)"
                fill="none"
                stroke="currentColor"
                stroke-width="20"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="22.926"
                stroke-dasharray="none"
                stroke-opacity=""
                data-original="#000000"
                class=""
                opacity="1"
              ></path>
              <path
                d="m0 0-221.102-221.102"
                style="
                  stroke-width: 20;
                  stroke-linecap: round;
                  stroke-linejoin: round;
                  stroke-miterlimit: 22.926;
                  stroke-dasharray: none;
                  stroke-opacity: 1;
                "
                transform="translate(385.344 339.267)"
                fill="none"
                stroke="currentColor"
                stroke-width="20"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="22.926"
                stroke-dasharray="none"
                stroke-opacity=""
                data-original="#000000"
                class=""
                opacity="1"
              ></path>
            </g>
          </g>
        </svg>
      </button>
      <button onclick="deleteTask(this,${index})">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="512"
          height="512"
          x="0"
          y="0"
          viewBox="0 0 512 512"
          style="enable-background: new 0 0 512 512"
          xml:space="preserve"
          class=""
        >
          <g>
            <path
              d="M256 512C114.84 512 0 397.16 0 256S114.84 0 256 0s256 114.84 256 256-114.84 256-256 256zm0-475.43C135.008 36.57 36.57 135.008 36.57 256S135.008 475.43 256 475.43 475.43 376.992 475.43 256 376.992 36.57 256 36.57zm0 0"
              fill="currentColor"
              stroke="currentColor"
              opacity="1"
              data-original="#000000"
              class=""
            ></path>
            <path
              d="M347.43 365.715c-4.68 0-9.36-1.785-12.93-5.36L151.645 177.5c-7.145-7.145-7.145-18.715 0-25.855 7.14-7.141 18.714-7.145 25.855 0L360.355 334.5c7.145 7.145 7.145 18.715 0 25.855a18.207 18.207 0 0 1-12.925 5.36zm0 0"
              fill="currentColor"
              stroke="currentColor"
              opacity="1"
              data-original="#000000"
              class=""
            ></path>
            <path
              d="M164.57 365.715c-4.68 0-9.355-1.785-12.925-5.36-7.145-7.14-7.145-18.714 0-25.855L334.5 151.645c7.145-7.145 18.715-7.145 25.855 0 7.141 7.14 7.145 18.714 0 25.855L177.5 360.355a18.216 18.216 0 0 1-12.93 5.36zm0 0"
              fill="currentColor"
              stroke="currentColor"
              opacity="1"
              data-original="#000000"
              class=""
            ></path>
          </g>
        </svg>
      </button>
    </div>
 </li>`
}



const renderTasks = () => {
  let data, ulTaskHtml,taskResult,countComplete;
  taskResult = document.querySelector('.task-result');
  countComplete=0;
  const ulTask = document.querySelector('.task');
  data = loadData();
  ulTaskHtml = data.map((element, index) => {
    if(element.is_complete==true) countComplete++;
    return createTaskItem(element.task, element.is_complete, index);
  });
  ulTask.innerHTML = ulTaskHtml.join(''); // Thêm .join('') để chuyển mảng thành chuỗi HTML
  if(countComplete>0){
  taskResult.textContent=`${countComplete} task completed`;
  }
  else{
    taskResult.textContent=``;
  }
};
const markTaskComplete = (index)=>{
  let data ;
  data = loadData();
  data[index].is_complete=data[index].is_complete == true?false:true;
  saveData(data);
 
  renderTasks();
}
const deleteTask = (element,index)=>{
  let data;
  let delete_confirm = confirm('bạn có muốn xóa công việc này không')
  if(delete_confirm==false) return false;
  data = loadData();

  data.splice(index,1);
  saveData(data)
  renderTasks();
}
const editTask = (task, index)=>{
  let data = loadData();
  const btn = document.querySelector('#add_task button');
  btn.innerText='ADD TASK';
  data[index].task = task;

  saveData(data);
}
const pushEditTask = (index)=>{
  let data = loadData();
  const btn = document.querySelector('#add_task button');
  const task = document.querySelector('#task');
  task.setAttribute('index',index);
  task.value = data[index].task ;
  btn.innerText = "EDIT TASK"
}
const formAddTask = document.forms.add_task;
formAddTask.addEventListener('submit',(e)=>{
    let new_task ;
    const task = document.querySelector('#task');
    const index = task.getAttribute('index');
if(index){
  
  editTask(task.value,index);
  task.removeAttribute('index');
}
else{
  
    if(task.value.length > 2){
      new_task = {
        task:task.value,
        is_complete:false
      };
      addTask(new_task);
}
else {
  alert(`Enter Your Task`);
  return false
}
  
    
    }
  
    renderTasks();
      task.value="";
    e.preventDefault();
});


document.addEventListener('keyup',(e)=>{
  const task = document.querySelector('#task');
  const btn = document.querySelector('#add_task button');
  if(e.which == 27){
    task.value = "";
    btn.innerText="ADD TEXT";
    task.removeAttribute('index');
  }
});


renderTasks(); // Gọi hàm renderTasks trước để render các phần tử
