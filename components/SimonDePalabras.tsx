import React, { useState, useEffect, useCallback } from 'react';

const WORD_BANK_BY_STORY = {
    'Los Hermanos Ayar': ['Inti', 'Tamputoco', 'Ayar', 'bastón', 'oro', 'Cusco', 'Manco Cápac', 'Tahuantinsuyo'],
    'El Zorro y el Cuy': ['Atoq', 'cuy', 'astucia', 'queso', 'lago', 'ichu', 'centinela', 'ingenio'],
    'La Burra y el Toro': ['Fiero', 'Juana', 'trapiche', 'caña', 'molino', 'capataz', 'carnicero', 'esfuerzo'],
    'El Mago de Tambor': ['Pariallá', 'tambor', 'mago', 'mendigo', 'respeto', 'laguna', 'humildad', 'castigo'],
    'Otorongo el Orgulloso': ['Jaguar', 'selva', 'vanidad', 'mentira', 'fosa', 'tiranía', 'orgullo', 'manchas'],
    'La Garza Blanca': ['Blanca', 'Ucayali', 'pescado', 'espinas', 'envidia', 'brujo', 'plumas', 'transformación'],
    'El Loro y la Vizcacha': ['Parlanchín', 'ofensas', 'alcaldesa', 'maíz', 'mágico', 'silencio', 'sabiduría', 'amonestación'],
    'El Cóndor y la Muchacha': ['Killa', 'cóndor', 'Picaflor', 'barranco', 'sapos', 'libertad', 'alas', 'cumbres']
};

const STORY_NAMES = Object.keys(WORD_BANK_BY_STORY);
const LEVELS = {
  easy: { sequenceLength: 2, pause: 1200, optionsCount: 6 },
  medium: { sequenceLength: 3, pause: 1000, optionsCount: 6 },
  hard: { sequenceLength: 4, pause: 800, optionsCount: 8 },
};
type Level = keyof typeof LEVELS;

const shuffle = (array: any[]) => [...array].sort(() => Math.random() - 0.5);

