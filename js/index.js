/* eslint-disable arrow-parens */
const cards = [
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' },
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' }
];

const memoryGame = new MemoryGame(cards);

window.addEventListener('load', event => {
  let html = '';
  memoryGame.cards.forEach(pic => {
    html += `<div class="card" data-card-name="${pic.name}">`;
    html += `<div class="back" name="${pic.img}"></div>`;
    html += `<div class="front" style="background: url(img/${pic.img}) no-repeat"></div>`;
    html += `</div>`;
  });

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;

  const clicked = document.getElementById("pairs-clicked");
  const guessed = document.getElementById("pairs-guessed");

  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {

      card.children[0].classList.toggle('front');
      card.children[0].classList.toggle('back');
      card.children[1].classList.toggle('front');
      card.children[1].classList.toggle('back');

      memoryGame.pickedCards.push(card);

      if (memoryGame.pickedCards.length === 2) {
        const firstCard = memoryGame.pickedCards[0];
        const secondCard = memoryGame.pickedCards[1];

        const cardName1 = firstCard.getAttribute("data-card-name");
        const cardName2 = secondCard.getAttribute("data-card-name");

        const validate = memoryGame.checkIfPair(cardName1, cardName2);

        if (!validate) {

          setTimeout(() => {
            firstCard.children[0].classList.toggle('front');
            firstCard.children[0].classList.toggle('back');
            firstCard.children[1].classList.toggle('front');
            firstCard.children[1].classList.toggle('back');

            secondCard.children[0].classList.toggle('front');
            secondCard.children[0].classList.toggle('back');
            secondCard.children[1].classList.toggle('front');
            secondCard.children[1].classList.toggle('back');

          }, 2000);

          memoryGame.pickedCards = [];
          
        } else {
          firstCard.children[1].classList.add("blocked");
          secondCard.children[1].classList.add("blocked");
          memoryGame.pickedCards = [];
        }
        
        clicked.innerHTML = memoryGame.pairsClicked;
        guessed.innerHTML = memoryGame.pairsGuessed;

      }

    });
  });
});
