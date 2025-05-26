
import React from 'react';
import { ChevronRight, ArrowRight, BadgePercent } from 'lucide-react';

const CourseFooter = () => {
  return (
    <footer className="py-10 relative overflow-hidden circuit-bg">
      <div className="container-custom">
        <div className="text-center max-w-4xl mx-auto mb-12 px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Pronto para dominar <span className="glow-text">n8n</span> + <span className="text-make-purple">Make</span> sem programar?
          </h2>
          <p className="text-lg text-cyber-gray mb-6">
            Dois cursos completos: construa agentes de IA com <span className="text-cyber-bright-green">n8n</span> e crie automações poderosas com <span className="text-make-purple">Make</span>. Liberte seu tempo com tecnologia prática.
          </p>
          
          {/* Pricing Box */}
          <div className="mt-8 mb-10 p-6 bg-cyber-dark/70 border border-cyber-bright-green/30 rounded-lg shadow-lg max-w-md mx-auto relative overflow-hidden">
            {/* Launch Badge */}
            <div className="absolute -right-12 top-6 bg-cyber-bright-green text-cyber-dark transform rotate-45 px-12 py-1 text-sm font-bold shadow-lg">
              Lançamento
            </div>
            
            <h3 className="text-2xl font-bold mb-2 text-white">
              <span className="text-cyber-bright-green">n8n Completo</span> + <span className="text-make-purple">Make</span>
            </h3>
            
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="text-cyber-gray line-through text-lg">R$297</span>
              <span className="text-cyber-bright-green font-bold text-4xl">R$97</span>
            </div>
            
            <p className="text-cyber-gray text-sm mb-6 flex items-center justify-center gap-2">
              <BadgePercent size={16} className="text-cyber-bright-green" />
              <span>Preço promocional por tempo limitado</span>
            </p>
            
            <a 
              href="https://pay.kiwify.com.br/9UkelFt" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block w-full bg-cyber-green hover:bg-cyber-bright-green text-white py-3 px-6 rounded-md transition-all shadow-lg border border-cyber-bright-green/50 group"
            >
              <span className="flex items-center justify-center">
                Garantir Minha Vaga Agora
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </span>
            </a>
          </div>
          
          <a href="#modules" className="cta-button group inline-flex text-lg mt-6">
            <span className="relative z-10 flex items-center justify-center">
              Conhecer o Conteúdo
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </span>
          </a>
        </div>
        
        <div className="max-w-4xl mx-auto mt-16 pt-8 border-t border-cyber-bright-green/20 text-center">
          <p className="text-cyber-gray text-sm">
            &copy; {new Date().getFullYear()} <span className="text-cyber-bright-green">n8n Completo</span> + <span className="text-make-purple">Make</span> - Rafael Borges - Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default CourseFooter;
