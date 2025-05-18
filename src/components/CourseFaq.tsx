
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";

const CourseFaq = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const faqItems = [
    {
      id: "faq-1",
      question: "Preciso saber programar para fazer o curso?",
      answer: "Não! O curso é totalmente visual e guiado. Você vai aprender a usar o n8n e outras ferramentas de IA sem escrever código, mesmo lidando com tecnologias avançadas como APIs, RAGs, embeddings e Docker."
    },
    {
      id: "faq-2",
      question: "O curso serve para quem está começando do zero?",
      answer: "Sim. Começamos do básico e avançamos até projetos mais complexos. Mesmo que você nunca tenha ouvido falar em automação ou IA, conseguirá acompanhar e aplicar o que for ensinado."
    },
    {
      id: "faq-3",
      question: "Posso usar isso no meu negócio?",
      answer: "Com certeza! O curso é feito especialmente para quem quer aplicar automações em empresas reais. Seja para agendamento, atendimento, prospecção ou redução de tarefas manuais — você terá templates prontos para começar."
    },
    {
      id: "faq-4",
      question: "O que são os templates inclusos?",
      answer: "São fluxos prontos no n8n que você poderá adaptar e usar imediatamente. Exemplos:\n\n• Agendamento para clínicas e imobiliárias\n• Prospecção automática de leads\n• Automação de SEO com IA\n• CRM com análise de sentimentos"
    },
    {
      id: "faq-5",
      question: "Quanto tempo leva para ver resultados?",
      answer: "Depende do seu ritmo. Em poucos dias você já poderá automatizar tarefas simples. Em algumas semanas, poderá criar agentes de IA completos e fluxos avançados com integrações externas."
    },
    {
      id: "faq-6",
      question: "Preciso de uma máquina potente para acompanhar?",
      answer: "Não. Com um computador comum (com internet), você consegue acompanhar as aulas e fazer as automações locais ou em nuvem (com Docker, se preferir)."
    },
    {
      id: "faq-7",
      question: "E se eu tiver dúvidas durante o curso?",
      answer: "Você terá acesso a uma comunidade exclusiva para alunos, onde poderá tirar dúvidas diretamente com o instrutor e trocar experiências com outros alunos."
    },
    {
      id: "faq-8",
      question: "Por quanto tempo terei acesso ao curso?",
      answer: "O acesso é vitalício, incluindo atualizações futuras e novos templates que forem adicionados ao longo do tempo."
    },
    {
      id: "faq-9",
      question: "Recebo certificado?",
      answer: "Sim. Ao concluir todas as aulas, você receberá um certificado de conclusão, válido para comprovar sua nova habilidade."
    }
  ];

  return (
    <section id="faq" className="py-16 md:py-24 relative circuit-bg">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ❓ Principais Dúvidas <span className="glow-text">(FAQ)</span>
          </h2>
          <p className="text-lg text-cyber-gray mb-8 max-w-3xl mx-auto">
            Tire suas dúvidas sobre o curso e como ele pode transformar sua forma de trabalhar com automação e IA
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-cyber-dark/70 border border-cyber-bright-green/20 rounded-lg p-6 shadow-lg">
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item) => (
              <AccordionItem 
                key={item.id} 
                value={item.id}
                className="border border-cyber-bright-green/20 rounded-lg px-5 overflow-hidden bg-cyber-dark/50"
              >
                <AccordionTrigger className="py-4 text-left hover:no-underline">
                  <span className="text-lg font-medium">🔹 {item.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-cyber-gray pb-4 pt-2 whitespace-pre-line">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default CourseFaq;
