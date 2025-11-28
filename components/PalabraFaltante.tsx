import React, { useState, useEffect, useMemo } from 'react';

const WORDS_BY_LEVEL = {
  easy: { words: ['sol', 'luna', 'maíz', 'llama', 'inca'], count: 5, time: 10 },
  medium: { words: ['montaña', 'condor', 'quipu', 'charqui', 'ayllu', 'tambo', 'minka'], count: 7, time: 8 },
  hard: { words: ['pachamama', 'inti', 'runasimi', 'tawantinsuyo', 'chasqui', 'amauta', 'colca', 'andenes', 'apu'], count: 9, time: 6 },
};
type Level = keyof typeof WORDS_BY_LEVEL;

const shuffle = (array: any[]) => [...array].sort(() => Math.random() - 0.5);

const PalabraFaltante: React.FC = () => {
  const [level, setLevel] = useState<Level>('easy');
  const [gameState, setGameState] = useState<'idle' | 'showing' | 'guessing' | 'result'>('idle');
  const [wordList, setWordList] = useState<string[]>([]);
  const [missingWord, setMissingWord] = useState<string>('');
  const [options, setOptions] = useState<string[]>([]);
  const [message, setMessage] = useState('');
  const [score, setScore] = useState(0);

  const setupRound = () => {
    const { words, count } = WORDS_BY_LEVEL[level];
    const currentWords = shuffle(words).slice(0, count);
    const wordToMiss = currentWords[Math.floor(Math.random() * currentWords.length)];
    
    setWordList(currentWords);
    setMissingWord(wordToMiss);
    
    const otherOptions = shuffle(words.filter(w => !currentWords.includes(w))).slice(0, 3);
    setOptions(shuffle([...otherOptions, wordToMiss]));

    setGameState('showing');
    setMessage('');
  };

  useEffect(() => {
    if (gameState === 'showing') {
      const timer = setTimeout(() => {
        setGameState('guessing');
      }, WORDS_BY_LEVEL[level].time * 1000);
      return () => clearTimeout(timer);
    }
  }, [gameState, level]);

  const handleGuess = (guess: string) => {
    if (guess === missingWord) {
      setMessage('¡Correcto!');
      setScore(s => s + 1);
    } else {
      setMessage(`Casi... La palabra que faltaba era "${missingWord}"`);
    }
    setGameState('result');
    setTimeout(setupRound, 2000);
  };
  
  const startGame = () => {
    setScore(0);
    setupRound();
  };
  
  if (gameState === 'idle') {
    return (
       <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-lg w-full">
        <div className="flex space-x-2 mb-4">
            {(['easy', 'medium', 'hard'] as Level[]).map(l => (
                <button key={l} onClick={() => setLevel(l)} className={`px-3 py-1 text-sm rounded-full transition-colors ${level === l ? 'bg-stokyds-red text-white' : 'bg-gray-200 hover:bg-gray-300'}`}>
                    {l === 'easy' ? 'Fácil' : l === 'medium' ? 'Medio' : 'Difícil'}
                </button>
            ))}
        </div>
        <button onClick={startGame} className="mt-2 px-6 py-2 bg-stokyds-red text-white rounded-lg hover:bg-stokyds-red-dark transition-colors">Empezar a Jugar</button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg w-full text-center">
      <p className="w-full text-left text-lg font-semibold mb-2">Puntuación: {score}</p>
      {gameState === 'showing' && (
        <>
          <p className="mb-4">Memoriza estas palabras... ({WORDS_BY_LEVEL[level].time}s)</p>
          <div className="grid grid-cols-3 gap-2 w-full">
            {wordList.map(word => <div key={word} className="p-3 bg-stokyds-gray rounded-lg">{word}</div>)}
          </div>
        </>
      )}
      {(gameState === 'guessing' || gameState === 'result') && (
        <>
          <p className="mb-4">¿Qué palabra desapareció de la lista?</p>
          <div className="grid grid-cols-2 gap-4 w-full">
            {options.map(option => (
              <button
                key={option}
                onClick={() => handleGuess(option)}
                disabled={gameState === 'result'}
                className="p-4 bg-stokyds-gray rounded-lg text-lg font-bold text-stokyds-text hover:bg-stokyds-red hover:text-white transition-colors duration-200 disabled:opacity-50"
              >
                {option}
              </button>
            ))}
          </div>
        </>
      )}
      {message && <p className="mt-4 text-lg font-bold">{message}</p>}
    </div>
  );
};

export default PalabraFaltante;
