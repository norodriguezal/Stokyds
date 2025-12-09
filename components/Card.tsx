import React from 'react';
import { Link } from 'react-router-dom';
import { Story } from '../types';

interface CardProps {
    to: string;
    imageUrl: string;
    title: string;
    subtitle?: string;
    story?: Story; // Optional prop to access story details for badges
    hasAudio?: boolean; // Keep for backward compatibility with comics
}

const SpeakerIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"></path>
    </svg>
);

const Card: React.FC<CardProps> = ({ to, imageUrl, title, subtitle, story, hasAudio }) => {
    // Determine if audio exists. For stories, check audioSrc object. For comics, check bool.
    const audioExists = story 
        ? (story.audioSrc && Object.keys(story.audioSrc).length > 0) 
        : hasAudio;

    return (
        <Link to={to} className="group block bg-white rounded-lg shadow-md hover:shadow-xl hover:shadow-red-glow transition-all duration-300 overflow-hidden transform hover:-translate-y-1">
            <div className="relative">
                <img className="w-full h-56 object-cover" src={imageUrl} alt={title} />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-opacity duration-300"></div>
                
                {audioExists && (
                     <div className="absolute top-[10px] right-[10px] bg-black bg-opacity-50 text-white rounded-full p-2 icono-audio">
                        <SpeakerIcon className="w-5 h-5" />
                    </div>
                )}
                
                {story && (
                    <div className="absolute bottom-2 left-2 flex gap-1">
                        {story.title.es && <span className="text-[10px] font-bold bg-yellow-400 text-yellow-900 px-1.5 py-0.5 rounded shadow-sm border border-yellow-500" title="Disponible en Español">ES</span>}
                        {story.title.en && <span className="text-[10px] font-bold bg-blue-400 text-blue-900 px-1.5 py-0.5 rounded shadow-sm border border-blue-500" title="Available in English">EN</span>}
                        {story.title.qu && <span className="text-[10px] font-bold bg-green-400 text-green-900 px-1.5 py-0.5 rounded shadow-sm border border-green-500" title="Quechua kan">QU</span>}
                    </div>
                )}
            </div>
            <div className="p-4">
                <h3 className="text-xl font-bold text-stokyds-text group-hover:text-stokyds-red transition-colors duration-300 line-clamp-2">{title}</h3>
                {subtitle && <p className="text-gray-600 mt-1 line-clamp-1">{subtitle}</p>}
            </div>
        </Link>
    );
};

export default Card;