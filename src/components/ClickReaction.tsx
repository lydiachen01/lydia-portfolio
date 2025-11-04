import { useEffect, useRef, useState } from 'react';

interface Bar {
  id: number;
  x: number;
  y: number;
  angle: number;
  duration: number;
  tx: number;
  ty: number;
  animated: boolean;
  opacity: number;
}

interface ClickReactionProps {
  clickOffset?: number;
}

const ClickReaction: React.FC<ClickReactionProps> = ({ clickOffset = 0 }) => {
  const [bars, setBars] = useState<Bar[]>([]);
  const nextIdRef = useRef(0);
  const distance = 30; // How far each bar moves

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const x = event.clientX - clickOffset;
      const y = event.clientY - clickOffset;

      const barConfigs = [
        { angle: 300, duration: 300 },
        { angle: 250, duration: 300 },
        { angle: 200, duration: 300 },
        { angle: 150, duration: 300 },
      ];

      const newBars: Bar[] = barConfigs.map((config) => {
        const angleRad = (config.angle * Math.PI) / 180;
        const tx = Math.cos(angleRad) * distance;
        const ty = Math.sin(angleRad) * distance;

        return {
          id: nextIdRef.current++,
          x,
          y,
          angle: config.angle,
          duration: config.duration,
          tx,
          ty,
          animated: false,
          opacity: 0, // start hidden
        };
      });

      // Add new bars initially (hidden, not moving)
      setBars(prev => [...prev, ...newBars]);

      // Fade in after 50ms
      setTimeout(() => {
        setBars(prev =>
          prev.map(b =>
            newBars.find(nb => nb.id === b.id)
              ? { ...b, opacity: 1 }
              : b
          )
        );
      }, 0);

      // Trigger movement (can start same time as fade-in or after)
      setTimeout(() => {
        setBars(prev =>
          prev.map(b =>
            newBars.find(nb => nb.id === b.id)
              ? { ...b, animated: true }
              : b
          )
        );
      }, 20);

      // Remove bars after animation completes
      setTimeout(() => {
        setBars(prev =>
          prev.filter(b => !newBars.some(nb => nb.id === b.id))
        );
      }, barConfigs[0].duration + (barConfigs[0].duration * 0.2) );
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [clickOffset]);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {bars.map(bar => (
        <div
          key={bar.id}
          className="absolute w-2.5 h-1"
          style={{
            left: `${bar.x}px`,
            top: `${bar.y}px`,
            backgroundColor: 'var(--dark-blue)',
            opacity: bar.opacity,
            transform: `
              translate(${bar.animated ? bar.tx : 0}px, ${bar.animated ? bar.ty : 0}px)
              rotate(${bar.angle}deg)
              scaleX(${bar.animated ? 0.5 : 2.5})
            `,
            transition: `
              transform ${bar.duration * 0.001}s ease-out,
              opacity 0.2s ease-in
            `,
          }}
        />
      ))}
    </div>
  );
};

export default ClickReaction;
