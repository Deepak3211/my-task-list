/*
let val;
val = document;
val = document.all;
val = document.all[2];
val = document.all.length; // property
val = document.body;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;



// Select stuff without using selectors
val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].method;
val = document.forms[0].action;

// links 
val = document.links;
val = document.links[2];
val = document.links[2].className;
val = document.links[2].classList; // gives list of classes
val = document.links[2].classList[1]; // gives list of classes


// Images
val = document.images;
val = document.scripts;
val = document.scripts[2].getAttribute('src');


let scripts = document.scripts;
let scriptsArr = Array.from(scripts);

scriptsArr.forEach(function(script){
console.log(script);
})
console.log(val);


*/




/************************************
 * 
 * 
// DOM SELECTORS FOR SINGLE ELEMENT
* 
* 😀
*/


/*************************************** 
 * 
 * 
 * 
// getElementByID
let val;
val = document.getElementById('task-title');

val.id;
val.className;
val.style.background = 'red';
val.style.color = 'teal';
val.style.padding = '5px';
val.textContent = 'TaskList';
val.innerText = 'TaskList';
val.innerHTML = '<strong>Task</strong>';






console.log(val);

*/


/************************************
 * 
 * 
 * 
 * querySelector
 * 
 * 😃
 * 
 


let val;
val = document.querySelector('li');
val = document.querySelector(' ul li'); // nested
val = document.querySelector(' li:last-child'); // pseudo selector
val = document.querySelector(' li:nth-child(3'); // pseudo selector
val = document.querySelector(' li:nth-child(1)'); // pseudo selector
val.style.color = 'teal';
val.textContent = '😀'

console.log(val);

*/



/*******************************************
 * 
 * 
 * DOM selectors for multiple elements
 * 
 * 😀
 


let val;
val = document.getElementsByClassName('collection-item');
val[2].style.color = 'teal';
const  items = document.querySelector('ul').getElementsByClassName('collection-item');



console.log(val);


*/

/**
 * 
 * 
 * 
 * Get elements by tag name
 * 
 

let val = document.getElementsByTagName('li');

val[3].style.color = 'teal';



// convert html collection into an array

val = Array.from(val);
val.reverse();
val.forEach(function(li,index){


  li.textContent = `${index}: 😀`;
  console.log(li);
})
console.log(val);

*/


/**
 * 
 * 
 * 
 * 
 * 
 * querySelectorAll
 * 
 * 
 

const items = document.querySelectorAll('li');

items.forEach(function(item,i){
  item.textContent = ` ${i} : 😃 hey`
  item.style.color = 'teal';
});

const liOdd = document.querySelectorAll('li:nth-child(odd');
liOdd.forEach(function(items, index){

  items.textContent = 'Hey there !!!!'
  items.style.color = 'red';
});

const liEven = document.querySelectorAll('li:nth-child(even');



liEven.forEach(function(items, index){

  items.textContent = 'Hey 😃!!!!😂'
  items.style.color = 'blue';
})
console.log(items);

*/





/**
 * 
 * 




 DOM Traversing
 


 let val;
 const list = document.querySelector('ul');
 const liItems = document.querySelector('li');

 val = liItems;
 val =list;

 // get child nodes 

 val = list.childNodes;


 // get children 

 val = list.children;
 val = list.children[3];
 list.children[2].textContent = '😀';

val = list.children[3].children;
list.children[3].children[0].id ='hey';
val = list.children[3].children[0];


val = list.firstChild;
val = list.firstElementChild;

val = list.childElementCount;


// Get parent node

val = liItems.parentNode;
val = liItems.parentElement;
val = liItems.parentElement.parentElement;


val = liItems.nextSibling;
val = liItems.nextElementSibling;


val = liItems.previousSibling;
val = liItems.previousElementSibling;



 console.log(val);

 */





 /***
  * 
  * 
  * 
  * 
  * 
  * 
  * 
  Create element 😃

  *********
  


const li = document.createElement('li');

// add class 

li.className = 'collection-item';

// add id 
li.id = 'new-item';


// add attribute
li.setAttribute('title', 'New-Item');

//add textNode

li.appendChild(document.createTextNode('Hey there 😃'));


// create new link element

const link = document.createElement('a');

// add class

link.className = 'delete-item secondary-content';



// add icons html

link.innerHTML = '<i class = "fa fa-remove"></i>'

// append link into li
li.appendChild(link);
// append li as child to ul
const ul = document.querySelector('ul');
ul.append(li);
console.log(li);



*************************************/





