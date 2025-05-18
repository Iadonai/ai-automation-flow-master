
import React from 'react';
import AnimatedMarquee from './AnimatedMarquee';

interface TechLogosMarqueeProps {
  reverse?: boolean;
}

const TechLogosMarquee: React.FC<TechLogosMarqueeProps> = ({ reverse = false }) => {
  const techItems = [
    <div key="openai" className="flex items-center gap-2">
      <img src="/lovable-uploads/f717abd2-51dd-4817-95cb-d5c0aec14216.png" alt="OpenAI" className="h-8" />
    </div>,
    <div key="make" className="flex items-center gap-2">
      <img src="/lovable-uploads/4e7c477f-7406-41f3-8179-14df001f2c92.png" alt="Make" className="h-6" />
    </div>,
    <div key="n8n" className="flex items-center gap-2">
      <img src="/lovable-uploads/3124b71f-8603-40f1-8880-30bc08d93f99.png" alt="n8n" className="h-6" />
    </div>,
    <div key="deepseek" className="flex items-center gap-2">
      <img src="/lovable-uploads/ffc4c65e-bfdd-4608-a4ed-8a92bc200eba.png" alt="Deepseek" className="h-6" />
    </div>,
    <div key="perplexity" className="flex items-center gap-2">
      <img src="/lovable-uploads/8cf0efd0-1797-4d31-849d-e861bf265b9b.png" alt="Perplexity" className="h-6" />
    </div>,
    <div key="claude" className="flex items-center gap-2">
      <img src="/lovable-uploads/8ee09e00-a19a-44c6-89df-ebc951077e65.png" alt="Claude" className="h-6" />
    </div>,
    <div key="cloudflare" className="flex items-center gap-2">
      <img src="/lovable-uploads/c7308971-93d6-4085-8e37-7983afaef9c1.png" alt="Cloudflare" className="h-6" />
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
