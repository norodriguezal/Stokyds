import React, { useState, createContext, useContext } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Stories from './pages/Stories';
import StoryDetail from './pages/StoryDetail';
import Comics from './pages/Comics';
import ComicDetail from './pages/ComicDetail';
import Minigames from './pages/Minigames';
import About from './pages/About';
import BottomAudioPlayer from './components/AudioPlayer';
import { Language } from './types';

interface Track {
    src: string;
    title: string;
    cover: string;
}

interface AudioContextType {
    currentTrack: Track | null;
    isPlaying: boolean;
    playTrack: (track: Track) => void;
    togglePlayPause: () => void;
    setIsPlaying: (playing: boolean) => void;
}

export const AudioContext = createContext<AudioContextType | null>(null);
export const useAudio = () => useContext(AudioContext)!;

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
}

export const LanguageContext = createContext<LanguageContextType | null>(null);
export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};

const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [language, setLanguage] = useState<Language>('es');
    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};


const AudioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const playTrack = (track: Track) => {
        setCurrentTrack(track);
        setIsPlaying(true);
    };
    
    const togglePlayPause = () => {
        if(currentTrack) {
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <AudioContext.Provider value={{ currentTrack, isPlaying, playTrack, togglePlayPause, setIsPlaying }}>
            {children}
            <BottomAudioPlayer />
        </AudioContext.Provider>
    );
};


const App: React.FC = () => {
    return (
        <LanguageProvider>
            <HashRouter>
                <AudioProvider>
                    <div className="flex flex-col min-h-screen pb-20">
                        <Header />
                        <main className="flex-grow container mx-auto p-4 md:p-8">
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/stories" element={<Stories />} />
                                <Route path="/stories/:id" element={<StoryDetail />} />
                                <Route path="/comics" element={<Comics />} />
                                <Route path="/comics/:id" element={<ComicDetail />} />
                                <Route path="/minigames" element={<Minigames />} />
                                <Route path="/about" element={<About />} />
                            </Routes>
                        </main>
                    </div>
                </AudioProvider>
            </HashRouter>
        </LanguageProvider>
    );
};

export default App;