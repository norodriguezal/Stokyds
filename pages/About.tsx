import React from 'react';
import Logo from '../components/Logo';

const About: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto bg-white p-10 rounded-lg shadow-xl text-center">
            <div className="w-24 h-24 mx-auto mb-4 flex items-center justify-center">
               <Logo className="h-20 w-auto" />
            </div>
            <h1 className="text-4xl font-bold text-stokyds-red mb-4">Acerca de Stokyds</h1>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                En Stokyds, creemos en el poder de las historias para despertar la imaginación, fomentar la creatividad y enseñar valiosas lecciones de vida. Nuestra misión es crear un espacio digital seguro, divertido y enriquecedor para que niños y familias puedan explorar juntos un universo de cuentos, aventuras y juegos.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
                Queremos ser la chispa que enciende el amor por la lectura y el aprendizaje, ofreciendo contenido de alta calidad que entretiene y educa. Cada cuento, audiolibro y juego está pensado para inspirar curiosidad y alegría en los más pequeños. ¡Gracias por ser parte de nuestra aventura!
            </p>
        </div>
    );
};

export default About;