////////////////////////////////////////////////////////////
const container = document.querySelector('.todo-container');
const form = document.getElementById('addForm');
const deletebtns = document.querySelectorAll('.delete');
const inputsAmount = document.getElementById('data_item');
const allBtn = document.getElementById('allbtn');
const activeBtn = document.getElementById('activebtn');
const completedBtn = document.getElementById('completedbtn');
const clearBtn = document.getElementById('clearcompleted');
const selectBtn = document.getElementById('btn_select');

updateCount();

// change this
container.addEventListener('click', taskDone);
container.addEventListener('click', deleteItem);

form.addEventListener('submit', addItem);

//filter events

allBtn.addEventListener('click', allfilter);
activeBtn.addEventListener('click', activefilter);
completedBtn.addEventListener('click', completedfilter);

//clear

clearBtn.addEventListener('click', clearList);

function addItem(e) {
  e.preventDefault();
  const input = document.getElementById('elementInput');

  const li = document.createElement('li');
  const select = document.createElement('button');
  const deletebtn = document.createElement('button');
  const p = document.createElement('p');
  if (input.value == '') {
    return;
  } else {
    select.className = 'btn';
    select.setAttribute('id', 'btn_selection');
    li.appendChild(select);
    li.className = 'item active';
    li.draggable = 'true';
    p.className = 'p';
    p.textContent = input.value;
    li.appendChild(p);

    container.appendChild(li);
    deletebtn.className = 'delete';
    deletebtn.innerHTML = `<img src='./images/icon-cross.svg' alt='' class='del' />`;
    li.appendChild(deletebtn);
    updateCount();
    input.value = '';

    // updateCount(totalLi);
  }
}

function deleteItem(e) {
  if (e.target.classList.contains('del')) {
    let li = e.target.parentElement.parentElement;
    container.removeChild(li);
    updateCount();
  }
}

function taskDone(e) {
  if (e.target.classList.contains('btn')) {
    // Traverse the DOM to find the 'p' element within the same 'li'
    const para = e.target.parentElement.querySelector('.p');
    const li = para.parentElement;
    console.log(li);
    // if para es true
    if (para) {
      // Check the current style (textDecoration) and toggle it
      if (para.style.textDecoration === 'line-through') {
        li.classList.remove('completed');
        para.classList.remove('clase');
        para.style.textDecoration = 'none'; // Remove the line-through style
      } else {
        para.style.textDecoration = 'line-through'; // Add the line-through style
        para.classList.add(); // Add the line-through style
        li.classList.remove('active');
        li.classList.add('completed');
        para.classList.add('clase');
      }
    }
  }
}

function updateCount(liTotal) {
  const liTotal1 = document.querySelectorAll('.item');
  const itemShow = document.getElementById('data_item');
  itemShow.textContent = liTotal1.length;
}

//  eliminar  items  con clase completed
function clearList() {
  // obtener ul contenedor
  // elementos del contenedor padre
  const li = document.querySelectorAll('.item');
  li.forEach((element) => {
    if (element.classList.contains('completed')) {
      container.removeChild(element);
    }
  });
  updateCount();
}

//filter functions

function allfilter() {
  const li = document.querySelectorAll('.item');
  li.forEach((item) => {
    if (
      item.classList.contains('active') ||
      item.classList.contains('completed')
    ) {
      item.classList.remove('hidden');
    }
  });
  updateCount();
}
function activefilter() {
  const li = document.querySelectorAll('.item');
  li.forEach((item) => {
    if (item.classList.contains('active')) {
      item.classList.remove('hidden');
    } else if (item.classList.contains('completed')) {
      item.classList.add('hidden');
    }
  });
  updateCount();
}

function completedfilter() {
  const li = document.querySelectorAll('.item');
  li.forEach((item) => {
    if (item.classList.contains('completed')) {
      item.classList.remove('hidden');
    } else if (item.classList.contains('active')) {
      item.classList.add('hidden');
    }
  });
  updateCount();
}

const bgdesktop = document.getElementById('bg-desktop');
const bgdesktop2 = document.getElementById('bg-mobile');
const default1 = document.getElementById('default');

function changee(actualTheme) {
  bgdesktop.srcset = `./images/bg-desktop-${actualTheme}.jpg`;
  bgdesktop2.srcset = `./images/bg-mobile-${actualTheme}.jpg`;
  default1.srcset = `./images/bg-mobile-${actualTheme}.jpg`;
  console.log(actualTheme);
}

// changee();

const light = document.getElementById('light');
const dark = document.getElementById('dark');
let actualTheme = 'light';

light.addEventListener('click', function (e) {
  if (actualTheme == 'light') {
    document.documentElement.classList.add('dark');
    document.documentElement.classList.remove('light');
    light.style.display = 'none';
    dark.style.display = 'block';
    actualTheme = 'dark';
    changee(actualTheme);
  }
});
dark.addEventListener('click', function (e) {
  if (actualTheme == 'dark') {
    document.documentElement.classList.remove('dark');
    document.documentElement.classList.add('light');
    dark.style.display = 'none';
    light.style.display = 'block';
    actualTheme = 'light';
    changee(actualTheme);
  }
});
