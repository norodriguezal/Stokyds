import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { stories } from '../data';
import { useLanguage } from '../App';
import LanguageSelector from '../components/LanguageSelector';

const StoryDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const { language } = useLanguage();
    const story = stories.find(s => s.id === id);

    if (!story) {
        return (
            <div className="text-center">
                <h2 className="text-2xl font-bold">Cuento no encontrado</h2>
                <Link to="/stories" className="text-stokyds-red hover:underline">Volver a los cuentos</Link>
            </div>
        );
    }
    
    const currentTitle = story.title[language] || story.title.es!;
    const currentAuthor = story.author[language] || story.author.es!;
    const contentInSelectedLanguage = story.content[language];
    const contentInSpanish = story.content.es!;

    return (
        <article className="max-w-4xl mx-auto bg-white p-6 md:p-10 rounded-lg shadow-xl">
            <img src={story.cover} alt={currentTitle} className="w-full h-64 md:h-96 object-cover rounded-lg mb-6" />
            <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-8">
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold text-stokyds-red mb-2">{currentTitle}</h1>
                    <p className="text-lg text-gray-600">por {currentAuthor}</p>
                </div>
                <div className="flex-shrink-0 flex flex-col sm:items-end items-start gap-4">
                    <LanguageSelector />
                    {/* SOLO APARECE SI cuento.tieneAudio === true */}
                    {story.audioSrc && (
                        <div id="reproductor-audio" className="reproductor-cuento mt-4 p-4 bg-stokyds-bg border border-gray-200 rounded-lg shadow-sm">
                            <h3 className="text-lg font-bold text-stokyds-text mb-2">Escuchar este cuento:</h3>
                            <audio controls className="w-full max-w-md">
                                <source id="audio-source" src={story.audioSrc} type="audio/mpeg" />
                                Tu navegador no soporta audio.
                            </audio>
                            {story.audioDuration && (
                                <span className="duracion block mt-1 text-sm text-gray-600 font-mono">{story.audioDuration}</span>
                            )}
                        </div>
                    )}
                </div>
            </div>
            
            <div className="prose lg:prose-xl max-w-none text-gray-800 leading-relaxed">
                {contentInSelectedLanguage ? (
                    <div className="whitespace-pre-line">{contentInSelectedLanguage}</div>
                ) : (
                    <>
                        <p className="not-prose p-4 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700">
                            Aún no tenemos una traducción para este cuento en el idioma seleccionado. ¡Estamos trabajando en ello! Mientras tanto, te mostramos la versión en español.
                        </p>
                        <div className="whitespace-pre-line mt-4">{contentInSpanish}</div>
                    </>
                )}
            </div>
             <div className="mt-10 text-center">
                 <Link to="/stories" className="inline-block bg-stokyds-red text-white font-bold py-2 px-6 rounded-full hover:bg-stokyds-red-dark transition-colors">
                    &larr; Volver a Cuentos
                </Link>
            </div>
        </article>
    );
};

export default StoryDetail;