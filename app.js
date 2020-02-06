let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');

function getComputerChoice() {
  const choices = ['r', 'p', 's'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function converter(choice) {
  switch(choice) {
    case 'r':
      return "Rock";
    case 'p':
      return "Paper";
    case 's':
      return "Scissors";
  }
}

function win(userChoice, computerChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  result_p.innerHTML = `${converter(userChoice)}${smallUserWord} beats ${converter(computerChoice)}${smallCompWord}. You win!!`;
  userChoice_div.classList.add('green-glow');
  setTimeout(function() {userChoice_div.classList.remove('green-glow')}, 300);
}

function lose(userChoice, computerChoice) {
  computerScore++;
  computerScore_span.innerHTML = computerScore;
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  result_p.innerHTML = `${converter(computerChoice)}${smallCompWord} beats ${converter(userChoice)}${smallUserWord}. You lost idiot!!`;
userChoice_div.classList.add('red-glow');
setTimeout(function() {userChoice_div.classList.remove('red-glow')}, 300);
}

function draw(userChoice, computerChoice) {
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  result_p.innerHTML = `${converter(computerChoice)}${smallCompWord} draws with ${converter(userChoice)}${smallUserWord}. Waste of time smh :/`;
userChoice_div.classList.add('grey-glow');
setTimeout(function() {userChoice_div.classList.remove('grey-glow')}, 300);
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch(userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "sr":
    case "rp":
    case "ps":
      lose(userChoice, computerChoice);
      break;
    case "ss":
    case "rr":
    case "pp":
      draw(userChoice, computerChoice);
      break;
  }
}

function main() {

rock_div.addEventListener('click', function() {
  game("r");
})

paper_div.addEventListener('click', function() {
  game("p");
})

scissors_div.addEventListener('click', function() {
  game("s");
})

}

main();
