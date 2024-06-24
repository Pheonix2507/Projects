var buttcolor = ["red","blue","green","yellow"];
var gamepat = [];
var user = [];
var intita = false;
var lvl = 0;

$(document).keypress(function() {
  if (!intita) {
    $("#level-title").text("Level " + lvl);
    nextseq();
    intita = true;
  }
});

$(".btn").click(function() {

  var userChosen = $(this).attr("id");
  user.push(userChosen);

  playsoun(userChosen);
  animate(userChosen);

  check(user.length-1)
});

function nextseq()
{
    user = [];
    lvl++;
    $("#level-title").text("Level " + lvl);
    var randnum = Math.floor(Math.random()*4);
    var chosen = buttcolor[randnum];
    gamepat.push(chosen);

    $("#"+chosen).fadeIn(100).fadeOut(100).fadeIn(100);
    playsoun(chosen);
}

function playsoun(name)
{
    var audio2 = new Audio("sounds/" + name + ".mp3");
    audio2.play();
}

function animate(curr) {
  $("#" + curr).addClass("pressed");

  setTimeout(function () {
    $("#" + curr).removeClass("pressed");
  }, 100);
}   

function start() {
  lvl = 0;
  gamepat = [];
  intita = false;
}

function check(curre) {

    if (gamepat[curre] === user[curre]) {
      if (user.length === gamepat.length){
        setTimeout(function () {
          nextseq();
        }, 1000);
      }
    } else {
      playsoun("wrong");
      $("body").addClass("game-over");
      $("#level-title").text("Game Over, Press Any Key to Restart");

      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

      start();
    }
}