var body = document.body;
const form = document.querySelector('.form');
let value = document.querySelector('.inputtext');
const collection = document.querySelector('.collection');
const items = document.querySelector('.items');
const darkimage = document.querySelector('#darkimage');
const link = document.querySelector('.link');
const checkbox = document.querySelectorAll('.checkbox');
const listItems = document.querySelectorAll('.list-collection');
const completedButton = document.querySelector('.completed');
const activeButton = document.querySelector('.activee');
const all = document.querySelector('.all');
const clearButton = document.querySelector('.clearCompleted');

//list item childrens

const listedItems = collection.childNodes;
let li = document.querySelectorAll('.list-collection');


//event listeners
form.addEventListener('submit', formSubmit);
darkimage.addEventListener('click', changeImage);
collection.addEventListener('click', chageList);
completedButton.addEventListener('click', completedTasks);
activeButton.addEventListener('click', activeList);
all.addEventListener('click', allListItems);
clearButton.addEventListener('click', clearCompleted);

//formSubmit
function formSubmit(e) {
  const inputValue = value.value;
   if (inputValue === '') {
     alert('Please enter a value')
   }
   
   else {
    collection.innerHTML += `
    <li class = "list-collection">
    <label class="checkbox" id = "label">
      <span class="checkbox__input">
        <input type="checkbox" name="checkbox">
        <span class="checkbox__control">
          <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9"><path fill="none" stroke="#FFF" stroke-width="2" d="M1 4.304L3.696 7l6-6"/></svg>
        </span>
      </span>
    </label>
    ${inputValue}
    <a href="#">
    <img src="./images/icon-cross.svg" alt="Cross" class = "delete"> </a>
  </li>`
   }
    //getting the child elements from the collection

   collection.childElementCount
  let count =  collection.childElementCount;
   items.textContent = count;
   form.reset();
  e.preventDefault();
  
}

//imagechange
var toggle = false;
function changeImage() {
    if (toggle === true) {
       darkimage.src  = './images/icon-sun.svg';
    } else {
      darkimage.src = '/images/icon-moon.svg';
    }
    toggle = !toggle; 
    body.classList.toggle("toggle");
}

//delete li from the collection
function chageList(e) {
   if (e.target.classList.contains('delete')) {
     e.target.parentElement.parentElement.remove();
   }
    
   //for checkmark
   if (e.target.classList.contains('checkbox')) {
     const li = e.target.parentElement;
     li.classList.toggle('line-through')
   }
}

//completed button

function completedTasks(e) {
  li.forEach(function(item) {
   if  (item.classList.contains('line-through')) {
     item.style.display = "flex";
     console.log("hello");
   }
   else {
     item.style.display = "none"
   }
   })
   e.preventDefault();
}
//active button
function activeList(e) {
  li.forEach(function(item) {
   if  (!item.classList.contains('line-through')) {
     item.style.display = "flex";
   }
   else {
     item.style.display = "none"
   }
   });
   e.preventDefault();
  };

//allitems

function allListItems(e) {
  li.forEach(function(item) {
    if  (item.classList.contains('list-collection')) {
      item.style.display = "flex";
      console.log("hello");
    }
    })
    e.preventDefault();
  }

//clearButton

function clearCompleted(e) {
  li.forEach(function(item) {
    if  (item.classList.contains('line-through')) {
    item.style.display = 'none';
    }
   e.preventDefault(e);
})
}


