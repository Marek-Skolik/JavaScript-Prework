function clearMessage() {
  document.getElementById('messages').innerHTML = '';
}

function playGame(playerInput) {

  function clearMessage() {
    document.getElementById('messages').innerHTML = '';
  }

  function getMoveName(argMoveId) {
    if (argMoveId == 1) {
      return 'kamień';
    } else if (argMoveId == 2) {
      return 'papier';
    } else if (argMoveId == 3) {
      return 'nożyce';
    }
    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
  }

  let randomNumber = Math.floor(Math.random() * 3 + 1);

  console.log('Wylosowana liczba to: ' + randomNumber);

  let computerMove = getMoveName(randomNumber);

  printMessage('Ruch komputera: ' + computerMove);

  /*let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');*/

  console.log('Gracz wpisał: ' + playerInput);

  let playerMove = getMoveName(playerInput);

  printMessage('Mój ruch: ' + playerMove);

  if ((computerMove == 'kamień' && playerMove == 'papier') ||
    (computerMove == 'nożyce' && playerMove == 'kamień') ||
    (computerMove == 'papier' && playerMove == 'nożyce')) {
    printMessage('Wygrywasz!');
  } else if (computerMove == playerMove) {
    printMessage('Remis!');
  } else {
    printMessage('Przegrywasz!');
  }

  function displayResult(argComputerMove, argPlayerMove) {
    if ((argComputerMove == 'kamień' && argPlayerMove == 'papier') ||
      (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') ||
      (argComputerMove == 'papier' && argPlayerMove == 'nożyce')) {
      printMessage('Wygrywasz!');
    } else if (argComputerMove == argPlayerMove) {
      printMessage('Remis!');
    } else {
      printMessage('Przegrywasz!');
    }
  }

  displayResult(computerMove, playerMove);
  clearMessage();
  playGame(playerInput);

}

document.getElementById('play-rock').addEventListener('click', function () {
  playGame(1); { }
});

document.getElementById('play-paper').addEventListener('click', function () {
  playGame(2); { }
});

document.getElementById('play-scissors').addEventListener('click', function () {
  playGame(3); { }
});

