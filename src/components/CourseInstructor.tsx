
import React from 'react';

const CourseInstructor = () => {
  return (
    <section id="instructor" className="section bg-cyber-dark/80">
      <div className="container-custom">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Sobre o <span className="glow-text">Instrutor</span></h2>
        </div>

        <div className="max-w-3xl mx-auto bg-cyber-dark/70 rounded-lg p-8 border border-cyber-bright-green/20">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-cyber-bright-green/50">
              <div className="w-full h-full bg-gradient-to-br from-cyber-green to-cyber-bright-green/70 flex items-center justify-center">
                <span className="text-4xl font-bold text-white">DB</span>
              </div>
            </div>
            
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3">Daniel Broker</h3>
              <p className="text-cyber-gray mb-4">
                Mackenzista e especialista em dados, com mais de 6 anos de experiência prática em engenharia, automação, RPA e análise preditiva. Fundador da Data Analytics, já formou mais de 300 alunos em mais de 30 países. Foco em soluções práticas com Python, R, Make, Power BI e APIs modernas.
              </p>
              
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-cyber-bright-green/10 text-cyber-bright-green text-sm rounded-full">
                  Especialista em Automação
                </span>
                <span className="px-3 py-1 bg-cyber-bright-green/10 text-cyber-bright-green text-sm rounded-full">
                  Engenharia de Dados
                </span>
                <span className="px-3 py-1 bg-cyber-bright-green/10 text-cyber-bright-green text-sm rounded-full">
                  IA Aplicada
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
