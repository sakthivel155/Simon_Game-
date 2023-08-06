var buttonColours= ["red","blue","green","yellow"];
var gamePattern=[];
var userClickedPattern=[];
var level = 0;

//if any key press only one time for start the game  
$("html").keypress(function(){
  if(level === 0){
    nextSequence();
  }
  });
  
// get input from user click
$("#green").click(function(){    
  use = $("#green").attr("id");
  playAudio(use);
  mouseClickAnime(use);
userChosenColour(use);
});
$("#red").click(function(){    
 use = $("#red").attr("id");
 playAudio(use);
 mouseClickAnime(use);
userChosenColour(use);
});
$("#yellow").click(function(){    
use = $("#yellow").attr("id");
playAudio(use);
mouseClickAnime(use);
userChosenColour(use);
});
$("#blue").click(function(){    
use = $("#blue").attr("id");
playAudio(use);
mouseClickAnime(use);
userChosenColour(use);
});



function userChosenColour (use){
userClickedPattern.push(use);
checkSequence(userClickedPattern.length-1);
}  
 //Random color generator
   function nextSequence(){ 
    
    userClickedPattern= [] ; 
         $("h1").text("level "+(++level));
     var randomNumber=Math.floor(Math.random() * 4);
     var randomChosenColour=buttonColours[randomNumber];
     
     flash(randomChosenColour);  
     playAudio(randomChosenColour);
     gamePattern.push(randomChosenColour)  ;
  
     
    //  logArrayElementsWithDelay(gamePattern, 1000);
}
// audio sound generator
function playAudio(randomChosenColour){
    var audio = new Audio("./sounds/"+randomChosenColour+".mp3");
    audio.play();
    
}
// using click the button or pull the button style effects
function flash(randomChosenColour){
     $("#"+randomChosenColour).addClass("flash");
    setTimeout(function(){$("#"+randomChosenColour).removeClass("flash");}, 250);  
}
function mouseClickAnime(use){
    $("#"+use).addClass("pressed");
    setTimeout(function(){$("#"+use).removeClass("pressed");}, 100);
}


 
  //the first sequence is match or wrong

 function checkSequence(currentLevel){
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
  if (userClickedPattern.length === gamePattern.length){
    setTimeout(function () {
      nextSequence();
    }, 1000);
  }
} else {
  $("h1").text("Game Over, Press Any Key to Restart");
  playAudio("wrong");
  $("body").addClass("game-over");
  setTimeout(function () {
    $("body").removeClass("game-over");
  }, 300);
  restart();
}
}

function restart() {
  level = 0;
  gamePattern = [];
  started = false;
}




// function logArrayElementsWithDelay(array, delay) {
//   for (let i = 0; i < array.length; i++) {
//     setTimeout(() => {
//       flash(array[i]);                                                 
//     }, delay * i);
//   }
// }




