import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className }) => {
    return (
        <img 
            src="https://i.imgur.com/lz6rvtE.png"
            alt="Stokyds Logo" 
            className={className}
        />
    );
};

export default Logo;
