const userInput = document.querySelector("#userInput");
const playBtn = document.querySelector("#playBtn");
const resetBtn = document.querySelector("#resetBtn");
const chances = document.querySelector("#chances");
const choice = document.querySelector("#choice");
const result = document.querySelector("#result");
let count = 5;
let randomNum = Math.floor(Math.random() * (50 - 1) + 1);

function guessNumber() {
  const input = Number(userInput.value);
  console.log(randomNum);
  choice.textContent = `You chose ${input}`;
  if (input === randomNum) {
    result.textContent = `Correct! Answer is ${input}`;
  } else if (input > randomNum) {
    result.textContent = `Wrong! Number is too high`;
    count--;
    chances.textContent = `You have ${count} chances left!`;
  } else if (input < randomNum) {
    result.textContent = `Wrong! Number is too low`;
    count--;
    chances.textContent = `You have ${count} chances left!`;
  } else {
    result.textContent = `Please enter a valid number!`;
  }
  if (count === 0) {
    chances.textContent === "You have 0 chances left. Try Again";
    playBtn.style.display = "none";
  }
}

function resetGame() {
  userInput.value = 0;
  result.textContent = "";
  chances.textContent = "You have 5 chances";
  choice.textContent = "";
  playBtn.style.display = "block";
}

playBtn.addEventListener("click", guessNumber);
resetBtn.addEventListener("click", resetGame);
