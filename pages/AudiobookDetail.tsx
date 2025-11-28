
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { audiobooks } from '../data';
import AudioPlayer from '../components/AudioPlayer';

const AudiobookDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const audiobook = audiobooks.find(a => a.id === id);

    if (!audiobook) {
        return (
            <div className="text-center">
                <h2 className="text-2xl font-bold">Audiolibro no encontrado</h2>
                <Link to="/audiobooks" className="text-stokyds-coral hover:underline">Volver a los audiolibros</Link>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto bg-white p-6 md:p-10 rounded-lg shadow-xl">
            <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3 flex-shrink-0">
                    <img src={audiobook.cover} alt={audiobook.title} className="w-full rounded-lg shadow-md" />
                </div>
                <div className="md:w-2/3">
                    <h1 className="text-4xl font-bold text-stokyds-teal mb-2">{audiobook.title}</h1>
                    <p className="text-lg text-gray-600 mb-6">por {audiobook.author}</p>
                    <AudioPlayer src={audiobook.audioSrc} />
                </div>
            </div>
            
            <div className="mt-10">
                <h2 className="text-2xl font-bold mb-4 text-stokyds-text">Transcripción</h2>
                <div className="p-6 bg-gray-100 rounded-lg">
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">{audiobook.transcript}</p>
                </div>
            </div>

            <div className="mt-10 text-center">
                <Link to="/audiobooks" className="inline-block bg-stokyds-sky text-white font-bold py-2 px-6 rounded-full hover:bg-stokyds-teal transition-colors">
                    &larr; Volver a Audiolibros
                </Link>
            </div>
        </div>
    );
};

export default AudiobookDetail;
