import React, { useState, useEffect, useCallback } from 'react';

const WORDS_BY_LEVEL = {
  easy: ['sol', 'luna', 'gato', 'perro', 'casa', 'agua'],
  medium: ['montaña', 'estrella', 'familia', 'escuela', 'amigo'],
  hard: ['extraordinario', 'responsabilidad', 'comunicación', 'inteligencia'],
};
type Level = keyof typeof WORDS_BY_LEVEL;

const PalabrasFugaces: React.FC = () => {
  const [level, setLevel] = useState<Level>('easy');
  const [word, setWord] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [isShowing, setIsShowing] = useState(false);
  const [message, setMessage] = useState('');
  const [score, setScore] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const nextWord = useCallback(() => {
    const words = WORDS_BY_LEVEL[level];
    const newWord = words[Math.floor(Math.random() * words.length)];
    setWord(newWord);
    setInputValue('');
    setMessage('');
    setIsShowing(true);
    setTimeout(() => setIsShowing(false), 1000); // Word shown for 1 sec
  }, [level]);

  const startGame = () => {
    setIsPlaying(true);
    setScore(0);
    nextWord();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.toLowerCase() === word.toLowerCase()) {
      setScore(s => s + 1);
      setMessage('¡Correcto!');
    } else {
      setMessage(`Casi... La palabra era "${word}"`);
    }
    setTimeout(nextWord, 1500);
  };

  if (!isPlaying) {
    return (
      <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-lg w-full">
        <h2 className="text-2xl font-bold text-stokyds-red mb-4">Palabras Fugaces</h2>
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
    <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-lg w-full text-center">
        <div className="w-full flex justify-between items-center mb-4">
            <p className="text-lg font-semibold">Puntuación: {score}</p>
            <button onClick={() => setIsPlaying(false)} className="px-3 py-1 text-sm bg-gray-200 hover:bg-gray-300 rounded-full">Salir</button>
        </div>
        <div className="h-24 w-full bg-stokyds-gray rounded-lg flex items-center justify-center mb-4">
            {isShowing ? (
                <p className="text-4xl font-bold text-stokyds-text animate-pulse">{word}</p>
            ) : (
                <p className="text-xl text-gray-500">¿Qué palabra viste?</p>
            )}
        </div>
        <form onSubmit={handleSubmit} className="w-full">
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="w-full p-3 text-center rounded-lg border-2 border-stokyds-text focus:border-stokyds-red focus:ring-stokyds-red"
                placeholder="Escribe la palabra aquí"
                disabled={isShowing}
                autoFocus
            />
        </form>
        {message && <p className="mt-4 text-lg font-bold">{message}</p>}
    </div>
  );
};

export default PalabrasFugaces;