import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { stories } from '../data';
import { useLanguage } from '../App';
import LanguageSelector from '../components/LanguageSelector';

const StoryDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const { language, setLanguage } = useLanguage();
    const story = stories.find(s => s.id === id);

    // Persist language preference
    useEffect(() => {
        localStorage.setItem('stokyds-idioma', language);
    }, [language]);

    if (!story) {
        return (
            <div className="text-center p-10">
                <h2 className="text-2xl font-bold">Cuento no encontrado</h2>
                <Link to="/stories" className="text-stokyds-red hover:underline">Volver a los cuentos</Link>
            </div>
        );
    }
    
    const currentTitle = story.title[language] || story.title.es;
    const currentAuthor = story.author[language] || story.author.es;
    const currentContent = story.content[language];
    
    const currentAudioSrc = story.audioSrc?.[language];
    const currentAudioDuration = story.audioDuration?.[language];

    const getLanguageName = (code: string) => {
        if (code === 'es') return 'Español';
        if (code === 'en') return 'English';
        if (code === 'qu') return 'Quechua';
        return code;
    };

    return (
        <article className="max-w-4xl mx-auto bg-white p-6 md:p-10 rounded-lg shadow-xl">
            <img src={story.cover} alt={currentTitle} className="w-full h-64 md:h-96 object-cover rounded-lg mb-6 shadow-sm" />
            
            <div className="flex flex-col-reverse md:flex-row justify-between items-start gap-6 mb-8">
                <div className="flex-grow">
                    <h1 id="titulo-cuento" className="text-4xl md:text-5xl font-bold text-stokyds-red mb-2">{currentTitle}</h1>
                    <p className="text-lg text-gray-600">por {currentAuthor}</p>
                </div>
                <div className="flex-shrink-0 flex flex-col items-center md:items-end gap-4 w-full md:w-auto">
                    <LanguageSelector />
                </div>
            </div>

             {/* Audio Player Section - Only renders if audio exists for CURRENT language */}
             {currentAudioSrc ? (
                <div id="reproductor-audio" className="reproductor-cuento mb-8 p-4 bg-stokyds-bg border border-stokyds-gray rounded-lg shadow-inner flex flex-col sm:flex-row items-center gap-4">
                    <div className="flex-shrink-0 bg-white p-2 rounded-full shadow-sm text-stokyds-red">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"></path></svg>
                    </div>
                    <div className="flex-grow w-full">
                        <h3 className="text-sm font-bold text-stokyds-text mb-1 uppercase tracking-wide text-gray-500">Escuchar narración ({getLanguageName(language)})</h3>
                        <audio controls id="fuente-audio" className="w-full h-10" key={currentAudioSrc}>
                            <source src={currentAudioSrc} type="audio/mpeg" />
                            Tu navegador no soporta audio.
                        </audio>
                    </div>
                    {currentAudioDuration && (
                        <span id="duracion-audio" className="flex-shrink-0 text-sm font-mono bg-white px-2 py-1 rounded border border-gray-200 text-gray-600">
                            {currentAudioDuration}
                        </span>
                    )}
                </div>
            ) : null}
            
            <div id="contenido-texto" className="prose lg:prose-xl max-w-none text-gray-800 leading-relaxed font-sans">
                {currentContent ? (
                    <div className="whitespace-pre-line">{currentContent}</div>
                ) : (
                    <div className="mensaje-no-disponible p-6 bg-yellow-50 border border-yellow-200 rounded-lg text-center my-8">
                        <p className="text-lg text-yellow-800 mb-2">
                            ⚠️ Este cuento no está disponible en <strong>{getLanguageName(language)}</strong> aún.
                        </p>
                        <p className="text-sm text-yellow-600 mb-4">Estamos trabajando en la traducción.</p>
                        <button 
                            onClick={() => setLanguage('es')}
                            className="bg-stokyds-red text-white px-6 py-2 rounded-full font-bold hover:bg-stokyds-red-dark transition-colors shadow-md"
                        >
                            Ver en Español
                        </button>
                    </div>
                )}
            </div>
            
             <div className="mt-12 text-center border-t border-gray-200 pt-8">
                 <Link to="/stories" className="inline-flex items-center gap-2 bg-white border-2 border-stokyds-red text-stokyds-red font-bold py-2 px-6 rounded-full hover:bg-stokyds-red hover:text-white transition-all duration-300">
                    <span>&larr;</span> Volver a la Biblioteca
                </Link>
            </div>
        </article>
    );
};

export default StoryDetail;