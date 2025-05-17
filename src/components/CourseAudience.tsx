
import React from 'react';
import { Users, Briefcase, Bot, User, Zap } from 'lucide-react';

const CourseAudience = () => {
  const audiences = [
    {
      icon: <Users className="w-8 h-8 text-cyber-bright-green" />,
      title: "Profissionais de tecnologia",
      description: "Amplie seu conjunto de habilidades com automação e IA sem código"
    },
    {
      icon: <Briefcase className="w-8 h-8 text-cyber-bright-green" />,
      title: "Freelancers e agências de marketing",
      description: "Ofereça soluções avançadas de automação para seus clientes"
    },
    {
      icon: <Bot className="w-8 h-8 text-cyber-bright-green" />,
      title: "Criadores de bots e assistentes inteligentes",
      description: "Expanda suas soluções com agentes multimodais avançados"
    },
    {
      icon: <User className="w-8 h-8 text-cyber-bright-green" />,
      title: "Iniciantes em automação e IA generativa",
      description: "Aprenda desde o zero, sem exigência de conhecimento em programação"
    },
    {
      icon: <Zap className="w-8 h-8 text-cyber-bright-green" />,
      title: "Quem quer integrar IA com produtividade real",
      description: "Aprenda a criar fluxos de trabalho que realmente economizam tempo"
    }
  ];
  
  return (
    <section id="audience" className="section circuit-bg">
      <div className="container-custom">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Para Quem É o <span className="glow-text">Curso</span></h2>
          <p className="text-lg text-cyber-gray">
            Projetado para atender profissionais que buscam automação e IA sem a necessidade de codificar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {audiences.map((audience, index) => (
            <div 
              key={index}
              className="bg-cyber-dark/70 p-6 rounded-lg border border-cyber-bright-green/20 hover:border-cyber-bright-green/40 transition-all duration-300"
            >
              <div className="mb-4">
                {audience.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{audience.title}</h3>
              <p className="text-cyber-gray">{audience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseAudience;
