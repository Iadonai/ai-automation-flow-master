
import React from 'react';
import { ChevronRight } from 'lucide-react';

const CourseFooter = () => {
  return (
    <footer className="py-10 relative overflow-hidden circuit-bg">
      <div className="container-custom">
        <div className="text-center max-w-4xl mx-auto mb-8 px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pronto para dominar a automação com IA <span className="glow-text">sem programar?</span>
          </h2>
          <p className="text-lg text-cyber-gray mb-10">
            Construa agentes de IA, automatize fluxos reais e liberte seu tempo com tecnologia prática.
          </p>
          
          <a href="#modules" className="cta-button group inline-flex text-lg">
            <span className="relative z-10 flex items-center justify-center">
              Quero Começar Agora
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </span>
          </a>
        </div>
        
        <div className="max-w-4xl mx-auto mt-16 pt-8 border-t border-cyber-bright-green/20 text-center">
          <p className="text-cyber-gray text-sm">
            &copy; {new Date().getFullYear()} n8n Completo - Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default CourseFooter;
