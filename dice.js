function fnRoll() {
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  document.getElementsByClassName("img1")[0].setAttribute("src", "images/dice" + randomNumber1 + ".png");

  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  document.getElementsByClassName("img2")[0].setAttribute("src", "images/dice" + randomNumber2 + ".png");

  if (randomNumber1 > randomNumber2) document.getElementsByTagName("h1")[0].innerHTML = "Player 1 Wins!";
  else if (randomNumber2 > randomNumber1) document.getElementsByTagName("h1")[0].innerHTML = "Player 2 Wins!";
  else document.getElementsByTagName("h1")[0].innerHTML = "Draw!";

  document.getElementById("heading").onclick = null;
  document.getElementById("heading").classList.remove("activeH1");
  document.getElementById("heading").style.cursor = "default";
  document.getElementById("rollAgain").style.display = "block";
}
