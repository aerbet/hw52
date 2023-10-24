export class Card {
	constructor(public rank: string, public suit: string) {}
}

export class CardDeck {
	private cards: Card[] = [];

	constructor() {
		const suits = ['diams', 'hearts', 'clubs', 'spades'];
		const ranks = [
			'2',
			'3',
			'4',
			'5',
			'6',
			'7',
			'8',
			'9',
			'10',
			'J',
			'Q',
			'K',
			'A',
		];

		for (const suit of suits) {
			for (const rank of ranks) {
				this.cards.push(new Card(rank, suit));
			}
		}
	}

	getCard(): Card {
		const randomIndex = Math.floor(Math.random() * this.cards.length);
		return this.cards.splice(randomIndex, 1)[0];
	}

	getCards(howMany: number): Card[] {
		const cards: Card[] = [];
		for (let i = 0; i < howMany; i++) {
			cards.push(this.getCard());
		}
		return cards;
	}
}
