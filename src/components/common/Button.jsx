import MagneticButton from '../ui/MagneticButton';

const variantMap = {
  primary: 'primary',
  secondary: 'outline',
  outline: 'outline',
  ghost: 'ghost',
  accent: 'accent',
};

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  href,
  className = '',
  type,
  ...props
}) => {
  return (
    <MagneticButton
      variant={variantMap[variant] || 'primary'}
      size={size}
      onClick={onClick}
      href={href}
      type={type}
      className={className}
      {...props}
    >
      {children}
    </MagneticButton>
  );
};

export default Button;
