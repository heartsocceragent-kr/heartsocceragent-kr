import React from 'react';

interface H2Props {
  children: React.ReactNode;
  className?: string;
}

export const H2: React.FC<H2Props> = ({ 
  children, 
  className = '', 
}) => { 
  return (
    <h2 className={`text-5xl font-bold mb-10 ${className}`}>
      {children}
    </h2>
  );
};