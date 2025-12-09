import React from 'react';
import { stories } from '../data';
import Card from '../components/Card';
import { useLanguage } from '../App';
import LanguageSelector from '../components/LanguageSelector';

const Stories: React.FC = () => {
    const { language } = useLanguage();

    return (
        <div>
            <div className="flex flex-col md:flex-row justify-center md:justify-between items-center mb-8 gap-6">
                 <h1 className="text-4xl font-bold text-center text-stokyds-red">Cuentos para Soñar</h1>
                 <LanguageSelector />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {stories.map(story => (
                    <Card 
                        key={story.id} 
                        to={`/stories/${story.id}`} 
                        imageUrl={story.cover} 
                        title={story.title[language] || story.title.es!} 
                        subtitle={story.author[language] || story.author.es!} 
                        story={story} // Passing the full object for badges
                    />
                ))}
            </div>
        </div>
    );
};

export default Stories;