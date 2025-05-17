
import React from 'react';
import { Check, Award, Target, Lightbulb, FileText, Users } from 'lucide-react';

const CourseBenefitsExtended = () => {
  const achievements = [
    {
      title: "Crie Agentes de IA Multimodais",
      description: "Construa assistentes inteligentes que entendem voz, imagem, vídeo e texto. Tudo isso sem escrever uma linha de código."
    },
    {
      title: "Automatize Tarefas Complexas",
      description: "Conecte WhatsApp, Gmail, Google Sheets, APIs externas e muito mais em fluxos automatizados que funcionam 24/7."
    },
    {
      title: "Implemente Recursos Avançados",
      description: "Utilize tecnologias como RAGs, embeddings, Docker, ngrok e SQL para criar automações de alto nível mesmo sem ser programador."
    },
    {
      title: "Infraestrutura Profissional",
      description: "Aprenda a configurar seu próprio servidor com domínio, Cloudflare, Portainer e ambiente Docker replicável."
    },
    {
      title: "Integrações de Alto Valor",
      description: "Conecte GPT, Pinecone, Redis, Supabase, Qdrant e outras ferramentas de IA e dados para criar experiências realmente inteligentes."
    },
    {
      title: "Templates Prontos para Ganhar Tempo",
      description: "Tenha acesso à nossa biblioteca exclusiva com automações prontas, como: Agente de Agendamento para Clínicas, Template de Agendamento Imobiliário, Prospecção Automática de Leads e Automação de Tarefas de SEO com IA."
    }
  ];

  const targetAudience = [
    {
      title: "Empreendedores e Donos de Negócios",
      description: "que precisam automatizar processos, reduzir custos e escalar atendimento."
    },
    {
      title: "Profissionais de Marketing e Vendas",
      description: "que querem criar automações inteligentes para prospecção, nutrição e fechamento."
    },
    {
      title: "Consultores e Freelancers",
      description: "que desejam entregar soluções completas, práticas e de alto valor aos seus clientes."
    },
    {
      title: "Entusiastas de IA e Automação",
      description: "interessados em dominar as novas ferramentas sem se perder em código ou complexidade técnica."
    },
    {
      title: "Iniciantes em Tecnologia",
      description: "que desejam aprender habilidades práticas, aplicáveis e muito valorizadas no mercado."
    }
  ];

  const courseDifferentials = [
    {
      title: "100% Prático e Aplicável",
      description: "Nada de teoria solta. Você vai aprender construindo projetos reais, com impacto direto no seu dia a dia."
    },
    {
      title: "Projetos Completos",
      description: "E-mails automáticos, agentes de IA, sistemas de CRM, análise de sentimentos, chatbots e muito mais."
    },
    {
      title: "Conteúdo Exclusivo",
      description: "Módulo bônus com Flowise, automações de SEO, análise de sentimentos e integração com GPTs personalizados."
    },
    {
      title: "Biblioteca de Templates Profissionais",
      description: "Acesse automações prontas para clínicas, vendas, atendimento, agendamentos e mais."
    },
    {
      title: "Suporte e Comunidade",
      description: "Tire dúvidas diretamente com o instrutor e troque experiências com outros alunos em um grupo exclusivo."
    },
    {
      title: "Sem Conhecimento Prévio",
      description: "Comece do zero e avance para níveis técnicos com didática clara e projetos guiados passo a passo."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-cyber-dark noise-bg">
      <div className="container-custom">
        {/* Achievements Section */}
        <div className="mb-20">
          <div className="text-center max-w-4xl mx-auto mb-10">
            <div className="flex items-center justify-center mb-3">
              <Award className="text-cyber-bright-green mr-2" size={24} />
              <h2 className="text-3xl md:text-4xl font-bold">O Que Você Vai <span className="glow-text">Conquistar</span></h2>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((item, index) => (
              <div key={index} className="bg-cyber-dark/70 p-6 rounded-lg border border-cyber-bright-green/20 hover:border-cyber-bright-green/40 transition-all duration-300">
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-cyber-bright-green/10 p-2 rounded-full">
                    <Check className="text-cyber-bright-green flex-shrink-0" size={18} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-cyber-gray">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Target Audience Section */}
        <div className="mb-20">
          <div className="text-center max-w-4xl mx-auto mb-10">
            <div className="flex items-center justify-center mb-3">
              <Target className="text-cyber-bright-green mr-2" size={24} />
              <h2 className="text-3xl md:text-4xl font-bold">Para Quem Este Curso Foi <span className="glow-text">Criado</span></h2>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {targetAudience.map((item, index) => (
              <div key={index} className="bg-cyber-dark/70 p-6 rounded-lg border border-cyber-bright-green/20 hover:border-cyber-bright-green/40 transition-all duration-300">
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-cyber-bright-green/10 p-2 rounded-full">
                    <Users className="text-cyber-bright-green flex-shrink-0" size={18} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-cyber-gray">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Course Differentials Section */}
        <div>
          <div className="text-center max-w-4xl mx-auto mb-10">
            <div className="flex items-center justify-center mb-3">
              <Lightbulb className="text-cyber-bright-green mr-2" size={24} />
              <h2 className="text-3xl md:text-4xl font-bold">Diferenciais do <span className="glow-text">Curso</span></h2>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courseDifferentials.map((item, index) => (
              <div key={index} className="bg-cyber-dark/70 p-6 rounded-lg border border-cyber-bright-green/20 hover:border-cyber-bright-green/40 transition-all duration-300">
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-cyber-bright-green/10 p-2 rounded-full">
                    <FileText className="text-cyber-bright-green flex-shrink-0" size={18} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-cyber-gray">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseBenefitsExtended;
