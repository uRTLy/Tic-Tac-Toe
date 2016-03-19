var computerChoice,
  playerChoice,
  fields = [0, 0, 0, 0, 0, 0, 0, 0, 0],
  grid = document.getElementsByClassName("grid");

var getUserInput = function() {
  var userChoice = prompt("X or O ?").toString().toUpperCase();

  if ((userChoice === "X") || (userChoice === "O")) {
    computerChoice = (userChoice === "X") ? computerChoice = "O" : computerChoice = "X";
    playerChoice = userChoice;
    clickHandler();
  } else {
    alert("You can pick only X or O ");
    setTimeout(getUserInput(), 4000);
  }
};
//////////////////////////////////////// HANDLE X OR O ON CLICK //////////////////////
function clickHandler() {

  for (var i = 0; i < grid.length; i++) {

    (function(index) {
      grid.item(i).onclick = function() {
        this.innerHTML = playerChoice;
        fields[index] = playerChoice;
        computerLogic(fields);
        console.log(fields);
      };
    })(i);

  } //// end of loop

}

function computerLogic(array) {

  function random() {

    var rand = Math.floor(Math.random() * 9);
    if ((array[rand] === playerChoice)||(array[rand] === computerChoice)) {
      random();
    } else if (array[rand] === 0) {
      array[rand] = computerChoice;
      grid.item(rand).innerHTML = computerChoice;
    }
    else{
      alert("END OF THE GAME!");
      console.log(array[rand]);
    }

  }
random();

}

getUserInput();
