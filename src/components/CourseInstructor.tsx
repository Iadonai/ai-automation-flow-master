
import React from 'react';
import { Linkedin, Youtube, Instagram } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';

const CourseInstructor = () => {
  return (
    <section id="instructor" className="section bg-cyber-dark/80 py-20">
      <div className="container-custom">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Sobre o <span className="glow-text">Instrutor</span></h2>
        </div>

        <div className="max-w-4xl mx-auto bg-cyber-dark/70 rounded-lg p-8 border border-cyber-bright-green/20">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-full md:w-auto flex flex-col items-center gap-4">
              <Avatar className="w-40 h-40 rounded-full overflow-hidden border-2 border-cyber-bright-green/50">
                <AvatarImage src="/lovable-uploads/516c474f-ec0a-4688-b06c-9a10961b623a.png" alt="Rafael Borges" className="object-cover" />
                <AvatarFallback className="w-full h-full bg-gradient-to-br from-cyber-green to-cyber-bright-green/70 flex items-center justify-center">
                  <span className="text-4xl font-bold text-white">RB</span>
                </AvatarFallback>
              </Avatar>
              
              <div className="flex items-center justify-center gap-4 mt-2">
                <a href="https://www.linkedin.com/in/rafael-de-oliveira-borges-engenhariadedados/" target="_blank" rel="noopener noreferrer" className="text-cyber-light hover:text-cyber-bright-green transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="https://www.youtube.com/@Rafaelborges-MVP" target="_blank" rel="noopener noreferrer" className="text-cyber-light hover:text-cyber-bright-green transition-colors">
                  <Youtube size={24} />
                </a>
                <a href="https://www.instagram.com/rafael_borges_mvp/" target="_blank" rel="noopener noreferrer" className="text-cyber-light hover:text-cyber-bright-green transition-colors">
                  <Instagram size={24} />
                </a>
              </div>
            </div>
            
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-2">Rafael Borges</h3>
              <p className="text-cyber-gray mb-2 text-sm">Analista de Dados | No-Code | Engenheiro de Dados | Mackenzista</p>
              <p className="text-cyber-gray mb-4">
                Mackenzista, especialista em dados com sólida experiência em engenharia, análise e automação de processos. 
                Com mais de 6 anos em projetos complexos de dados em empresas como Bradesco e Allcare Gestora de Saúde.
                Fundador da Data Analytcs Treinamentos, com expertise em dashboards, Python, R, RPA, Make (Integromat), 
                Power BI e integração via APIs.
              </p>
              
              <p className="text-cyber-gray mb-4">
                Lidera projetos de automação de dados, NLP, análise preditiva e desenvolvimento de pipelines ETL.
                Já atuou na criação de redes antifraude, implantação de robôs com UiPath e estruturação de data 
                warehouses corporativos.
              </p>
              
              <div className="flex flex-wrap gap-3 mt-4">
                <span className="px-3 py-1 bg-cyber-bright-green/10 text-cyber-bright-green text-sm rounded-full">
                  Automação de Dados
                </span>
                <span className="px-3 py-1 bg-cyber-bright-green/10 text-cyber-bright-green text-sm rounded-full">
                  Engenharia de Dados
                </span>
                <span className="px-3 py-1 bg-cyber-bright-green/10 text-cyber-bright-green text-sm rounded-full">
                  No-Code & Low-Code
                </span>
                <span className="px-3 py-1 bg-cyber-bright-green/10 text-cyber-bright-green text-sm rounded-full">
                  Business Intelligence
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseInstructor;
