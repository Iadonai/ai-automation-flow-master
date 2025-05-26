
import React from 'react';
import { Check } from 'lucide-react';

const CourseBenefits = () => {
  const benefits = [
    { text: "Agentes de IA com voz, vídeo e texto no n8n", course: "n8n" },
    { text: "Automações poderosas com Make (Integromat)", course: "make" },
    { text: "Fluxos com Gmail, WhatsApp, Google Sheets e APIs externas", course: "both" },
    { text: "Instalação via Docker e implantação real em VPS", course: "n8n" },
    { text: "Criação de chatbots, RAGs e pipelines inteligentes", course: "n8n" },
    { text: "Sem precisar saber programar", course: "both" }
  ];

  const getCourseColor = (course: string) => {
    switch (course) {
      case "n8n": return "text-cyber-bright-green";
      case "make": return "text-make-purple";
      default: return "text-white";
    }
  };

  return (
    <section id="benefits" className="section grid-bg bg-cyber-dark">
      <div className="container-custom">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white">
            Domine a Automação com IA <span className="glow-text">em dois cursos completos</span>
          </h2>
          <p className="text-lg text-cyber-gray mb-12">
            Aprenda <span className="text-cyber-bright-green font-semibold">n8n</span> e <span className="text-make-purple font-semibold">Make (Integromat)</span> para integrar IA, dados, APIs e automações, 100% prático e direto ao ponto.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="feature-item">
              <Check className="check-icon" size={24} />
              <p className={`text-lg ${getCourseColor(benefit.course)}`}>{benefit.text}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 max-w-3xl mx-auto bg-cyber-dark/80 p-6 rounded-lg cyber-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-2 text-white">
                Automação total com <span className="glow-text">n8n</span> + <span className="text-make-purple">Make</span>
              </h3>
              <p className="text-cyber-gray">
                Aprenda as duas principais ferramentas de automação: <span className="text-cyber-bright-green">n8n</span> para agentes de IA avançados e <span className="text-make-purple">Make</span> para automações visuais poderosas.
              </p>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-2 text-white">
                Domine <span className="glow-text">novas tecnologias</span>
              </h3>
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
