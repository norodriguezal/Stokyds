
import React from 'react';
import { games } from '../data';
import { Game } from '../types';

const Minigames: React.FC = () => {
    const gamesByCategory = games.reduce((acc, game) => {
        const category = game.category || 'Juegos';
        (acc[category] = acc[category] || []).push(game);
        return acc;
    }, {} as Record<string, Game[]>);

    return (
        <div>
            <h1 className="text-4xl font-bold mb-12 text-center text-stokyds-red">Minijuegos para Aprender</h1>
            
            {Object.entries(gamesByCategory).map(([category, gameList]) => (
                <section key={category} className="mb-16">
                    <h2 className="text-3xl font-bold text-stokyds-text mb-8 border-b-4 border-stokyds-red pb-2">{category}</h2>
                    <div className="flex flex-col items-center gap-16">
                        {gameList.map(game => {
                            const GameComponent = game.component;
                            return (
                                <div key={game.id} className="w-full max-w-3xl">
                                    <div className="text-center mb-4">
                                        <h3 className="text-2xl font-bold">{game.title}</h3>
                                        <p className="text-gray-600">{game.description}</p>
                                    </div>
                                    <GameComponent />
                                </div>
                            );
                        })}
                    </div>
                </section>
            ))}
        </div>
    );
};

export default Minigames;
