import React from 'react';

interface H3Props {
  children: React.ReactNode;
  className?: string;
}

export const H3: React.FC<H3Props> = ({ 
  children, 
  className = '', 
}) => { 
  return (
    <h3 className={`text-3xl font-bold mb-6 ${className}`}>
      {children}
    </h3>
  );
};