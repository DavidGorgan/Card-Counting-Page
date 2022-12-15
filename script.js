const cards = document.querySelectorAll('.card');

const picks = document.querySelectorAll('.pick');

const resultSpace = document.querySelector('.result-number');

let result = 0;
let cycle = 0;


for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener('click', () => {

    if (cards[i].classList.contains('lo')) {
      result++;
    }

    else if (cards[i].classList.contains('hi')) {
      result--;
    }


    for (let j = 4; j >= 1; j--) {
      picks[j].textContent = picks[j - 1].textContent;
    }
    if (cards[i].classList.contains('2')) {
      picks[0].textContent = '2';
    } else if (cards[i].classList.contains('3')) {
      picks[0].textContent = '3';
    } else if (cards[i].classList.contains('4')) {
      picks[0].textContent = '4';
    } else if (cards[i].classList.contains('5')) {
      picks[0].textContent = '5';
    } else if (cards[i].classList.contains('6')) {
      picks[0].textContent = '6';
    } else if (cards[i].classList.contains('7')) {
      picks[0].textContent = '7';
    } else if (cards[i].classList.contains('8')) {
      picks[0].textContent = '8';
    } else if (cards[i].classList.contains('9')) {
      picks[0].textContent = '9';
    } else if (cards[i].classList.contains('10')) {
      picks[0].textContent = '10';
    } else if (cards[i].classList.contains('J')) {
      picks[0].textContent = 'J';
    } else if (cards[i].classList.contains('Q')) {
      picks[0].textContent = 'Q';
    } else if (cards[i].classList.contains('K')) {
      picks[0].textContent = 'K';
    } else if (cards[i].classList.contains('A')) {
      picks[0].textContent = 'A';
    }

    resultSpace.textContent = result;
  })
}
