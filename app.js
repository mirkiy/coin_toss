const message = document.querySelector(".message");
const buttons = document.querySelectorAll("button");
console.log(buttons);

function tossCoin(e) {
    console.log(e.target.innerText)
}

for (let i = 0; i < buttons.length; i++) {
  console.log(buttons[i]);
  buttons[i].addEventListener("click", tossCoin);
}
