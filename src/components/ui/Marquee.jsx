const Marquee = ({ items, className = '' }) => {
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{
        maskImage:
          'linear-gradient(90deg, transparent, black 10%, black 90%, transparent)',
        WebkitMaskImage:
          'linear-gradient(90deg, transparent, black 10%, black 90%, transparent)',
      }}
    >
      <div className="flex w-max animate-marquee whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="mx-6 inline-flex items-center gap-3 font-mono text-sm uppercase tracking-widest text-ink-500 dark:text-ink-300"
          >
            <span className="h-1 w-1 rounded-full bg-accent-600" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
