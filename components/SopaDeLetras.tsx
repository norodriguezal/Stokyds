import React, { useState, useEffect, useRef } from 'react';

const GRID_SIZE = 10;
const WORDS = ['SOL', 'LUNA', 'GATO', 'CASA', 'RIO'];
// Simple pre-generated grid for this example. A real implementation would generate this dynamically.
const GRID_DATA = [
  ['S', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'],
  ['O', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S'],
  ['L', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'A', 'B'],
  ['C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'],
  ['U', 'N', 'A', 'M', 'N', 'O', 'P', 'Q', 'R', 'S'],
  ['L', 'A', 'T', 'O', 'V', 'W', 'X', 'Y', 'Z', 'A'],
  ['B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K'],
  ['R', 'I', 'O', 'M', 'N', 'O', 'G', 'A', 'T', 'O'],
  ['S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'A', 'B'],
  ['C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'],
];

const SopaDeLetras: React.FC = () => {
    const [foundWords, setFoundWords] = useState<string[]>([]);
    const [selectedCells, setSelectedCells] = useState<string[]>([]);
    const [isSelecting, setIsSelecting] = useState(false);
    // Fix: Use `number` for the timer ID in a browser environment instead of `NodeJS.Timeout`.
    const timerRef = useRef<number | null>(null);
    const [timeLeft, setTimeLeft] = useState(60);
    const [gameOver, setGameOver] = useState(false);

    useEffect(() => {
        timerRef.current = setInterval(() => {
            setTimeLeft(t => t > 0 ? t - 1 : 0);
        }, 1000);
        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, []);

    useEffect(() => {
        if (timeLeft === 0) {
            setGameOver(true);
            if(timerRef.current) clearInterval(timerRef.current);
        }
        if (foundWords.length === WORDS.length) {
            setGameOver(true);
             if(timerRef.current) clearInterval(timerRef.current);
        }
    }, [timeLeft, foundWords]);

    const handleCellMouseDown = (row: number, col: number) => {
        setIsSelecting(true);
        setSelectedCells([`${row}-${col}`]);
    };

    const handleCellMouseEnter = (row: number, col: number) => {
        if (isSelecting) {
            setSelectedCells(prev => [...prev, `${row}-${col}`]);
        }
    };

    const handleCellMouseUp = () => {
        setIsSelecting(false);
        const selectedWord = selectedCells.map(cell => {
            const [r, c] = cell.split('-').map(Number);
            return GRID_DATA[r][c];
        }).join('');
        
        if (WORDS.includes(selectedWord) && !foundWords.includes(selectedWord)) {
            setFoundWords(prev => [...prev, selectedWord]);
        }
        setSelectedCells([]);
    };

    const isCellSelected = (row: number, col: number) => {
        return selectedCells.includes(`${row}-${col}`);
    };

    if (gameOver) {
        return (
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg w-full text-center">
                <h2 className="text-2xl font-bold text-stokyds-red mb-4">
                    {foundWords.length === WORDS.length ? '¡Felicidades!' : '¡Tiempo Agotado!'}
                </h2>
                <p className="text-xl mb-4">Encontraste {foundWords.length} de {WORDS.length} palabras.</p>
                <button onClick={() => window.location.reload()} className="mt-2 px-6 py-2 bg-stokyds-red text-white rounded-lg hover:bg-stokyds-red-dark transition-colors">
                    Jugar de Nuevo
                </button>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-lg w-full">
            <div className="flex justify-between w-full mb-4">
                <div>
                    <h3 className="font-bold">Palabras a encontrar:</h3>
                    <ul className="flex gap-4">
                        {WORDS.map(word => (
                            <li key={word} className={`${foundWords.includes(word) ? 'line-through text-gray-400' : ''}`}>
                                {word}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="text-xl font-bold">Tiempo: {timeLeft}s</div>
            </div>
            <div className="grid grid-cols-10 gap-1" onMouseUp={handleCellMouseUp}>
                {GRID_DATA.map((row, rowIndex) =>
                    row.map((cell, colIndex) => (
                        <div
                            key={`${rowIndex}-${colIndex}`}
                            onMouseDown={() => handleCellMouseDown(rowIndex, colIndex)}
                            onMouseEnter={() => handleCellMouseEnter(rowIndex, colIndex)}
                            className={`w-8 h-8 flex items-center justify-center font-bold text-lg border-2 rounded
                                ${isCellSelected(rowIndex, colIndex) ? 'bg-stokyds-red text-white' : 'bg-stokyds-gray'}`}
                        >
                            {cell}
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default SopaDeLetras;
