import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  primary?: boolean;
  large?: boolean;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  href?: string;
};

const Button: React.FC<ButtonProps> = ({
  children,
  primary = true,
  large = false,
  className = '',
  onClick,
  type = 'button',
  href,
}) => {
  const buttonClasses = `
    ${primary ? 'bg-primary text-white' : 'bg-white text-primary border border-primary'} 
    ${large ? 'text-base md:text-lg py-3 md:py-4 px-6 md:px-8' : 'text-sm py-2 px-4'} 
    font-bold rounded-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1
    ${className}
  `;

  if (href) {
    return (
      <a
        href={href}
        className={buttonClasses}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;