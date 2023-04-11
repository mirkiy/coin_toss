const message = document.querySelector(".message");
const buttons = document.querySelectorAll("button");

const coinArray = ["Heads", "Tails"];
let score = [0, 0];
let maxCoinToss = 5;

function tossCoin(e) {
  let playerGuess = e.target.innerText;
  let computerToss = Math.floor(Math.random() * coinArray.length);
  let computerGuess = coinArray[computerToss];
  message.innerHTML = "Computer Selected " + computerGuess + "<br>";
  let output;
  if (playerGuess === computerGuess) {
    output = "You Win ";
    score[0]++;
  } else {
    output = "Computer Wins ";
    score[1]++;
  }
  if (score[0] + score[1] == 5) {
    message.innerHTML +=
      "Game over!" + "<br> You: " + score[0] + " " + "Computer: " + score[1];
    buttons.forEach((btn) => {
      btn.disabled = true;
    });
    let playAgainBtn = document.createElement("button");
    playAgainBtn.setAttribute("class", "playAgainBtn");
    playAgainBtn.textContent = "Play again";
    let mainDiv = document.querySelector(".mainDiv");
    mainDiv.appendChild(playAgainBtn);
    playAgainBtn.addEventListener("click", function () {
      location.reload();
    });
  } else {
    message.innerHTML +=
      output + "<br> You: " + score[0] + " " + "Computer: " + score[1];
  }
}

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", tossCoin);
}
