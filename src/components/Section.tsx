import React from 'react'
interface SectionProps {
    id: string;
  children: React.ReactNode;
  className?: string;
}
export const Section:React.FC<SectionProps> = ({ id,children, className }) => {
  return (
    <section id={id} className={`${className} w-full pt-42 pb-32`}>
        <div className="max-w-[1200px] m-auto">
            {children}
        </div>
    </section>
  )
}
