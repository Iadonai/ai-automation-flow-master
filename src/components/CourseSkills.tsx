
import React from 'react';
import { Bot, Code, Database, Globe, Server } from 'lucide-react';

const CourseSkills = () => {
  const skills = [
    {
      icon: <Code className="w-8 h-8 text-cyber-bright-green" />,
      title: "Automações completas",
      description: "Domine o n8n e o Make para criar fluxos de trabalho sem programar"
    },
    {
      icon: <Bot className="w-8 h-8 text-cyber-bright-green" />,
      title: "Agentes multimodais",
      description: "Construa agentes que processam imagem, vídeo, voz e dados"
    },
    {
      icon: <Database className="w-8 h-8 text-cyber-bright-green" />,
      title: "RAGs e Embeddings",
      description: "Trabalhe com embeddings, RAGs e consultas com SQL"
    },
    {
      icon: <Globe className="w-8 h-8 text-cyber-bright-green" />,
      title: "Integração de APIs",
      description: "Integre APIs reais: Pinecone, Redis, Supabase, Evolution API"
    },
    {
      icon: <Server className="w-8 h-8 text-cyber-bright-green" />,
      title: "Deploy profissional",
      description: "Implante com Docker, ngrok, Portainer e Cloudflare"
    }
  ];

  return (
    <section id="skills" className="section circuit-bg bg-gradient-to-b from-cyber-dark to-cyber-dark/95">
      <div className="container-custom">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">O Que Você <span className="glow-text">Vai Aprender</span></h2>
          <p className="text-lg text-cyber-gray">
            Habilidades práticas para automatizar processos e criar soluções de IA sem precisar programar
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="bg-cyber-dark/70 p-6 rounded-lg border border-cyber-bright-green/20 hover:border-cyber-bright-green/40 transition-all duration-300"
            >
              <div className="mb-4">
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{skill.title}</h3>
              <p className="text-cyber-gray">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseSkills;
