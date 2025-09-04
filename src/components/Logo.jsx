import React from 'react';

const Logo = ({ 
  size = 'medium', 
  variant = 'default', 
  showSubtitle = true, 
  className = '',
  onClick 
}) => {
  const sizeClass = `logo-${size}`;
  const variantClass = variant === 'white' ? 'logo-text-white' : variant === 'red' ? 'logo-text-red' : '';
  
  return (
    <div 
      className={`logo-text ${sizeClass} ${variantClass} ${className}`}
      onClick={onClick}
      style={{ cursor: onClick ? 'pointer' : 'default' }}
    >
      <div className="logo-content">
        <div className="logo-main">4m'or</div>
        {showSubtitle && (
          <div className="logo-fit">FIT</div>
        )}
      </div>
    </div>
  );
};

export default Logo;
