
import React from 'react';
import { CheckCircle, Shield, Clock, Users } from 'lucide-react';

const CourseGuarantee = () => {
  return (
    <section id="guarantee" className="section grid-bg">
      <div className="container-custom">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossa <span className="glow-text">Garantia</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-cyber-dark/50 p-6 rounded-lg border border-cyber-bright-green/20">
            <div className="flex items-start gap-4">
              <CheckCircle className="text-cyber-bright-green flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="text-xl font-bold mb-2">Curso com aplicação real</h3>
                <p className="text-cyber-gray">Conteúdo 100% prático e focado em resultados, sem teoria desnecessária</p>
              </div>
            </div>
          </div>
          
          <div className="bg-cyber-dark/50 p-6 rounded-lg border border-cyber-bright-green/20">
            <div className="flex items-start gap-4">
              <Users className="text-cyber-bright-green flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="text-xl font-bold mb-2">Comunidade exclusiva</h3>
                <p className="text-cyber-gray">Acesso a uma comunidade de suporte para tirar dúvidas e trocar experiências</p>
              </div>
            </div>
          </div>
          
          <div className="bg-cyber-dark/50 p-6 rounded-lg border border-cyber-bright-green/20">
            <div className="flex items-start gap-4">
              <Clock className="text-cyber-bright-green flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="text-xl font-bold mb-2">Acesso vitalício</h3>
                <p className="text-cyber-gray">Conteúdo disponível para sempre, incluindo todas as atualizações futuras</p>
              </div>
            </div>
          </div>
          
          <div className="bg-cyber-dark/50 p-6 rounded-lg border border-cyber-bright-green/20">
            <div className="flex items-start gap-4">
              <Shield className="text-cyber-bright-green flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="text-xl font-bold mb-2">Garantia de 7 dias</h3>
                <p className="text-cyber-gray">Garantia incondicional de 7 dias. Se não gostar, devolvemos seu investimento</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseGuarantee;
