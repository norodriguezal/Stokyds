import React, { useState, useEffect } from 'react';

const LITERARY_PAIRS = [
  { part1: 'En un lugar de La Mancha...', part2: '...de cuyo nombre no quiero acordarme.' },
  { part1: 'Puedo escribir los versos más tristes...', part2: '...esta noche.' },
  { part1: 'Caminante, no hay camino...', part2: '...se hace camino al andar.' },
  { part1: 'La vida es sueño...', part2: '...y los sueños, sueños son.' },
];

interface Card {
  id: number;
  text: string;
  pairId: number;
  isFlipped: boolean;
  isMatched: boolean;
}

const generateCards = (): Card[] => {
  const cards: Omit<Card, 'id'>[] = [];
  LITERARY_PAIRS.forEach((pair, index) => {
    cards.push({ text: pair.part1, pairId: index, isFlipped: false, isMatched: false });
    cards.push({ text: pair.part2, pairId: index, isFlipped: false, isMatched: false });
  });
  
  const shuffled = cards.sort(() => 0.5 - Math.random());
  
  return shuffled.map((card, index) => ({ ...card, id: index }));
};

const ParejasLiterarias: React.FC = () => {
  const [cards, setCards] = useState<Card[]>(generateCards);
  const [flippedCards, setFlippedCards] = useState<Card[]>([]);
  const [moves, setMoves] = useState(0);
  const [showWinMessage, setShowWinMessage] = useState(false);

  useEffect(() => {
    if (flippedCards.length === 2) {
      setTimeout(checkForMatch, 1200);
    }
  }, [flippedCards]);
  
  const handleCardClick = (clickedCard: Card) => {
    if (flippedCards.length === 2 || clickedCard.isFlipped || clickedCard.isMatched) return;

    const newCards = cards.map(card =>
      card.id === clickedCard.id ? { ...card, isFlipped: true } : card
    );

    setCards(newCards);
    setFlippedCards([...flippedCards, newCards.find(c => c.id === clickedCard.id)!]);
  };

  const checkForMatch = () => {
    setMoves(moves + 1);
    const [firstCard, secondCard] = flippedCards;
    
    if (firstCard.pairId === secondCard.pairId) {
      const newCards = cards.map(card =>
        card.pairId === firstCard.pairId ? { ...card, isMatched: true } : card
      );
      setCards(newCards);
      if (newCards.every(card => card.isMatched)) {
        setShowWinMessage(true);
      }
    } else {
      const newCards = cards.map(card =>
        card.id === firstCard.id || card.id === secondCard.id
          ? { ...card, isFlipped: false }
          : card
      );
      setCards(newCards);
    }
    setFlippedCards([]);
  };
  
  const resetGame = () => {
    setCards(generateCards());
    setFlippedCards([]);
    setMoves(0);
    setShowWinMessage(false);
  }

  return (
    <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-lg w-full">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 mb-4">
        {cards.map(card => (
          <div
            key={card.id}
            onClick={() => handleCardClick(card)}
            className={`w-36 h-36 md:w-40 md:h-40 rounded-lg flex items-center justify-center text-center p-2 cursor-pointer transition-transform duration-500 transform-style-3d ${
              card.isFlipped || card.isMatched ? 'rotate-y-180' : ''
            } ${card.isMatched ? 'opacity-50' : ''}`}
          >
            <div className="absolute w-full h-full backface-hidden bg-stokyds-red rounded-lg flex items-center justify-center text-white text-4xl p-2">
              ?
            </div>
            <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-stokyds-gray rounded-lg flex items-center justify-center text-sm font-semibold">
              {card.text}
            </div>
          </div>
        ))}
      </div>
       <div className="text-lg">
        <p>Movimientos: {moves}</p>
      </div>
      {showWinMessage && (
        <div className="text-center mt-4">
            <p className="text-2xl font-bold text-green-500">¡Excelente! Has unido todas las citas.</p>
            <button onClick={resetGame} className="mt-2 px-4 py-2 bg-stokyds-red text-white rounded-lg hover:bg-stokyds-red-dark transition-colors">Jugar de Nuevo</button>
        </div>
      )}
      <style>{`
        .transform-style-3d { transform-style: preserve-3d; }
        .rotate-y-180 { transform: rotateY(180deg); }
        .backface-hidden { backface-visibility: hidden; }
      `}</style>
    </div>
  );
};

export default ParejasLiterarias;
