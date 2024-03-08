/* eslint-disable */
import "./style.css";

window.onload = function() {
  //write your code here

  let numbersCard = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];
  let sticksCard = [
    { Symbol: "♦", color: "red" },
    { Symbol: "♥", color: "red" },
    { Symbol: "♠", color: "black" },
    { Symbol: "♣", color: "black" }
  ];

  document.querySelector(".number").innerHTML =
    numbersCard[Math.floor(Math.random() * numbersCard.length)];
  let sticksCard2 = sticksCard[Math.floor(Math.random() * sticksCard.length)];
  document.querySelectorAll(".topstick").forEach((elem, index) => {
    elem.innerHTML = sticksCard2.Symbol;
    elem.style.color = sticksCard2.color;
  });
};
