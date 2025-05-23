
import React from 'react';

interface ModuleProps {
  image: string;
  title: string;
  description: string;
}

const ModuleCard: React.FC<ModuleProps> = ({ image, title, description }) => {
  return (
    <div className="module-card h-full">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark/90 to-transparent"></div>
      </div>
      <div className="p-5">
        <h3 className="font-bold text-lg mb-2">{title}</h3>
        <p className="text-cyber-gray text-sm">{description}</p>
      </div>
    </div>
  );
};

interface CourseModulesProps {
  moduleImages: string[];
}

const CourseModules: React.FC<CourseModulesProps> = ({ moduleImages }) => {
  const modules = [
    {
      title: "Boas-Vindas",
      description: "Introdução ao curso e configuração inicial",
      image: moduleImages[0]
    },
    {
      title: "IA Fundamentos e Engenharia de Prompt",
      description: "Princípios básicos de IA e criação de prompts eficientes",
      image: moduleImages[1]
    },
    {
      title: "Make/Integromat: Crie automações sem programar",
      description: "Domine a plataforma Make para automações simples e poderosas",
      image: moduleImages[2]
    },
    {
      title: "Infraestrutura e Instalação via Docker",
      description: "Configure todo o ambiente necessário usando Docker",
      image: moduleImages[3]
    },
    {
      title: "WhatsApp com n8n: Do Básico ao Avançado",
      description: "Integre o WhatsApp às suas automações e fluxos de trabalho",
      image: moduleImages[4]
    },
    {
      title: "Agentes de IA e Multiagentes com n8n",
      description: "Crie agentes inteligentes e sistemas multiagente com n8n",
      image: moduleImages[5]
    },
    {
      title: "Automações de Vídeo e Imagem",
      description: "Crie automações poderosas para processamento de vídeos e imagens usando IA",
      image: "/lovable-uploads/27f7f0f6-287f-4f9f-9fa7-853dcc7d9285.png"
    },
    {
      title: "Inteligência de Mercado com n8n e Instagram",
      description: "Extraia e analise dados do Instagram para insights valiosos",
      image: moduleImages[6]
    },
    {
      title: "Automação para E-commerce com n8n",
      description: "Crie fluxos automatizados para lojas online e marketplaces",
      image: moduleImages[7]
    },
    {
      title: "Flowise",
      description: "Construa aplicações de IA conversacional com interface visual e drag-and-drop",
      image: "/lovable-uploads/19d747d4-53ee-4562-93e1-3472e92e1b15.png"
    },
    {
      title: "Biblioteca de Templates",
      description: "Acesse uma vasta coleção de templates prontos para suas automações",
      image: "/lovable-uploads/61dfcfa1-38d9-4256-9fae-70f492ab8dac.png"
    }
  ];

  return (
    <section id="modules" className="section noise-bg">
      <div className="container-custom">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Conteúdo da <span className="glow-text">Formação</span></h2>
          <p className="text-lg text-cyber-gray">
            Uma trilha completa para você ir do básico ao avançado com IA + Automação.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {modules.map((module, index) => (
            <ModuleCard
              key={index}
              title={module.title}
              description={module.description}
              image={module.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseModules;
