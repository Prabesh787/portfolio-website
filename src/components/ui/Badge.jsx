const Badge = ({ children, variant = 'default', className = '' }) => {
  const variants = {
    default:
      'bg-paper-200 text-ink-700 dark:bg-ink-700/40 dark:text-paper-200 border border-ink-100 dark:border-ink-700/60',
    primary:
      'bg-accent-50 text-accent-700 dark:bg-accent-900/30 dark:text-accent-300 border border-accent-100 dark:border-accent-900/40',
    mono:
      'bg-transparent text-ink-500 dark:text-ink-300 border border-ink-200 dark:border-ink-700/60 font-mono',
    success:
      'bg-emerald-50 text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-300 border border-emerald-100 dark:border-emerald-900/40',
    warning:
      'bg-amber-50 text-amber-700 dark:bg-amber-900/20 dark:text-amber-300 border border-amber-100 dark:border-amber-900/40',
    danger:
      'bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-300 border border-red-100 dark:border-red-900/40',
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-medium tracking-wide ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
};

export default Badge;