/************
 * 
 * 
 * 
 * 
 * 
 * 
 * Remove and replace elements
 * 💯
 

// Replace element

//create new element
const newHeading = document.createElement('h2');

// add id 
newHeading.id = 'task-title';

// new text node 

newHeading.appendChild(document.createTextNode('My Tasks 😀'));

// get the old heading
const oldHeading = document.querySelector('#task-title');

// we need parent now 
 const card = document.querySelector('.card-action');

// now replace the headings
card.replaceChild(newHeading, oldHeading);


console.log(newHeading);


// remove elements

const lis = document.querySelectorAll('li');

const list = document.querySelector('ul');


// remove item

lis[0].remove();

// remove child elements

list.removeChild(lis[3]);

// classes and attributes

const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];


let val;

// classes


val = link.className;
val = link.classList;

link.classList.add('test');
link.classList.remove('test');

val = link;


// attributes

val = link.getAttribute('href');
val = link.setAttribute('href', 'xyz.com');
val = link.hasAttribute('href');

console.log(val);


*/













/*****************************
 * 
 * 
 * 
 * 
 * Event listeners and event object
 * 
 * 
 

document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e){
  let val;
  val =  e;

  // event target element
  val = e.target;
  val = e.target.id;
  val = e.target.className;
  val = e.target.classList;


  // event type
  val = e.type;

  val = e.timeStamp;

  console.log(val);

  e.preventDefault();
}


*/

/**************
 * 
 * 
 * 
 * Mouse events
 

 const clearBtn = document.querySelector('.clear-tasks');
 const card = document.querySelector('.card');
 const heading = document.querySelector('h5');


// click
// clearBtn.addEventListener('click', runEvent);


// double click
// clearBtn.addEventListener('dblclick', runEvent);


// Mouse down
// clearBtn.addEventListener('mousedown', runEvent);


// Mouse up
// clearBtn.addEventListener('mouseup', runEvent);

// mouse enter 

// clearBtn.addEventListener('mouseenter', runEvent);

// mouse leave

// clearBtn.addEventListener('mouseleave', runEvent);


// mouse over
// clearBtn.addEventListener('mouseover', runEvent);

//mouse out
// clearBtn.addEventListener('mouseout', runEvent);


// Mousemove
// card.addEventListener('mousemove', runEvent)




 // Event handler
 function runEvent (e)
{
  console.log(`Event Type : ${e.type}`);

  heading.textContent = `MouseX ${e.offsetX} MouseY : ${e.offsetY}`;
  document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 50)`;
  e.preventDefault();
}
 

*/




/*************
 * 
 * keyboard and input events
 * 
 * 
 * 
 */

/**
 * 
 * 
 * keyboard and input events
 

 const form = document.querySelector('form');
 const taskInput = document.querySelector('#task');
 const heading  = document.querySelector('h5');
//  form.addEventListener('submit', runEvent);
 

 taskInput.value = '';


 //keydown
//  taskInput.addEventListener('keydown', runEvent);

// keyup
//  taskInput.addEventListener('keyup', runEvent);

// keypress
//  taskInput.addEventListener('keypress', runEvent);


// focus
 taskInput.addEventListener('focus', runEvent);

 // blur 

 taskInput.addEventListener('blur',runEvent);

 // cut
 taskInput.addEventListener('cut', runEvent);

 //paste

 taskInput.addEventListener('paste', runEvent);

 // input
 taskInput.addEventListener('input', runEvent);



 function runEvent(e){
   console.log(`Event type : ${e.type}`);

  //  console.log(e.target.value);
  //  heading.innerText = e.target.value;
  //  console.log(taskInput.value);
   e.preventDefault();
 }

 









 // Event bubbling and delegation

 //event bubbling

//  document.querySelector('.card-title').addEventListener('click',()=>{
//    console.log('card-title 😀');
//  });

//  document.querySelector('.card-content').addEventListener('click',()=>{
//   console.log('card-content 😀');
// });

// document.querySelector('.card').addEventListener('click',()=>{
//   console.log('card 😀');
// });


// document.querySelector('.col').addEventListener('click',()=>{
//   console.log('col 😀');
// });

// without event delegation


// const delItem = document.querySelector('.delete-item');
// delItem.addEventListener('click', dItem);



// function dItem (e){
//   console.log('😀 del');
//   e.preventDefault();
// }

// event delegation


document.body.addEventListener('click', delItem);

function delItem(e){

  if(e.target.parentElement.classList.contains('delete-item')){
    e.target.parentElement.parentElement.remove();
  }
}

*/



/*****************
 * 
 * 
 * local storage and session storage
 

// Set local storage

localStorage.setItem('name', 'john');



// remove from local storage

// localStorage.removeItem('name');


//get from storage

const name = localStorage.getItem('name');

// clear 
localStorage.clear();
console.log(name);
 

 document.querySelector('form').addEventListener('submit',(e)=>{
   const task = document.querySelector('#task').value;
  //  console.log(task);

  let tasks;
  if(localStorage.getItem('tasks')=== null){
    tasks = [];

  } 
  else {

    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  alert('😄');


  e.preventDefault();

 });
*/
