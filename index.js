const form = document.querySelector('.form');
let value = document.querySelector('.inputtext');
const collection = document.querySelector('.collection');
const items = document.querySelector('.items');
const darkimage = document.querySelector('#darkimage');
var body = document.body;





//event listeners
form.addEventListener('submit', formSubmit);
darkimage.addEventListener('click', changeImage);


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
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="#494C6B" fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/></svg>
    </a>
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