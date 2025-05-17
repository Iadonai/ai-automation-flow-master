
import React from 'react';
import { Check } from 'lucide-react';

const CourseBenefits = () => {
  const benefits = [
    "Agentes de IA com voz, vídeo e texto",
    "Fluxos com Gmail, WhatsApp, Google Sheets e APIs externas",
    "Instalação via Docker e implantação real em VPS",
    "Criação de chatbots, RAGs e pipelines inteligentes",
    "Sem precisar saber programar"
  ];

  return (
    <section id="benefits" className="section grid-bg bg-cyber-dark">
      <div className="container-custom">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Domine a Automação com IA <span className="glow-text">sem codar uma linha</span></h2>
          <p className="text-lg text-cyber-gray mb-12">
            Aprenda a integrar IA, dados, APIs e automações em um só curso, 100% prático e direto ao ponto.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="feature-item">
              <Check className="check-icon" size={24} />
              <p className="text-lg">{benefit}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 max-w-3xl mx-auto bg-cyber-dark/80 p-6 rounded-lg cyber-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-2">Automação total e <span className="glow-text">integrada</span></h3>
              <p className="text-cyber-gray">
                Aprenda a criar fluxos completos que conectam diferentes ferramentas e fontes de dados - tudo sem precisar escrever código.
              </p>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-2">Domine <span className="glow-text">novas tecnologias</span></h3>
              <p className="text-cyber-gray">
                Crie soluções avançadas com Inteligência Artificial, RAGs, embeddings e Docker em um único lugar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseBenefits;
