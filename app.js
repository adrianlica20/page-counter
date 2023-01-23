let incrementBtn = document.getElementById('increment-btn');
let countEl = document.getElementById('count-el');
let count = parseInt(countEl.innerText);
let saveBtn = document.getElementById('save-btn');
let saveEl = document.getElementById('save-el');

let previousDays = [];

//Event Listener for practice
incrementBtn.addEventListener('click', () => {
  count += 1;
  countEl.textContent = count;
});

//Function used on the HTML document with the onclick attribute
function save() {
  let saveStop = count + ',';
  saveEl.textContent += saveStop;
  previousDays.push(count);
  console.log(previousDays);
  count = 0;
  countEl.textContent = 0;
}

function erase() {
  previousDays.pop();
  saveEl.textContent = 'Previous days: ' + previousDays;
}
