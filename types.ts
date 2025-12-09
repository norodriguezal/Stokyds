import React from 'react';

export type Language = 'es' | 'en' | 'qu';

export interface Story {
    id: string;
    title: { [key in Language]?: string };
    author: { [key in Language]?: string };
    cover: string;
    content: { [key in Language]?: string };
    illustrations: string[];
    audioSrc?: { [key in Language]?: string };
    audioDuration?: { [key in Language]?: string };
}

export interface Comic {
    id: string;
    title: string;
    author: string;
    cover: string;
    pages: string[]; // Image URLs for each page
    audioSrc?: string;
    audioDuration?: string;
}

export interface Audiobook {
    id: string;
    title: string;
    author: string;
    cover: string;
    audioSrc: string;
    transcript: string;
}

export interface Game {
    id: string;
    title: string;
    description: string;
    cover: string;
    category: 'Juegos de Memoria' | 'Juegos de Lenguaje y Lógica';
    component: React.ComponentType;
}