const SimonDePalabras: React.FC = () => {
    const [level, setLevel] = useState<Level>('easy');
    const [gameState, setGameState] = useState<'idle' | 'setupRound' | 'watching' | 'playing' | 'gameOver'>('idle');
    const [sequence, setSequence] = useState<string[]>([]);
    const [playerInputIndex, setPlayerInputIndex] = useState(0);
    const [currentOptions, setCurrentOptions] = useState<string[]>([]);
    const [currentTheme, setCurrentTheme] = useState('');
    const [score, setScore] = useState(0);
    const [message, setMessage] = useState('');
    const [spokenWord, setSpokenWord] = useState<string | null>(null);
    const [feedback, setFeedback] = useState<{ word: string, status: 'correct' | 'incorrect' } | null>(null);

    const speak = useCallback((text: string) => {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'es-ES';
        window.speechSynthesis.speak(utterance);
    }, []);

    const startGame = () => {
        setScore(0);
        setSequence([]);
        setPlayerInputIndex(0);
        setGameState('setupRound');
    };

    useEffect(() => {
        if (gameState !== 'setupRound') return;

        const theme = STORY_NAMES[score % STORY_NAMES.length];
        setCurrentTheme(theme);
        setMessage(`Ronda: ${theme}`);
        
        const themeWords = WORD_BANK_BY_STORY[theme as keyof typeof WORD_BANK_BY_STORY];
        const allWords = Object.values(WORD_BANK_BY_STORY).flat();
        const otherWords = shuffle(allWords.filter(w => !themeWords.includes(w)));
        const combinedWords = shuffle([...new Set([...themeWords, ...otherWords])]);

        const options = combinedWords.slice(0, LEVELS[level].optionsCount);
        setCurrentOptions(options);

        const newSequence = Array.from(
            { length: LEVELS[level].sequenceLength },
            () => options[Math.floor(Math.random() * options.length)]
        );

        console.log("Voz dirá:", newSequence);
        setSequence(newSequence);
        setGameState('watching');
    }, [gameState, level, score]);

    useEffect(() => {
        if (gameState !== 'watching' || sequence.length === 0) return;

        let isCancelled = false;
        setMessage('Escucha...');
        
        const totalDelay = LEVELS[level].pause + 200;
        sequence.forEach((word, index) => {
            setTimeout(() => {
                if (isCancelled) return;
                speak(word);
                setSpokenWord(word);
                setTimeout(() => setSpokenWord(null), LEVELS[level].pause);

                if (index === sequence.length - 1) {
                    setTimeout(() => {
                        if (isCancelled) return;
                        setGameState('playing');
                        setMessage(`¡Tu turno! Palabra 1 de ${sequence.length}`);
                    }, LEVELS[level].pause);
                }
            }, index * totalDelay);
        });

        return () => { isCancelled = true; setSpokenWord(null); };
    }, [gameState, sequence, level, speak]);

    const handlePlayerChoice = (word: string) => {
        if (gameState !== 'playing') return;

        console.log("Usuario presionó:", word);
        console.log("Se esperaba:", sequence[playerInputIndex]);

        if (word === sequence[playerInputIndex]) {
            setFeedback({ word, status: 'correct' });
            const newIndex = playerInputIndex + 1;

            if (newIndex === sequence.length) {
                // Sequence complete
                const newScore = score + 1;
                setScore(newScore);
                setMessage('¡Genial! Siguiente nivel...');
                setPlayerInputIndex(0);
                
                setTimeout(() => {
                    if (newScore > 0 && newScore % 3 === 0) {
                        setMessage('¡Cambiando de tema!');
                        setTimeout(() => setGameState('setupRound'), 1000);
                    } else {
                        const newWord = currentOptions[Math.floor(Math.random() * currentOptions.length)];
                        setSequence(s => [...s, newWord]);
                        setGameState('watching');
                    }
                }, 1500);
            } else {
                setPlayerInputIndex(newIndex);
                setMessage(`¡Bien! Palabra ${newIndex + 1} de ${sequence.length}`);
            }
        } else {
            setFeedback({ word, status: 'incorrect' });
            setGameState('gameOver');
            setMessage(`Incorrecto. La secuencia era: ${sequence.join(' - ')}`);
        }
    };

    useEffect(() => {
        if (feedback) {
            const timer = setTimeout(() => setFeedback(null), 500);
            return () => clearTimeout(timer);
        }
    }, [feedback]);


    if (gameState === 'idle' || gameState === 'gameOver') {
        return (
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg w-full text-center">
                {gameState === 'gameOver' && (
                    <>
                        <h2 className="text-2xl font-bold text-stokyds-red mb-2">¡Juego Terminado!</h2>
                        <p className="text-xl mb-2">Puntuación final: {score}</p>
                        <p className="mb-4 text-sm">{message}</p>
                    </>
                )}
                <div className="flex space-x-2 mb-4">
                    {(['easy', 'medium', 'hard'] as Level[]).map(l => (
                        <button key={l} onClick={() => setLevel(l)} className={`px-3 py-1 text-sm rounded-full transition-colors ${level === l ? 'bg-stokyds-red text-white' : 'bg-gray-200 hover:bg-gray-300'}`}>
                            {l === 'easy' ? 'Fácil' : l === 'medium' ? 'Medio' : 'Difícil'}
                        </button>
                    ))}
                </div>
                <button onClick={startGame} className="mt-2 px-6 py-2 bg-stokyds-red text-white rounded-lg hover:bg-stokyds-red-dark transition-colors">
                    {gameState === 'gameOver' ? 'Jugar de Nuevo' : 'Empezar a Jugar'}
                </button>
            </div>
        );
    }
    
    const getButtonClass = (word: string) => {
        let classes = 'p-3 rounded-lg text-md font-bold text-stokyds-text transition-all duration-200 disabled:opacity-75 ';

        if (spokenWord === word) {
            classes += 'bg-yellow-300 scale-110 ';
        } else if (feedback?.word === word) {
            classes += feedback.status === 'correct' ? 'bg-green-400 text-white ' : 'bg-red-500 text-white ';
        } else {
            classes += 'bg-stokyds-gray ';
        }

        if (gameState === 'playing' && !feedback) {
             classes += 'hover:bg-stokyds-red hover:text-white ';
        }

        return classes;
    };

    return (
        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg w-full">
            <div className="w-full flex justify-between items-center mb-4">
                <p className="text-lg font-semibold">Puntuación: {score}</p>
                <button onClick={() => setGameState('gameOver')} className="px-3 py-1 text-sm bg-gray-200 hover:bg-gray-300 rounded-full">Terminar Juego</button>
            </div>
            <p className="text-lg mb-4 h-6 font-bold text-stokyds-text">{message}</p>
            <div className={`grid ${LEVELS[level].optionsCount === 8 ? 'grid-cols-4' : 'grid-cols-3'} gap-2 w-full`}>
                {currentOptions.map(word => (
                     <button 
                        key={word}
                        onClick={() => handlePlayerChoice(word)}
                        disabled={gameState !== 'playing'}
                        className={getButtonClass(word)}
                    >
                        {word}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default SimonDePalabras;