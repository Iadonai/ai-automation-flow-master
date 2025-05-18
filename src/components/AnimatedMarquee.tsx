
import React, { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedMarqueeProps {
  items: ReactNode[];
  direction?: 'left' | 'right';
  speed?: 'slow' | 'normal' | 'fast';
  className?: string;
}

const AnimatedMarquee: React.FC<AnimatedMarqueeProps> = ({
  items,
  direction = 'left',
  speed = 'normal',
  className,
}) => {
  // Define a velocidade da animação com base no parâmetro
  const getDuration = () => {
    switch (speed) {
      case 'slow': return '60s';
      case 'fast': return '20s';
      default: return '40s';
    }
  };

  // Define a direção da animação
  const getDirection = () => {
    return direction === 'right' ? 'marquee-right' : 'marquee-left';
  };

  return (
    <div className={cn("w-full overflow-hidden bg-cyber-dark/70 py-4 border-y border-cyber-bright-green/20", className)}>
      <div 
        className="flex items-center whitespace-nowrap"
        style={{ 
          animation: `${getDirection()} ${getDuration()} linear infinite`,
        }}
      >
        {/* Duplicamos os itens para criar um fluxo contínuo */}
        {[...items, ...items].map((item, index) => (
          <div key={index} className="mx-10 inline-flex items-center">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedMarquee;
