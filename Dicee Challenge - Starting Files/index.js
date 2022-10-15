var player1=Math.random()*6;
player1=Math.floor(player1)+1;
var player2=Math.random()*6;
player2=Math.floor(player2)+1;
var imageTo1="dice"+player1+".png";
var imageToInsert1="images/"+imageTo1;
document.querySelector("img.img1").setAttribute("src",imageToInsert1);
var imageTo2="dice"+player2+".png";
var imageToInsert2="images/"+imageTo2;
document.querySelector("img.img2").setAttribute("src",imageToInsert2);
if(player1>player2){
    document.querySelector("h1").innerHTML="Player 1 Wins!"
}
else if(player1<player2){
    document.querySelector("h1").innerHTML="Player 2 Wins!"
}
else{
    document.querySelector("h1").innerHTML="It's a Draw!"
}