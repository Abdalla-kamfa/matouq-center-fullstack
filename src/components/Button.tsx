import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'white';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 border text-base font-medium rounded-md transition-all duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "border-transparent text-white bg-orange-600 hover:bg-orange-700 focus:ring-orange-500",
    secondary: "border-transparent text-white bg-blue-900 hover:bg-blue-800 focus:ring-blue-900",
    outline: "border-blue-900 text-blue-900 bg-transparent hover:bg-blue-50 focus:ring-blue-900",
    white: "border-transparent text-blue-900 bg-white hover:bg-gray-100 focus:ring-white",
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;