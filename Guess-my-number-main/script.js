'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct number';
console.log(
    (document.querySelector('.message').textContent = 'Correct number')
);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);

*/
let secretNumber = Number(Math.trunc(Math.random() * 20) + 1);

let score = 20;
let highscore = 0;

const displayMesaage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess);

  if (!guess) {
    displayMesaage('❌No Number⛔');
    // document.querySelector('.message').textContent = '❌No Number⛔';
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉Correct Number';
    displayMesaage('🎉Correct Number');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //when guess is wrong
  } else if (guess != secretNumber) {
    if (score > 1) {
      displayMesaage(guess > secretNumber ? '⏫Too high' : '⏬Too low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMesaage('You loose the game');
      document.querySelector('.score').textContent = 0;
    }

    //guess is too low
  }

  //   }else if (guess > secretNumber) {
  //      else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = ;
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'You loose the game';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Number(Math.trunc(Math.random() * 20) + 1);

  displayMesaage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});
