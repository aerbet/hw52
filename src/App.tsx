import React, { useState } from 'react';
import Card from './Card/gameCard';
import { CardDeck } from './lib/cardClasses';
import { PokerHand } from './lib/pokerHand';

function App() {
    const [cards, setCards] = useState([]);
    const [outcome, setOutcome] = useState<string | null>(null);

    const handleDealCards = () => {
        const deck = new CardDeck();
        const dealtCards = deck.getCards(5);
        setCards(dealtCards);

        const hand = new PokerHand(dealtCards);
        const result = hand.getOutcome();
        setOutcome(result);
    };

    return (
        <div>
            {outcome && (
                <div className="outcome">
                    <p>{outcome}</p>
                </div>
            )}

            {cards.length > 0 && (
                <div className="playingCards faceImages">
                    {cards.map((card, index) => (
                        <Card key={index} rank={card.rank} suit={card.suit} />
                    ))}
                </div>
            )}

            <button onClick={handleDealCards}>Раздать карты</button>
        </div>
    );
}

export default App;