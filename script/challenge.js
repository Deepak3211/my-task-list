// define UI variables
const container = document.querySelector(".main");
const form = document.querySelector("#taskForm");
const taskInput = document.querySelector("#task");
const tasksList = document.querySelector("#tasks");
const filterTasks = document.querySelector("#filter");
const clearTasks = document.querySelector(".clear-tasks");
const toggleSwitch = document.querySelector('input[type = "checkbox"]');
const toggleIcon = document.querySelector("#toggle-icon");

// load all event listeners

loadEventListeners();

//load event listeners

function loadEventListeners() {

// DOM load event 

document.addEventListener('DOMContentLoaded', getTasks);



// Add task event
form.addEventListener("submit", addTask);

//Add task using btn

// inputBtn.addEventListener('click', runEvent);

// filter tasks

filterTasks.addEventListener("keyup", filter);


// clear single task
tasksList.addEventListener("click", delTask);

// clear all tasks

clearTasks.addEventListener("click", clrTasks);

// toggle switch

toggleSwitch.addEventListener("change", switchTheme);
}



// Add task
function addTask(e) {
if (taskInput.value !== "") {
myList();
} else {
alert("Add a task");
taskInput.value(Boolean);

}


// Store in ls

storeTask(taskInput.value);
// console.log('Hey there 😀');
taskInput.value = '';
e.preventDefault();
}

// add tasks after click

// function afterClick(e){

//   if(taskInput !== ''){

//     createElement();
//   }
//   // console.log('Hey there 😀');
//   e.preventDefault();

// }


function storeTask(task){
let tasks;
if(localStorage.getItem('tasks') === null)

{
tasks = [];

}
else {
tasks = JSON.parse(localStorage.getItem('tasks'));
}
tasks.push(task);

localStorage.setItem('tasks',JSON.stringify(tasks))
}

// get tasks from ls 

function getTasks(){
let tasks;
if(localStorage.getItem('tasks') === null){
tasks = [];
}
else {
tasks = JSON.parse(localStorage.getItem('tasks'));
}
tasks.forEach(task =>{
taskInput.value = task;
myList();
taskInput.value = '';

});
}

// filter tasks

function filter(e) {
const text = e.target.value.toLowerCase();
document.querySelectorAll(".taskList").forEach(function (task) {
const item = task.firstChild.textContent;
// console.log(item);
if (item.toLowerCase().indexOf(text) !== -1) {
task.style.display = "block";
} else {

task.style.display = "none";

}

});

// e.style.display = tasksList;
}


//line through tasks

tasksList.onclick = function (e) {
const target = e.target;
if (e.target.tagName === "LI") {
target.classList.toggle("done"); 
// target.remove();
// e.target.remove();
removeTaskFromLs(e.target);

filterTasks.value = '';

}

}



// clear single task

function delTask(e) {
if (e.target.parentElement.classList.contains("delete-item")) {
if (confirm("Are You Sure 😀")) {
// console.log(e);

e.target.parentElement.parentElement.remove();

removeTaskFromLs(e.target.parentElement.parentElement);
filterTasks.value = '';



}



}
// console.log(e);

// e.preventDefault();

}
// remove from ls

function  removeTaskFromLs(taskItem){

let tasks;
if(localStorage.getItem('tasks')=== null){

tasks = [];

}

else {

tasks = JSON.parse(localStorage.getItem('tasks'));
}
tasks.forEach(function(task, index){

if(taskItem.textContent === task){
tasks.splice(index, 1)
}
});
localStorage.setItem('tasks', JSON.stringify(tasks));
}


// clear all tasks

function clrTasks(e) {
if (confirm("Are You Sure 😁")) {
while (tasksList.firstChild) {
tasksList.removeChild(tasksList.firstChild);
}


}
// clr from ls 
clrFromLs();

}


function clrFromLs(){
localStorage.clear();
}


// switch theme dynamically

function switchTheme() {
// console.log(e.target.checked);
const target = container;
const targetExtend = target.classList.value;


targetExtend === 'main' ?  toggleIcon.children[0].textContent = "Dark Mode" : toggleIcon.children[0].textContent = "Light Mode";

targetExtend === 'main' ? toggleIcon.children[1].classList.replace("fa-sun", "fa-moon") : toggleIcon.children[1].classList.replace("fa-moon", "fa-sun");

targetExtend === 'main' ? 
localStorage.setItem('theme','dark'):
localStorage.setItem('theme','light');


target.classList.toggle("dark");
}

// if (target.classList.value === 'main') {
//   // console.log(target.classList.value);
// toggleIcon.children[0].textContent = "Dark Mode"
// toggleIcon.children[1].classList.replace("fa-sun", "fa-moon")


//   
//   // toggleIcon.children[1].classList.add('fa-moon');

//   target.classList.toggle("dark");
// } else {
// toggleIcon.children[0].textContent = "Light Mode"
//   // console.log(target.classList.value);
// toggleIcon.children[1].classList.replace("fa-moon", "fa-sun");

//   // toggleIcon.children[1].classList.add('fa-sun');
//   target.classList.toggle("dark");
// }


// check local storage for theme 
window.onload = checkTheme();
function checkTheme (){
const lsT = localStorage.getItem('theme');
if(lsT !== null && lsT === 'dark'){

// set the theme to body
switchTheme(); 

toggleSwitch.checked = true;

}
}


// create elements
function myList(e) {
const li = document.createElement("li");

// Adding a class
li.className = "taskList";

// create textNode and append to li

li.appendChild(document.createTextNode(taskInput.value));

// create new link element
const link = document.createElement("a");

// add class

link.className = "delete-item ";

// add icon html

link.innerHTML = '<i class = "fas fa-trash-alt"></i>';

// append lin to li

li.appendChild(link);

// append li to the ui

// taskList.appendChild(li);

// append li to ui
tasksList.appendChild(li);

// clear input
// taskInput.value = "";
}
