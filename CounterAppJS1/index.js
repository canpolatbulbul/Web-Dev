let count = 0;
let counter = document.getElementById("zero");
let saveText = document.getElementById("entries");
function increment() {
  count++;
  counter.textContent = count;
}
function save() {
  let text = " " + count + " -";
  saveText.textContent += text;
  counter.textContent = 0;
  count = 0;
}
