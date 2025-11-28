import React, { useState, useMemo } from 'react';

const STORIES = [
    {
        title: 'El Zorro y el Cuy',
        correctOrder: [
            'Un zorro hambriento atrapó a un pequeño cuy.',
            'El cuy le dijo que había un queso de oro en el lago.',
            'El zorro, ambicioso, saltó al agua buscando el queso.',
            'Mientras el zorro buscaba, el cuy astuto escapó.',
        ],
    },
    {
        title: 'El Cóndor y la Pastora',
        correctOrder: [
            'Un cóndor se transformó en un joven para conocer a una pastora.',
            'El cóndor se llevó a la pastora a su nido en la montaña.',
            'La pastora estaba triste y extrañaba su hogar.',
            'Un picaflor ayudó a la pastora a escapar y volver con su padre.',
        ],
    },
];

const shuffleArray = (array: any[]) => [...array].sort(() => Math.random() - 0.5);

const OrdenaLaHistoria: React.FC = () => {
    const [storyIndex, setStoryIndex] = useState(0);
    const [sentences, setSentences] = useState(() => shuffleArray(STORIES[storyIndex].correctOrder));
    const [message, setMessage] = useState('');
    const [draggedItemIndex, setDraggedItemIndex] = useState<number | null>(null);

    const selectNextStory = () => {
        const nextIndex = (storyIndex + 1) % STORIES.length;
        setStoryIndex(nextIndex);
        setSentences(shuffleArray(STORIES[nextIndex].correctOrder));
        setMessage('');
    };
    
    const handleCheckOrder = () => {
        const isCorrect = sentences.every((sentence, index) => sentence === STORIES[storyIndex].correctOrder[index]);
        if (isCorrect) {
            setMessage('¡Excelente! La historia está en el orden correcto.');
        } else {
            setMessage('Casi... Intenta ordenar las frases de nuevo.');
        }
    };

    const handleDragStart = (index: number) => {
        setDraggedItemIndex(index);
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault(); 
    };

    const handleDrop = (targetIndex: number) => {
        if (draggedItemIndex === null) return;
        
        const newSentences = [...sentences];
        const draggedItem = newSentences.splice(draggedItemIndex, 1)[0];
        newSentences.splice(targetIndex, 0, draggedItem);
        
        setSentences(newSentences);
        setDraggedItemIndex(null);
        setMessage('');
    };

    return (
        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg w-full">
            <h3 className="text-xl font-bold text-stokyds-text mb-4">
                Historia: <span className="text-stokyds-red">{STORIES[storyIndex].title}</span>
            </h3>
            <p className="mb-4">Arrastra y suelta las frases para ponerlas en el orden correcto.</p>

            <div className="w-full flex flex-col gap-2 mb-4">
                {sentences.map((sentence, index) => (
                    <div
                        key={sentence}
                        draggable
                        onDragStart={() => handleDragStart(index)}
                        onDragOver={handleDragOver}
                        onDrop={() => handleDrop(index)}
                        className={`p-4 rounded-lg cursor-grab active:cursor-grabbing flex items-center gap-4 transition-shadow ${
                            draggedItemIndex === index ? 'shadow-lg bg-stokyds-red text-white' : 'bg-stokyds-gray'
                        }`}
                    >
                        <span className="font-bold text-lg">::</span>
                        {sentence}
                    </div>
                ))}
            </div>
            
            <div className="flex gap-4 items-center">
                 <button onClick={handleCheckOrder} className="px-6 py-2 bg-stokyds-red text-white rounded-lg hover:bg-stokyds-red-dark transition-colors">Revisar Orden</button>
                 <button onClick={selectNextStory} className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors">Siguiente Historia</button>
            </div>
            {message && <p className="mt-4 text-lg font-bold h-6">{message}</p>}
        </div>
    );
};

export default OrdenaLaHistoria;
