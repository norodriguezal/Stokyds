import React from 'react';
import { comics } from '../data';
import Card from '../components/Card';

const Comics: React.FC = () => {
    return (
        <div>
            <h1 className="text-4xl font-bold mb-8 text-center text-stokyds-red">Cómics Increíbles</h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {comics.map(comic => (
                    <Card
                        key={comic.id}
                        to={`/comics/${comic.id}`}
                        imageUrl={comic.cover}
                        title={comic.title}
                        subtitle={comic.author}
                        hasAudio={!!comic.audioSrc}
                    />
                ))}
            </div>
        </div>
    );
};

export default Comics;