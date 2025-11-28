import React, { useRef, useEffect, useState } from 'react';
import { useAudio } from '../App';

const PlayIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"></path></svg>
);

const PauseIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"></path></svg>
);

const VolumeIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"></path></svg>
);

const BottomAudioPlayer: React.FC = () => {
    const { currentTrack, isPlaying, togglePlayPause, setIsPlaying } = useAudio();
    const audioRef = useRef<HTMLAudioElement>(null);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [volume, setVolume] = useState(1);

    useEffect(() => {
        if (audioRef.current && currentTrack) {
            if (audioRef.current.src !== currentTrack.src) {
                audioRef.current.src = currentTrack.src;
            }
            isPlaying ? audioRef.current.play() : audioRef.current.pause();
        }
    }, [isPlaying, currentTrack]);

    useEffect(() => {
        const audio = audioRef.current;
        if (audio) {
            const setAudioData = () => {
                setDuration(audio.duration);
                setCurrentTime(audio.currentTime);
            };
            const setAudioTime = () => setCurrentTime(audio.currentTime);
            const handleEnded = () => setIsPlaying(false);

            audio.addEventListener('loadeddata', setAudioData);
            audio.addEventListener('timeupdate', setAudioTime);
            audio.addEventListener('ended', handleEnded);

            return () => {
                audio.removeEventListener('loadeddata', setAudioData);
                audio.removeEventListener('timeupdate', setAudioTime);
                audio.removeEventListener('ended', handleEnded);
            };
        }
    }, [setIsPlaying]);
    
    const formatTime = (time: number) => {
        if (isNaN(time)) return '0:00';
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    const onProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (audioRef.current) {
            audioRef.current.currentTime = Number(e.target.value);
            setCurrentTime(audioRef.current.currentTime);
        }
    };

    const onVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newVolume = Number(e.target.value);
        setVolume(newVolume);
        if(audioRef.current) {
            audioRef.current.volume = newVolume;
        }
    }

    if (!currentTrack) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-stokyds-red text-white p-3 shadow-2xl z-50 transform transition-transform duration-300 translate-y-0">
            <audio ref={audioRef} preload="metadata" />
            <div className="container mx-auto flex items-center gap-4">
                <img src={currentTrack.cover} alt={currentTrack.title} className="w-14 h-14 rounded-md object-cover" />
                <div className="flex-grow">
                    <span className="font-bold text-sm">{currentTrack.title}</span>
                    <div className="flex items-center gap-2">
                         <span className="text-xs">{formatTime(currentTime)}</span>
                        <input
                            type="range"
                            value={currentTime}
                            max={duration || 0}
                            onChange={onProgressChange}
                            className="w-full h-1.5 bg-red-300 rounded-lg appearance-none cursor-pointer"
                        />
                         <span className="text-xs">{formatTime(duration)}</span>
                    </div>
                </div>
                <button onClick={togglePlayPause} className="p-2 rounded-full bg-white text-stokyds-red hover:bg-stokyds-gray transition-colors">
                    {isPlaying ? <PauseIcon className="w-6 h-6" /> : <PlayIcon className="w-6 h-6" />}
                </button>
                <div className="flex items-center gap-2">
                    <VolumeIcon className="w-5 h-5" />
                    <input type="range" min="0" max="1" step="0.05" value={volume} onChange={onVolumeChange} className="w-20 h-1.5 bg-red-300 rounded-lg appearance-none cursor-pointer" />
                </div>
            </div>
        </div>
    );
};

export default BottomAudioPlayer;