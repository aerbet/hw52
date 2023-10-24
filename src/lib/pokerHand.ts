import { Card } from './cardClasses';

export class PokerHand {
	constructor(private cards: Card[]) {}

	getOutcome(): string {
		const rankCounts = this.getRankCounts();
		const suitCounts = this.getSuitCounts();

		if (Object.values(suitCounts).includes(5)) {
			const sortedRanks = this.cards.map((card) => card.rank);
			sortedRanks.sort((a, b) => this.rankValue(a) - this.rankValue(b));
			if (sortedRanks.join('') === '10JQKA') {
				return 'Роял-флэш';
			}
		}

		if (
			Object.values(suitCounts).includes(5) &&
			this.isConsecutive(this.cards.map((card) => card.rank))
		) {
			return 'Стрит-флэш';
		}

		if (Object.values(rankCounts).some((count) => count === 4)) {
			return 'Каре';
		}

		if (
			Object.values(rankCounts).includes(3) &&
			Object.values(rankCounts).includes(2)
		) {
			return 'Фулл-хаус';
		}

		if (Object.values(suitCounts).includes(5)) {
			return 'Флэш';
		}

		if (this.isConsecutive(this.cards.map((card) => card.rank))) {
			return 'Стрит';
		}

		if (Object.values(rankCounts).includes(3)) {
			return 'Тройка';
		}

		const pairsCount = Object.values(rankCounts).filter(
			(count) => count === 2
		).length;
		if (pairsCount === 2) {
			return 'Две пары';
		}

		if (pairsCount === 1) {
			return 'Одна пара';
		}

		return 'Старшая карта';
	}

	private getRankCounts() {
		const rankCounts: { [key: string]: number } = {};
		for (const card of this.cards) {
			if (rankCounts[card.rank]) {
				rankCounts[card.rank]++;
			} else {
				rankCounts[card.rank] = 1;
			}
		}
		return rankCounts;
	}

	private getSuitCounts() {
		const suitCounts: { [key: string]: number } = {};
		for (const card of this.cards) {
			if (suitCounts[card.suit]) {
				suitCounts[card.suit]++;
			} else {
				suitCounts[card.suit] = 1;
			}
		}
		return suitCounts;
	}

	private rankValue(rank: string) {
		const order = [
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
		return order.indexOf(rank);
	}

	private isConsecutive(ranks: string[]) {
		ranks.sort((a, b) => this.rankValue(a) - this.rankValue(b));
		for (let i = 1; i < ranks.length; i++) {
			if (this.rankValue(ranks[i]) - this.rankValue(ranks[i - 1]) !== 1) {
				return false;
			}
		}
		return true;
	}
}
