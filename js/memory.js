/* eslint-disable lines-between-class-members */
/* eslint-disable class-methods-use-this */
class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    this.shuffleCards();
  }
  shuffleCards() {
    for (let i = this.cards.length - 1; i >= 0; i -= 1) {
      const hero1 = Math.floor(Math.random() * (i + 1));
      const hero2 = this.cards[i];
      this.cards[i] = this.cards[hero1];
      this.cards[hero1] = hero2;
    }
  }
  checkIfPair(card1, card2) {
    this.pairsClicked += 1;
    if (card1 === card2) {
      this.pairsGuessed += 1;
      this.isFinished();
      return true;
    }
    return false;
  }
  isFinished() {
    return this.pairsGuessed === this.cards.length / 2;
  }
}
