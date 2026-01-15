import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'whatsapp';
  className?: string;
  onClick?: () => void;
  href?: string;
  target?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  onClick,
  href,
  target
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 border text-base font-medium rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "border-transparent text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-500 shadow-md",
    secondary: "border-transparent text-blue-900 bg-amber-400 hover:bg-amber-500 focus:ring-amber-400 shadow-md",
    outline: "border-blue-700 text-blue-700 bg-transparent hover:bg-blue-50 focus:ring-blue-500",
    whatsapp: "border-transparent text-white bg-green-600 hover:bg-green-700 focus:ring-green-500 shadow-lg"
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} target={target} className={combinedClasses} rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedClasses}>
      {children}
    </button>
  );
};