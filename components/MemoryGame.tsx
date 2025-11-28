import React, { useState, useEffect } from 'react';

const EMOTIONS = ['😀', '😢', '😮', '😠', '😂', '😍', '🤔', '😴', '🥳', '🤯', '😭', '😇'];
type Level = 'easy' | 'medium' | 'hard';
const CARDS_PER_LEVEL: Record<Level, number> = {
  easy: 4,
  medium: 6,
  hard: 8,
};

interface Card {
  id: number;
  emoji: string;
  isFlipped: boolean;
  isMatched: boolean;
}

const generateCards = (level: Level): Card[] => {
  const numPairs = CARDS_PER_LEVEL[level];
  const emojisForLevel = EMOTIONS.slice(0, numPairs);
  const allEmojis = [...emojisForLevel, ...emojisForLevel];
  const shuffled = allEmojis.sort(() => 0.5 - Math.random());
  return shuffled.map((emoji, index) => ({
    id: index,
    emoji,
    isFlipped: false,
    isMatched: false,
  }));
};

const MemoryGame: React.FC = () => {
  const [level, setLevel] = useState<Level>('easy');
  const [cards, setCards] = useState<Card[]>(() => generateCards(level));
  const [flippedCards, setFlippedCards] = useState<Card[]>([]);
  const [moves, setMoves] = useState(0);
  const [showWinMessage, setShowWinMessage] = useState(false);
  const [matchMessage, setMatchMessage] = useState('');

  useEffect(() => {
    if (flippedCards.length === 2) {
      setTimeout(checkForMatch, 800);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [flippedCards]);

  const handleCardClick = (clickedCard: Card) => {
    if (flippedCards.length === 2 || clickedCard.isFlipped || clickedCard.isMatched) return;

    const newCards = cards.map(card =>
      card.id === clickedCard.id ? { ...card, isFlipped: true } : card
    );

    setCards(newCards);
    setFlippedCards([...flippedCards, newCards.find(c => c.id === clickedCard.id)!]);
  };

  const showTemporaryMessage = (msg: string) => {
      setMatchMessage(msg);
      setTimeout(() => setMatchMessage(''), 1500);
  }

  const checkForMatch = () => {
    setMoves(moves + 1);
    const [firstCard, secondCard] = flippedCards;
    
    if (firstCard.emoji === secondCard.emoji) {
      const newCards = cards.map(card =>
        card.emoji === firstCard.emoji ? { ...card, isMatched: true } : card
      );
      setCards(newCards);
      showTemporaryMessage('¡Genial!');
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
      showTemporaryMessage('Sigue intentando...');
    }
    setFlippedCards([]);
  };

  const resetGame = (newLevel: Level) => {
    setLevel(newLevel);
    setCards(generateCards(newLevel));
    setFlippedCards([]);
    setMoves(0);
    setShowWinMessage(false);
  }

  return (
    <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-lg w-full">
      <h2 className="text-3xl font-bold text-stokyds-red mb-4">Memoria de Emociones</h2>
      <div className="flex space-x-2 mb-4">
        {(['easy', 'medium', 'hard'] as Level[]).map(l => (
            <button key={l} onClick={() => resetGame(l)} className={`px-3 py-1 text-sm rounded-full transition-colors ${level === l ? 'bg-stokyds-red text-white' : 'bg-gray-200 hover:bg-gray-300'}`}>
                {l === 'easy' ? 'Fácil' : l === 'medium' ? 'Medio' : 'Difícil'}
            </button>
        ))}
      </div>
      <div className={`grid grid-cols-4 gap-2 md:gap-4 mb-4`}>
        {cards.map(card => (
          <div
            key={card.id}
            onClick={() => handleCardClick(card)}
            className={`w-16 h-16 md:w-24 md:h-24 rounded-lg flex items-center justify-center text-3xl md:text-4xl cursor-pointer transition-transform duration-500 transform-style-3d ${
              card.isFlipped || card.isMatched ? 'rotate-y-180' : ''
            } ${card.isMatched ? 'opacity-50' : ''}`}
          >
            <div className="absolute w-full h-full backface-hidden bg-stokyds-red rounded-lg flex items-center justify-center text-white text-4xl">
              ?
            </div>
            <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-stokyds-gray rounded-lg flex items-center justify-center">
              {card.emoji}
            </div>
          </div>
        ))}
      </div>
      <div className="text-lg h-8">
        <p>Movimientos: {moves}</p>
        {matchMessage && <p className="absolute text-green-500 font-bold animate-ping">{matchMessage}</p>}
      </div>
      {showWinMessage && (
        <div className="text-center mt-4">
            <p className="text-2xl font-bold text-green-500">¡Excelente trabajo!</p>
            <button onClick={() => resetGame(level)} className="mt-2 px-4 py-2 bg-stokyds-red text-white rounded-lg hover:bg-stokyds-red-dark transition-colors">Jugar de Nuevo</button>
        </div>
      )}
    </div>
  );
};

const style = document.createElement('style');
style.innerHTML = `
  .transform-style-3d { transform-style: preserve-3d; }
  .rotate-y-180 { transform: rotateY(180deg); }
  .backface-hidden { backface-visibility: hidden; }
`;
document.head.appendChild(style);

export default MemoryGame;