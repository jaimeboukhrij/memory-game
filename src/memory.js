class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0


  }

  shuffleCards() {
    console.log(this.cards)
    if (!this.cards) {
      return undefined
    } else {

      this.cards.sort(() => Math.random() - 0.5)
      return this.cards
    }

  }

  checkIfPair(card1, card2) {
    this.pairsClicked += 1
    if (card1 == card2) {
      this.pairsGuessed += 1
      return true
    }
    return false
  }

  checkIfFinished() {
    console.log(this.cards.length / 2)
    if (this.pairsGuessed === 12) {
      return true
    } else {
      return false
    }
  }
}
