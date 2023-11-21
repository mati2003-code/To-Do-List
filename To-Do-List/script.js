const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');



listContainer.addEventListener('click', (e) => {
  if(e.target.tagName == 'LI') {
    e.target.classList.toggle('checked');
    savedata();
  } else if (e.target.tagName === 'SPAN') {
    e.target.parentElement.remove();
    savedata();
  }
}, false);


showList();
enterButton();

function enterButton() {
  inputBox.addEventListener('keydown', (event) => {
    if(event.key === 'Enter') {
      addTask();
    };
  });
};

function savedata() {
  localStorage.setItem('data', listContainer.innerHTML);
}

function showList() {
  listContainer.innerHTML = localStorage.getItem('data');
}

function addTask () {
  if (inputBox.value === '') {
    alert('The field cannot be empty');
  } else {
    let li = document.createElement('li');
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement('span');
    span.innerHTML = '\u00d7';
    li.appendChild(span);
  }
  inputBox.value = '';
  savedata();
}
