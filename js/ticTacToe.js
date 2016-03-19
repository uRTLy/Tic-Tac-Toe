var main = function() {
  var counter = [false, false, false, false, false, false, false, false, false];
  grid = document.getElementsByClassName("grid");
  var choice = prompt("Choose X or O").toString();






  function computerTurn() {


    var computerChoice;

    if (choice.toUpperCase() === "X") {
      computerChoice = "O";
    } else if (choice.toUpperCase() === "O") {
      computerChoice = "X";
    }

    for (var i = 0; i < grid.length; i++) {
      if (!grid.item(i).hasChildNodes()) {
        grid.item(i).innerHTML = "<p>" + computerChoice + "</p>";
        break;
      }
    }

  }





  function checkWinner() {
    var result = counter[0] === true && counter[1] === true && counter[2] === true ||
      counter[3] === true && counter[4] === true && counter[5] === true ||
      counter[6] === true && counter[7] === true && counter[8] === true ||
      counter[0] === true && counter[3] === true && counter[6] === true ||
      counter[1] === true && counter[4] === true && counter[7] === true ||
      counter[2] === true && counter[5] === true && counter[8] === true ||
      counter[0] === true && counter[4] === true && counter[8] === true ||
      counter[2] === true && counter[4] === true && counter[6] === true ? true : false;

    if (result === true) {
      


    }


  }

  function update() {

    for (var i = 0; i < grid.length; i++) {

      if (grid.item(i).hasChildNodes()) {
        counter[i] = true;
        console.log(counter);
      }
      checkWinner();

    }

  }


  var clickHandler = function() {
    if (!this.hasChildNodes()) {
      this.innerHTML = "<p>" + choice + "</p>";
      update();
      computerTurn();
    }

  };

  for (var i = 0; i < grid.length; i++) {
    grid.item(i).onclick = clickHandler;
  }

};

main();
