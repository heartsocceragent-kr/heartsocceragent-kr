import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'default' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'default',
  size = 'md',
  fullWidth = false,
  className = '',
  disabled = false,
  ...props
}) => {
  const baseStyles = 'font-semibold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary: 'bg-[#6a5094] text-white hover:bg-[#4a5f9d]',
    default: 'bg-gray-200 text-gray-700 hover:bg-gray-300',
    outline: 'bg-transparent border-2 border-[#6a5094] text-[#6a5094] hover:bg-[#4a5f9d] hover:text-white',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const widthClass = fullWidth ? 'w-full' : '';

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};