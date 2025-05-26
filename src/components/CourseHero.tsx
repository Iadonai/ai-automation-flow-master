import React from 'react';
import { ChevronRight } from 'lucide-react';

interface CourseHeroProps {
  mainImage: string;
}

const CourseHero: React.FC<CourseHeroProps> = ({ mainImage }) => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src={mainImage} 
          alt="Cursos n8n Completo + Make" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient"></div>
      </div>
      
      <div className="container-custom relative z-10 mt-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
            <span className="block">Dois cursos completos para dominar automação:</span>
            <span className="block glow-text mt-2">n8n Completo</span>
            <span className="block text-make-purple mt-1" style={{ textShadow: '0 0 5px rgba(139, 92, 246, 0.5)' }}>+ Make (Integromat)</span>
          </h1>
          
          <p className="text-lg md:text-xl text-cyber-light/90 mb-8 max-w-3xl mx-auto">
            <span className="text-cyber-bright-green">n8n:</span> Crie agentes de IA rápido, fácil e sem código<br/>
            <span className="text-make-purple">Make:</span> Aprenda a construir automações poderosas sem programar
          </p>
          
          <div className="mt-10">
            <a href="#modules" className="cta-button group">
              <span className="relative z-10 flex items-center justify-center">
                Comece Agora 
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-cyber-green to-cyber-bright-green opacity-0 group-hover:opacity-20 transition-opacity"></span>
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce p-2">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="text-cyber-bright-green"
          >
            <path d="m6 9 6 6 6-6"/>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default CourseHero;
