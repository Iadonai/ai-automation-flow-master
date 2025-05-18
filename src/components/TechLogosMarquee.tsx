
import React from 'react';
import AnimatedMarquee from './AnimatedMarquee';

interface TechLogosMarqueeProps {
  reverse?: boolean;
}

const TechLogosMarquee: React.FC<TechLogosMarqueeProps> = ({ reverse = false }) => {
  const techItems = [
    <span key="openai" className="text-xl font-bold">OpenAI</span>,
    <span key="make" className="text-xl font-medium text-purple-500">make</span>,
    <span key="n8n" className="text-xl font-medium text-pink-500">n8n</span>,
    <span key="deepseek" className="text-xl font-medium text-blue-400">deepseek</span>,
    <span key="perplexity" className="text-xl font-medium text-teal-400">perplexity</span>,
    <span key="claude" className="text-xl font-medium">Claude</span>,
    <span key="docker" className="text-xl font-medium text-blue-500">Docker</span>,
    <span key="chatgpt" className="text-xl font-medium text-green-500">ChatGPT</span>,
  ];

  return (
    <AnimatedMarquee 
      items={techItems} 
      direction={reverse ? 'right' : 'left'}
      speed={reverse ? 'fast' : 'normal'}
      className={reverse ? 'bg-cyber-dark/90' : ''}
    />
  );
};

export default TechLogosMarquee;
