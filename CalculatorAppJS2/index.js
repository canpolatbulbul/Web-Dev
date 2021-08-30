let num1 = 8;
let num2 = 2;

document.getElementById("num1").textContent = num1;
document.getElementById("num2").textContent = num2;

let sum = document.getElementById("sum");

function add() {
  let result = num1 + num2;
  sum.textContent = "Sum: " + result;
}
function sub() {
  let result = num1 - num2;
  sum.textContent = "Sum: " + result;
}
function multi() {
  let result = num1 * num2;
  sum.textContent = "Sum: " + result;
}
function divide() {
  let result = num1 / num2;
  sum.textContent = "Sum: " + result;
}
