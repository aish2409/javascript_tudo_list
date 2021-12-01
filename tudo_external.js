displayTask();
var myInput = document.getElementById("myInput"); 
var addtask = document.getElementById('addtask');

addtask.addEventListener("click",function()
{   
  userInput = myInput.value;
  if(userInput.trim()!= 0) {
    let task = localStorage.getItem("tudo");
    if(!task)  
    {
      tudoObject = [];
    }
    else
    {
      tudoObject = JSON.parse(task);
    }
    tudoObject.push(userInput);
    localStorage.setItem("tudo", JSON.stringify(tudoObject));
    alert("add task successfully");
    myInput.value = ""; 
  }
  displayTask();
})

function displayTask(){
  const task = localStorage.getItem("tudo");
  if(task === null)  
  {
    tudoObject = [];
  }
  else
  {
    tudoObject = JSON.parse(task);
  }
  let html = '';
  let addtasklist = document.getElementById("mytable");
  tudoObject.forEach((item, index) => {
    html += `<tr>
            <td>${item}</td>
            <td><button type="button" onclick="editTask(${index})"class="btn bg-dark text-white">
            <i class="fa fa-edit"></i> Edit</button></td>
            <td><button type="button" onclick="deleteitem(${index})" class="btn bg-dark text-white">
            <i class="fa fa-trash"></i>Delete</button></td>
            </tr>`;
  });
  addtasklist.innerHTML = html;
}

function editTask(index)
{
  let saveindex = document.getElementById("saveindex");
  let a = document.getElementById("addtask");
  let b = document.getElementById("savetaskbtn");
  saveindex.value = index;
  let task = localStorage.getItem("tudo");
  let tudoObject = JSON.parse(task);
  myInput.value = tudoObject[index];  
  a.style.display = "none";
  b.style.display = "block";
}

//save task
let b = document.getElementById("savetaskbtn");
b.addEventListener("click",function(){

  let a = document.getElementById("addtask");
  let task = localStorage.getItem("tudo");
  let tudoObject = JSON.parse(task);
  let saveindex = document.getElementById("saveindex").value;
  tudoObject[saveindex] = myInput.value;
  b.style.display = "none";
  a.style.display = "block";
  localStorage.setItem("tudo",JSON.stringify(tudoObject));
  myInput.value = ""; 
  displayTask();
  //alert("save task successfully");
})

//Delete task
function deleteitem(index)
{
  // debugger
  let d = confirm("Are you sure delete data");
  if(d){
    let task = localStorage.getItem("tudo");
    let tudoObject = JSON.parse(task);
    tudoObject.splice(index, 1);
    localStorage.setItem("tudo",JSON.stringify(tudoObject));
    displayTask();
  }
  else{
    alert("Data is not delete");
  }
}
