
var randomNumber1=Math.floor(Math.random()*6+1);
var randomNumber2=Math.floor(Math.random()*6+1);
var randomImage1="dice" + randomNumber1 +".png"
var randomImage2="dice" + randomNumber2 +".png"
var randomImagesource1="images/" +randomImage1;
var randomImagesource2="images/" +randomImage2;
var image1=document.querySelectorAll("img")[0];
var image2=document.querySelectorAll("img")[1];
image1.setAttribute("src",randomImagesource1);
image2.setAttribute("src",randomImagesource2);


if (randomNumber1 > randomNumber2) {
    document.getElementById("Heading").innerHTML ="Player 1 Wins";
}
else if (randomNumber1 < randomNumber2) {
    document.getElementById("Heading").innerHTML ="Player 2 Wins";
}
else{
    document.getElementById("Heading").innerHTML ="Draw";
}

