import { useRef, useState } from 'react';

const SpotlightCard = ({ children, className = '', radius = 320, ...rest }) => {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: -1000, y: -1000 });
  const [opacity, setOpacity] = useState(0);

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={`group relative overflow-hidden rounded-2xl border border-ink-100 dark:border-ink-700/60 bg-paper-50 dark:bg-ink-800/40 transition-colors duration-300 ${className}`}
      {...rest}
    >
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl transition-opacity duration-500"
        style={{
          opacity,
          background: `radial-gradient(${radius}px circle at ${pos.x}px ${pos.y}px, rgba(18, 183, 106, 0.10), transparent 60%)`,
        }}
      />
      <div className="relative">{children}</div>
    </div>
  );
};

export default SpotlightCard;
