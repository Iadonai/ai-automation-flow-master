
import React from 'react';
import AnimatedMarquee from './AnimatedMarquee';
import { ImageIcon, ServerCog, Bot, MessageSquareDot, Star, Workflow } from 'lucide-react';

interface TechLogosMarqueeProps {
  reverse?: boolean;
}

const TechLogosMarquee: React.FC<TechLogosMarqueeProps> = ({ reverse = false }) => {
  const techItems = [
    <div key="openai" className="flex items-center gap-2">
      <ImageIcon className="h-6 w-6" />
      <span className="text-xl font-bold">OpenAI</span>
    </div>,
    <div key="make" className="flex items-center gap-2">
      <ServerCog className="h-6 w-6 text-purple-500" />
      <span className="text-xl font-medium text-purple-500">make</span>
    </div>,
    <div key="n8n" className="flex items-center gap-2">
      <Workflow className="h-6 w-6 text-pink-500" />
      <span className="text-xl font-medium text-pink-500">n8n</span>
    </div>,
    <div key="deepseek" className="flex items-center gap-2">
      <Bot className="h-6 w-6 text-blue-400" />
      <span className="text-xl font-medium text-blue-400">deepseek</span>
    </div>,
    <div key="perplexity" className="flex items-center gap-2">
      <Star className="h-6 w-6 text-teal-400" />
      <span className="text-xl font-medium text-teal-400">perplexity</span>
    </div>,
    <div key="claude" className="flex items-center gap-2">
      <MessageSquareDot className="h-6 w-6 text-amber-500" />
      <span className="text-xl font-medium">Claude</span>
    </div>,
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
