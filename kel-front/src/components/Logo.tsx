import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl'
  };

  const logoSizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-10 h-10'
  };

  return (
    <div className={`logo flex items-center ${className}`}>
      <div className="flex items-center space-x-2">
        <img 
          src="/logo.png" 
          alt="Logo Societário Insight"
          className={logoSizeClasses[size]}
        />
        <span className={`font-bold text-[#1E1E1E] ${sizeClasses[size]}`}>
          Societário Insight
        </span>
      </div>
    </div>
  );
};

export default Logo;
