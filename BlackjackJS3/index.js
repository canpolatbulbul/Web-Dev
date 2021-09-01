let cards = [];
let sum = 0;

let player = {
  name: "Redaxi",
  balance: 0,
};
let bal = document.querySelector("#balance");
bal.textContent = player.name + ": $" + player.balance;
let hasBlackjack = false;
let isAlive = false;
let message = "";
let messageEl = document.querySelector("#message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");
function startGame() {
  isAlive = true;
  let firstCard = randomCard();
  let secondCard = randomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}
function randomCard() {
  let a = Math.floor(Math.random() * 13 + 1);
  if (a === 1) {
    return 11;
  } else if (a > 10) {
    return 10;
  } else {
    return a;
  }
}
function renderGame() {
  if (sum <= 20) {
    message = "do you want to draw a new card";
    isAlive = true;
    hasBlackjack = false;
  } else if (sum === 21) {
    message = "wohoo a blackjack!";
    hasBlackjack = true;
  } else {
    message = "you lost :(";
    isAlive = false;
  }
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }

  sumEl.textContent = "Sum: " + sum;
  messageEl.textContent = message;
}
function newCard() {
  if (isAlive && !hasBlackjack) {
    let card1 = randomCard();
    sum += card1;
    cards.push(card1);
    renderGame();
  }
}
