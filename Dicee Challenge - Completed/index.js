
var randomNumber1= Math.floor(Math.random() * 6) + 1;

var randomNumber2 = Math.floor(Math.random() *6) + 1;

var firsPne='';
var sndPne='';



function editNames() {

   firsPne = prompt("Enter the first player name : ")
   sndPne = prompt("Enter the second player name : ")

   document.querySelectorAll('.p1')[0].innerHTML=firsPne;
   document.querySelectorAll('.p1')[1].innerHTML=sndPne;


}




function rolltheDice(){


document.querySelector(".img1").setAttribute('src',"images/dice"+randomNumber1+'.png');


document.querySelector('.img2').setAttribute("src",'images/dice'+randomNumber2+'.png');

if (randomNumber1>randomNumber2){
  document.querySelector('h1').innerHTML=' 🚩 Play 1 Wins!';
}

else if (randomNumber2>randomNumber1) {
  document.querySelector('h1').innerHTML=' Play 2 Wins! 🚩';
}

else {
  document.querySelector('h1').innerHTML='Draw!';
}

}
