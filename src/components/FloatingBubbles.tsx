import { useEffect, useState } from 'react';

interface Bubble {
  id: number;
  left: string;
  size: string;
  delay: string;
  duration: string;
}

export default function FloatingBubbles() {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  useEffect(() => {
    // Generate bubbles once on client mount with random spacing/speeds
    const items: Bubble[] = Array.from({ length: 22 }).map((_, i) => {
      const sizeNum = Math.floor(Math.random() * 32) + 8; // 8px to 40px
      const durationSec = Math.floor(Math.random() * 12) + 10; // 10s to 22s
      const delaySec = Math.random() * 15; // 0s to 15s delay
      return {
        id: i,
        left: `${Math.random() * 100}%`,
        size: `${sizeNum}px`,
        delay: `${delaySec}s`,
        duration: `${durationSec}s`,
      };
    });
    setBubbles(items);
  }, []);

  return (
    <div 
      className="fixed inset-0 pointer-events-none overflow-hidden z-[4]"
      id="bg-floating-bubbles-container"
    >
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          id={`floating-bubble-${bubble.id}`}
          className="absolute rounded-full border border-white/20 bg-white/5 opacity-50"
          style={{
            left: bubble.left,
            width: bubble.size,
            height: bubble.size,
            bottom: '-50px',
            animation: `floatBubble ${bubble.duration} linear infinite`,
            animationDelay: bubble.delay,
            filter: 'blur(0.5px)',
            boxShadow: 'inset 0 0 10px rgba(255,255,255,0.25), 0 0 5px rgba(255,255,255,0.1)',
          }}
        />
      ))}
    </div>
  );
}
