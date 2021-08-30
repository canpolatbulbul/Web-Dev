let firstCard = 6;
let secondCard = 11;
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let hasBlackjack = false;
let isAlive = true;
let message = "";
let messageEl = document.querySelector("#message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");
function startGame() {
  renderGame();
}

function renderGame() {
  if (sum <= 20) {
    message = "do you want to draw a new card";
  } else if (sum === 21) {
    message = "wohoo a blackjack!";
    hasBlackjack = true;
  } else {
    message = "you lost :(";
    isAlive = false;
  }
  cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1];
  sumEl.textContent = "Sum: " + sum;
  messageEl.textContent = message;
}
function newCard() {
  let card1 = 5;
  sum += card1;
  cards.push(card1);
  renderGame();
}
