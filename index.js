// Your code goes here
let text = document.querySelector("#text")

document.addEventListener("DOMContentLoaded", function() {
  text.innerHTML = 'This is really cool!';
});

console.log(
  "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
);
