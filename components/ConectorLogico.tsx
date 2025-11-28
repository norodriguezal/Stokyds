import React, { useState, useMemo } from 'react';

const PROBLEMS = [
    { sentence1: 'Hizo mucho sol.', sentence2: 'se puso la crema solar.', options: ['sin embargo', 'por lo tanto', 'además'], correct: 'por lo tanto' },
    { sentence1: 'Quería ir al parque,', sentence2: 'empezó a llover.', options: ['porque', 'mientras', 'sin embargo'], correct: 'sin embargo' },
    { sentence1: 'Le gustan las manzanas', sentence2: 'las peras.', options: ['y', 'pero', 'entonces'], correct: 'y' },
    { sentence1: 'No fue a la fiesta', sentence2: 'estaba enfermo.', options: ['así que', 'porque', 'aunque'], correct: 'porque' },
    { sentence1: 'Estudia mucho para el examen,', sentence2: 'podrá sacar una buena nota.', options: ['de este modo', 'a pesar de que', 'en cambio'], correct: 'de este modo' },
];

const shuffleArray = (array: any[]) => [...array].sort(() => Math.random() - 0.5);

const ConectorLogico: React.FC = () => {
    const [currentProblemIndex, setCurrentProblemIndex] = useState(0);
    const [message, setMessage] = useState('');
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(false);

    const problemSet = useMemo(() => shuffleArray(PROBLEMS), []);
    const currentProblem = problemSet[currentProblemIndex];

    const handleOptionClick = (option: string) => {
        if (option === currentProblem.correct) {
            setMessage('¡Correcto!');
            setScore(s => s + 1);
        } else {
            setMessage(`Incorrecto. La respuesta era "${currentProblem.correct}".`);
        }

        setTimeout(() => {
            if (currentProblemIndex < problemSet.length - 1) {
                setCurrentProblemIndex(i => i + 1);
                setMessage('');
            } else {
                setGameOver(true);
            }
        }, 2000);
    };

    const restartGame = () => {
        setCurrentProblemIndex(0);
        setScore(0);
        setMessage('');
        setGameOver(false);
    }

    if (gameOver) {
        return (
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg w-full text-center">
                 <h2 className="text-2xl font-bold text-stokyds-red mb-4">¡Juego Terminado!</h2>
                 <p className="text-xl mb-4">Tu puntuación final es: {score} de {problemSet.length}</p>
                 <button onClick={restartGame} className="mt-2 px-6 py-2 bg-stokyds-red text-white rounded-lg hover:bg-stokyds-red-dark transition-colors">Jugar de Nuevo</button>
            </div>
        )
    }

    return (
        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg w-full text-center">
            <p className="w-full text-left text-lg font-semibold mb-2">Puntuación: {score}</p>
            <div className="p-4 bg-stokyds-gray rounded-lg mb-4 w-full">
                <p className="text-lg">{currentProblem.sentence1} <span className="font-bold text-stokyds-red">_______</span>, {currentProblem.sentence2}</p>
            </div>
            <p className="mb-4">Elige el conector correcto:</p>
            <div className="flex flex-col gap-3 w-full max-w-sm">
                {currentProblem.options.map((option) => (
                    <button 
                        key={option}
                        onClick={() => handleOptionClick(option)}
                        disabled={!!message}
                        className="p-3 bg-white border-2 border-stokyds-red rounded-lg text-lg font-bold text-stokyds-red hover:bg-stokyds-red hover:text-white transition-colors duration-200 disabled:opacity-50"
                    >
                        {option}
                    </button>
                ))}
            </div>
            {message && <p className="mt-4 text-lg font-bold h-6">{message}</p>}
        </div>
    );
};

export default ConectorLogico;
