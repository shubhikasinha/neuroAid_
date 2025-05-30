import React from 'react';

const Button = ({ 
  children, 
  size = 'default', 
  className = '', 
  ...props 
}) => {
  const sizeClasses = {
    default: 'px-4 py-2',
    sm: 'px-3 py-1.5 text-sm',
    lg: 'px-6 py-3 text-lg',
  };

  return (
    <button
      className={`inline-flex items-center justify-center rounded-full font-medium transition-colors 
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 
        disabled:pointer-events-none disabled:opacity-50 
        ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button; 