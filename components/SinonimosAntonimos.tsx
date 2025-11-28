import React, { useState, useEffect, useRef } from 'react';

const WORD_DATA = {
    'feliz': { synonyms: ['contento', 'alegre', 'dichoso', 'jubiloso'], antonyms: ['triste', 'infeliz', 'apenado'] },
    'grande': { synonyms: ['enorme', 'gigante', 'inmenso', 'vasto'], antonyms: ['pequeño', 'diminuto', 'chico'] },
    'rápido': { synonyms: ['veloz', 'ligero', 'raudo', 'presuroso'], antonyms: ['lento', 'pausado', 'tranquilo'] },
    'bonito': { synonyms: ['hermoso', 'bello', 'lindo', 'precioso'], antonyms: ['feo', 'horrible', 'desagradable'] },
};
type Word = keyof typeof WORD_DATA;

const SinonimosAntonimos: React.FC = () => {
    const [gameState, setGameState] = useState<'idle' | 'playing' | 'end'>('idle');
    const [gameType, setGameType] = useState<'synonyms' | 'antonyms'>('synonyms');
    const [currentWord, setCurrentWord] = useState<Word>('feliz');
    const [timeLeft, setTimeLeft] = useState(60);
    const [inputValue, setInputValue] = useState('');
    const [foundWords, setFoundWords] = useState<string[]>([]);
    const timerRef = useRef<number | null>(null);

    const startTimer = () => {
        timerRef.current = setInterval(() => {
            setTimeLeft(t => t - 1);
        }, 1000);
    };
    
    useEffect(() => {
        if (timeLeft <= 0) {
            if (timerRef.current) clearInterval(timerRef.current);
            setGameState('end');
        }
    }, [timeLeft]);

    const startGame = (type: 'synonyms' | 'antonyms') => {
        const words = Object.keys(WORD_DATA) as Word[];
        setGameType(type);
        setCurrentWord(words[Math.floor(Math.random() * words.length)]);
        setFoundWords([]);
        setTimeLeft(60);
        setInputValue('');
        setGameState('playing');
        startTimer();
    };
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const cleanedInput = inputValue.trim().toLowerCase();
        if (!cleanedInput) return;

        const validWords = WORD_DATA[currentWord][gameType];
        if (validWords.includes(cleanedInput) && !foundWords.includes(cleanedInput)) {
            setFoundWords(prev => [...prev, cleanedInput]);
        }
        setInputValue('');
    };

    const restart = () => {
        if (timerRef.current) clearInterval(timerRef.current);
        setGameState('idle');
    }

    if (gameState === 'idle' || gameState === 'end') {
         return (
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg w-full text-center">
                {gameState === 'end' && (
                    <>
                        <h2 className="text-2xl font-bold text-stokyds-red mb-2">¡Tiempo!</h2>
                        <p className="text-xl mb-4">Encontraste {foundWords.length} {gameType === 'synonyms' ? 'sinónimos' : 'antónimos'}.</p>
                    </>
                )}
                <p className="mb-4">Elige un modo de juego:</p>
                <div className="flex gap-4">
                    <button onClick={() => startGame('synonyms')} className="px-6 py-2 bg-stokyds-red text-white rounded-lg hover:bg-stokyds-red-dark transition-colors">Sinónimos</button>
                    <button onClick={() => startGame('antonyms')} className="px-6 py-2 bg-stokyds-red text-white rounded-lg hover:bg-stokyds-red-dark transition-colors">Antónimos</button>
                </div>
                 {gameState === 'end' && <button onClick={restart} className="mt-4 text-sm text-gray-600 hover:underline">Volver a empezar</button>}
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg w-full text-center">
            <div className="w-full flex justify-between items-center mb-4">
                <p className="font-bold">Escribe {gameType === 'synonyms' ? 'sinónimos' : 'antónimos'} de:</p>
                <p className="text-2xl font-bold text-stokyds-red">{currentWord}</p>
                <p className="text-xl font-bold">Tiempo: {timeLeft}s</p>
            </div>
             <form onSubmit={handleSubmit} className="w-full mb-4">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="w-full p-3 text-center rounded-lg border-2 border-stokyds-text focus:border-stokyds-red focus:ring-stokyds-red"
                    placeholder="Escribe una palabra y presiona Enter"
                    autoFocus
                />
            </form>
            <div className="w-full p-3 bg-stokyds-gray rounded-lg min-h-[6rem]">
                <p className="font-semibold text-left mb-2">Palabras encontradas: {foundWords.length}</p>
                <div className="flex flex-wrap gap-2">
                    {foundWords.map(word => (
                        <span key={word} className="px-2 py-1 bg-green-200 text-green-800 rounded-full text-sm">{word}</span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SinonimosAntonimos;
