//your JS code here. If required.
const ele = document.getElementById("level");

let level = 0;
let current = ele;

while (current.parentElement) {
  level++;
  current = current.parentElement;
}

alert(`The level of the element is: ${level}`);