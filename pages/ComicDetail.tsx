import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { comics } from '../data';
import { useAudio } from '../App';

const PlayCircleIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
    </svg>
);

const ComicDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const comic = comics.find(c => c.id === id);
    const [currentPage, setCurrentPage] = useState(0);
    const { playTrack } = useAudio();

    if (!comic) {
        return (
            <div className="text-center">
                <h2 className="text-2xl font-bold">Cómic no encontrado</h2>
                <Link to="/comics" className="text-stokyds-red hover:underline">Volver a los cómics</Link>
            </div>
        );
    }
    
    const handlePlayAudio = () => {
        if(comic.audioSrc) {
            playTrack({ src: comic.audioSrc, title: comic.title, cover: comic.cover });
        }
    }


    const goToNextPage = () => {
        setCurrentPage(prev => Math.min(prev + 1, comic.pages.length - 1));
    };

    const goToPrevPage = () => {
        setCurrentPage(prev => Math.max(prev - 1, 0));
    };

    return (
        <div className="flex flex-col items-center">
            <div className="flex justify-between items-center w-full max-w-3xl mb-2">
                <div>
                     <h1 className="text-3xl md:text-4xl font-bold text-stokyds-red">{comic.title}</h1>
                     <p className="text-md text-gray-600">Página {currentPage + 1} de {comic.pages.length}</p>
                </div>
                {comic.audioSrc && (
                    <button onClick={handlePlayAudio} className="flex-shrink-0 ml-4 flex items-center gap-2 bg-stokyds-gray text-stokyds-text font-bold py-2 px-4 rounded-full hover:scale-105 transition-transform">
                        <PlayCircleIcon className="w-6 h-6" />
                        Escuchar
                    </button>
                )}
            </div>

            <div className="w-full max-w-3xl mb-6 bg-white p-2 rounded-lg shadow-xl">
                <img src={comic.pages[currentPage]} alt={`Página ${currentPage + 1}`} className="w-full h-auto rounded" />
            </div>

            <div className="flex justify-between w-full max-w-3xl">
                <button
                    onClick={goToPrevPage}
                    disabled={currentPage === 0}
                    className="px-6 py-2 bg-stokyds-red text-white rounded-lg disabled:bg-gray-400 disabled:cursor-not-allowed hover:bg-stokyds-red-dark transition-colors"
                >
                    Anterior
                </button>
                <button
                    onClick={goToNextPage}
                    disabled={currentPage === comic.pages.length - 1}
                    className="px-6 py-2 bg-stokyds-red text-white rounded-lg disabled:bg-gray-400 disabled:cursor-not-allowed hover:bg-stokyds-red-dark transition-colors"
                >
                    Siguiente
                </button>
            </div>
             <div className="mt-10 text-center">
                 <Link to="/comics" className="inline-block bg-stokyds-red text-white font-bold py-2 px-6 rounded-full hover:bg-stokyds-red-dark transition-colors">
                    &larr; Volver a Cómics
                </Link>
            </div>
        </div>
    );
};

export default ComicDetail;