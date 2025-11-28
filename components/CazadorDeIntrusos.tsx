import React, { useState, useMemo } from 'react';

const SETS = [
    { category: 'Frutas', words: ['Manzana', 'Perro', 'Plátano', 'Naranja'], intruder: 'Perro' },
    { category: 'Animales', words: ['León', 'Tigre', 'Elefante', 'Silla'], intruder: 'Silla' },
    { category: 'Colores', words: ['Rojo', 'Azul', 'Correr', 'Verde'], intruder: 'Correr' },
    { category: 'Vehículos', words: ['Coche', 'Barco', 'Avión', 'Galleta'], intruder: 'Galleta' },
];

const shuffleArray = (array: string[]) => [...array].sort(() => Math.random() - 0.5);

const CazadorDeIntrusos: React.FC = () => {
    const [currentSetIndex, setCurrentSetIndex] = useState(0);
    const [message, setMessage] = useState('');
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(false);

    const currentSet = SETS[currentSetIndex];
    const options = useMemo(() => shuffleArray(currentSet.words), [currentSet]);

    const handleOptionClick = (word: string) => {
        if (word === currentSet.intruder) {
            setMessage('¡Correcto! ¡Encontraste al intruso!');
            setScore(s => s + 1);
        } else {
            setMessage(`Incorrecto. "${currentSet.intruder}" era el intruso.`);
        }

        setTimeout(() => {
            if (currentSetIndex < SETS.length - 1) {
                setCurrentSetIndex(i => i + 1);
                setMessage('');
            } else {
                setGameOver(true);
            }
        }, 2000);
    };

    const restartGame = () => {
        setCurrentSetIndex(0);
        setScore(0);
        setMessage('');
        setGameOver(false);
    }

    if (gameOver) {
        return (
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg w-full text-center">
                 <h2 className="text-2xl font-bold text-stokyds-red mb-4">¡Juego Terminado!</h2>
                 <p className="text-xl mb-4">Tu puntuación final es: {score} de {SETS.length}</p>
                 <button onClick={restartGame} className="mt-2 px-6 py-2 bg-stokyds-red text-white rounded-lg hover:bg-stokyds-red-dark transition-colors">Jugar de Nuevo</button>
            </div>
        )
    }

    return (
        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg w-full">
            <p className="text-lg font-semibold mb-2">Puntuación: {score}</p>
            <h3 className="text-xl font-bold text-stokyds-text mb-4">
                Categoría: <span className="text-stokyds-red">{currentSet.category}</span>
            </h3>
            <p className="mb-4">Haz clic en la palabra que NO pertenece al grupo.</p>
            <div className="grid grid-cols-2 gap-4 w-full">
                {options.map((word) => (
                    <button 
                        key={word}
                        onClick={() => handleOptionClick(word)}
                        disabled={!!message}
                        className="p-4 bg-stokyds-gray rounded-lg text-lg font-bold text-stokyds-text hover:bg-stokyds-red hover:text-white transition-colors duration-200 disabled:opacity-50"
                    >
                        {word}
                    </button>
                ))}
            </div>
            {message && <p className="mt-4 text-lg font-bold">{message}</p>}
        </div>
    );
};

export default CazadorDeIntrusos;