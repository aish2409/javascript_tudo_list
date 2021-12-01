
// function newElement() {
//   var li = document.createElement("li");
//   var inputValue = document.getElementById("myInput").value;
//   var t = document.createTextNode(inputValue);
//   li.appendChild(t);
//   if (inputValue === '') {
//     alert("You must write something!");
//   } else {
//     store(event);
//     document.getElementById("myUL").appendChild(li);
    
//   }
//   // debugger
// }
// function store(event) {
//   event.preventDefault();
//   var inputValue = document.getElementById("myInput").value;
//   const users = JSON.parse(localStorage.getItem("tudo")) || [];
//   const val = users.some(user => user.inputValue == inputValue);
//   if(!val) {
//     addUser(users);
//     alert("add list Successfully");
//     return;
//   } 
//   else{
//      alert(" already exists list");
//   }
// }
// function addUser(users) {
//   users.push(
//     document.getElementById("myInput").value
//   );
//   localStorage.setItem("tudo", JSON.stringify(users));  
// }

