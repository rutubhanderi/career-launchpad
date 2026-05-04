// components/ui/Button.tsx
import React from 'react';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'cta';
  className?: string;
  showArrow?: boolean;
}

const Button: React.FC<ButtonProps> = ({ href, children, variant = 'primary', className = '', showArrow = false }) => {
  const baseStyles = 'inline-flex items-center justify-center px-6 py-3 font-semibold rounded-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-dark-blue';
  
  const variantStyles = {
    primary: 'bg-brand-light-blue hover:bg-blue-500 text-white',
    secondary: 'bg-transparent border-2 border-brand-light-blue text-brand-light-blue hover:bg-brand-light-blue hover:text-white',
    cta: 'bg-cta-gradient text-brand-dark-blue font-bold',
  };

  return (
    <Link href={href} className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      {children}
      {showArrow && <FaArrowRight className="ml-2" />}
    </Link>
  );
};

export default Button;