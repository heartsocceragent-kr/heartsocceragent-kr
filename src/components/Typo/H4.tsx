import React from 'react';

interface H4Props {
  children: React.ReactNode;
  className?: string;
}

export const H4: React.FC<H4Props> = ({ 
  children, 
  className = '', 
}) => { 
  return (
    <h4 className={`text-2xl font-bold mb-4 ${className}`}>
      {children}
    </h4>
  );
};