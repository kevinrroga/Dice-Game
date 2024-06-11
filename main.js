//Player 1
var randNr1 = Math.floor(Math.random()*6) +1; 
var random_src1 = "images/dice"+ randomNumber1 +".png"; //first dice image
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", random_src1);

//Player2
var randNr2 = Math.floor(Math.random()*6) +1; //function for creating a random number
var random_src2 = "images/dice"+ randNr2 +".png"; //second dice image
var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src", random_src2);

//Determining the winner
if(randNr1>randNr2){
  document.querySelector("h1").innerHTML = "Player 1 wins! Hooray!"
}
else if(randomNumber2>randomNumber1){
  document.querySelector("h1").innerHTML = "Player 2 wins! Hooray!"
}
else {
  document.querySelector("h1").innerHTML = "Draw! :("
}