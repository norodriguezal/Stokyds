
import React from 'react';
import { audiobooks } from '../data';
import Card from '../components/Card';

const Audiobooks: React.FC = () => {
    return (
        <div>
            <h1 className="text-4xl font-bold mb-8 text-center text-stokyds-teal">Audiolibros para Escuchar</h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {audiobooks.map(audiobook => (
                    <Card
                        key={audiobook.id}
                        to={`/audiobooks/${audiobook.id}`}
                        imageUrl={audiobook.cover}
                        title={audiobook.title}
                        subtitle={audiobook.author}
                    />
                ))}
            </div>
        </div>
    );
};

export default Audiobooks;
