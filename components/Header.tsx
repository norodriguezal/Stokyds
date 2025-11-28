import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinkClass = ({ isActive }: { isActive: boolean }) =>
        `block py-2 px-3 rounded ${isActive ? 'bg-stokyds-gray text-stokyds-text' : 'hover:bg-stokyds-red-dark hover:text-white'} transition-colors duration-200`;

    const navLinks = [
        { to: '/', text: 'Inicio' },
        { to: '/stories', text: 'Cuentos' },
        { to: '/comics', text: 'Cómics' },
        { to: '/minigames', text: 'Minijuegos' },
        { to: '/about', text: 'Acerca de' },
    ];

    return (
        <header className="bg-stokyds-red text-white shadow-lg sticky top-0 z-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <NavLink to="/" className="flex items-center space-x-2">
                            <Logo className="h-12 w-auto" />
                            <span className="font-black text-2xl tracking-tight">Stokyds</span>
                        </NavLink>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navLinks.map(link => (
                                <NavLink key={link.to} to={link.to} className={navLinkClass}>
                                    {link.text}
                                </NavLink>
                            ))}
                        </div>
                    </div>
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-stokyds-red-dark focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        >
                            <span className="sr-only">Abrir menú principal</span>
                            {isMenuOpen ? (
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                         {navLinks.map(link => (
                            <NavLink key={link.to} to={link.to} className={navLinkClass} onClick={() => setIsMenuOpen(false)}>
                                {link.text}
                            </NavLink>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;