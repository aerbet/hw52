import React from 'react';

interface CardProps {
	suit: string;
	rank: string;
}
const Card: React.FC<CardProps> = ({ suit, rank }) => {
	const suitsSymbols: { [key: string]: string } = {
		diams: '♦',
		hearts: '♥',
		clubs: '♣',
		spades: '♠',
	};

	return (
		<span className={`card rank-${rank.toLowerCase()} ${suit}`}>
			<span className='rank'>{rank}</span>
			<span className='suit'>{suitsSymbols[suit]}</span>
		</span>
	);
};

export default Card;
