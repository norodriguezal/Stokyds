import React from 'react';
import { stories, comics, games } from '../data';
import Card from '../components/Card';
import { Link } from 'react-router-dom';
import { useLanguage } from '../App';

const Section: React.FC<{ title: string; to: string; children: React.ReactNode }> = ({ title, to, children }) => (
    <section className="mb-12">
        <div className="flex justify-between items-center mb-4">
            <h2 className="text-3xl md:text-4xl font-bold text-stokyds-text">{title}</h2>
            <Link to={to} className="text-stokyds-red hover:underline font-semibold">Ver todos</Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {children}
        </div>
    </section>
);

const Home: React.FC = () => {
    const { language } = useLanguage();
    return (
        <div className="space-y-8">
            <div className="text-center p-8 bg-stokyds-gray rounded-lg shadow-inner">
                <h1 className="text-4xl md:text-5xl font-black text-stokyds-text mb-2">¡Bienvenido a Stokyds!</h1>
                <p className="text-lg md:text-xl text-gray-700">Desafiamos el mito de que 'tiempo de pantalla' es sinónimo de 'tiempo perdido'.</p>
                <div className="mt-6 max-w-lg mx-auto">
                    <input type="search" placeholder="Buscar una aventura..." className="w-full p-3 rounded-full border-2 border-stokyds-text focus:border-stokyds-red focus:ring-stokyds-red" />
                </div>
            </div>

            <Section title="Cuentos Populares" to="/stories">
                {stories.slice(0, 4).map(story => (
                    <Card 
                        key={story.id} 
                        to={`/stories/${story.id}`} 
                        imageUrl={story.cover} 
                        title={story.title[language] || story.title.es!} 
                        subtitle={story.author[language] || story.author.es!} 
                        story={story}
                    />
                ))}
            </Section>

            <Section title="Cómics Divertidos" to="/comics">
                {comics.slice(0, 4).map(comic => (
                    <Card key={comic.id} to={`/comics/${comic.id}`} imageUrl={comic.cover} title={comic.title} subtitle={comic.author} hasAudio={!!comic.audioSrc} />
                ))}
            </Section>

            <Section title="Minijuegos" to="/minigames">
                {games.slice(0, 4).map(game => (
                    <Card key={game.id} to="/minigames" imageUrl={game.cover} title={game.title} />
                ))}
            </section>
        </div>
    );
};

export default Home;